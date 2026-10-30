'use client';
import Link from 'next/link';
export default function ErrorPage({reset}:{error:Error & {digest?:string};reset:()=>void}){return <section className="support-page support-intro"><span className="support-kicker">SOMETHING WENT WRONG</span><h1>Let’s try<br/><span>that again.</span></h1><p>This page couldn’t load. Try again, or contact us if the problem continues.</p><div className="support-actions"><button className="support-action" onClick={reset}>Try again ↗</button><Link className="support-email" href="/contact">Contact support ↗</Link></div></section>}
