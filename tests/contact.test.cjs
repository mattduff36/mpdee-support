const {test,beforeEach}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const Module=require('node:module');
const ts=require('typescript');
const source=path.resolve(__dirname,'../lib/contact.ts');
const compiled=ts.transpileModule(fs.readFileSync(source,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
const mod=new Module(source,module);mod.filename=source;mod.paths=module.paths;mod._compile(compiled,source);
const {handleContactSubmission:submit,resetContactRateLimitForTests:reset}=mod.exports;
const body=(fields={})=>JSON.stringify({name:'Preview Test',email:'test@example.com',projectType:'Remote support',details:'A test request with no real delivery.',...fields});
let calls;
const mock=async(_url,options)=>{calls.push(JSON.parse(options.body));return {ok:true,json:async()=>({id:'mock-id'})};};
const options=()=>({ip:'127.0.0.1',fetchImpl:mock});
beforeEach(()=>{reset();calls=[];process.env.RESEND_API_KEY='test-only';process.env.EMAIL_FROM='MPDEE Support <test@example.com>';});
test('invalid, oversized and injected requests never reach the provider',async()=>{
  for(const raw of ['{','null',body({email:'invalid'}),body({name:'Bad\nBcc: other@example.com'}),body({projectType:'invented'}),body({details:'x'.repeat(1001)}),JSON.stringify({padding:'🌍'.repeat(2100)})]){
    const result=await submit(raw,options());assert.ok(result.status===400||result.status===413);
  }
  assert.equal(calls.length,0);
});
test('sender, recipient and reply-to use trusted configuration',async()=>{
  const result=await submit(body({to:'other@example.com',from:'other@example.com'}),options());
  assert.equal(result.status,200);assert.equal(calls[0].from,'MPDEE Support <test@example.com>');assert.deepEqual(calls[0].to,['admin@mpdee.co.uk']);assert.equal(calls[0].reply_to,'test@example.com');assert.match(calls[0].subject,/Support enquiry/);assert.equal(calls[0].html,undefined);
});
test('provider rejection or missing delivery id cannot report success',async()=>{
  const original=console.error;console.error=()=>{};
  try{for(const response of [{ok:false,json:async()=>({})},{ok:true,json:async()=>({})},{ok:true,json:async()=>{throw Error('invalid JSON')}}]){
    const result=await submit(body(),{ip:'test',fetchImpl:async()=>response});assert.equal(result.status,503);assert.equal(result.body.message,undefined);
  }}finally{console.error=original;}
});
test('missing credentials do not send',async()=>{
  delete process.env.RESEND_API_KEY;const original=console.error;console.error=()=>{};
  try{assert.equal((await submit(body(),options())).status,503);assert.equal(calls.length,0);}finally{console.error=original;}
});
test('rate limit rejects repeats and expires',async()=>{
  for(let i=0;i<5;i++)assert.equal((await submit(body(),{...options(),now:1000})).status,200);
  assert.equal((await submit(body(),{...options(),now:2000})).status,429);
  assert.equal((await submit(body(),{...options(),now:61000})).status,200);assert.equal(calls.length,6);
});
