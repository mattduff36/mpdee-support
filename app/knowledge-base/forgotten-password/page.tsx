import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Lock, ArrowLeft, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Reset Forgotten Windows Password - Complete Guide | MPDEE Support',
  description: 'Complete guide to resetting forgotten Windows passwords. Learn to recover access to your computer with Microsoft accounts, local accounts, and security questions.',
  keywords: 'forgotten password, Windows password reset, locked out, Microsoft account, local account, password recovery'
}

export default function ForgottenPasswordGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background/50 to-background/80">
      {/* Breadcrumb */}
      <section className="py-8 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl">
          <Link 
            href="/knowledge-base" 
            className="inline-flex items-center gap-2 text-mpdee-blue-600 hover:text-mpdee-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Knowledge Base
          </Link>
        </div>
      </section>

      {/* Header */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-start gap-6 mb-8">
            <div className="p-4 rounded-xl bg-red-100 text-red-600">
              <Lock className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-sm">
                Forgotten Password (Unable to Log In)
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  Difficulty: 7/10
                </span>
                <span className="text-muted-foreground">
                  Estimated fix time: 15 minutes - 1 hour
                </span>
              </div>
              <p className="text-lg text-muted-foreground">
                You&apos;re at the Windows sign-in screen and realize you forgot your password, or it&apos;s not being accepted. 
                This can be a stressful situation – essentially locked out of your own computer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Happens */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-card/50 backdrop-blur border-border">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
                <h2 className="text-xl font-semibold text-shadow-sm">Why It Happens</h2>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Human memory isn&apos;t perfect. You might have recently changed your password and don&apos;t remember the new one, 
                  or perhaps you haven&apos;t used the PC in a long time. It&apos;s also possible (though less common) that a Windows 
                  update or glitch could cause login issues (especially if using a Microsoft account and the PC is offline).
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  For local accounts on Windows 10, forgetting the password means you either rely on security questions or a reset disk 
                  (if you made one). On Windows 11, Microsoft encourages using an online account which has different recovery methods.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Common scenarios:
                </p>
                <ul className="text-muted-foreground space-y-2 mt-2">
                  <li>• Recently changed password and forgot new one</li>
                  <li>• Haven&apos;t used computer in a long time</li>
                  <li>• Confusion between multiple passwords</li>
                  <li>• Windows update causing authentication issues</li>
                  <li>• Microsoft account vs local account confusion</li>
                  <li>• Caps Lock or keyboard layout issues</li>
                  <li>• Account type changes</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* How to Fix */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-card/50 backdrop-blur border-border">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h2 className="text-xl font-semibold text-shadow-sm">How to Fix It</h2>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>First, check the basics:</strong> Make sure Caps Lock isn&apos;t on, try different keyboard layouts, 
                  and verify you&apos;re typing the password correctly.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="border border-mpdee-blue-200 rounded-lg p-6 bg-mpdee-blue-50/30">
                  <h3 className="font-bold mb-4 text-lg">Microsoft Account (Online Account)</h3>
                  <p className="text-muted-foreground mb-3">
                    This is the account that uses your email (like Outlook/Hotmail) to sign in:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-mpdee-blue-500 pl-4">
                      <h4 className="font-semibold mb-2">Option 1: Reset on Login Screen</h4>
                      <ol className="text-muted-foreground space-y-1 ml-4">
                        <li>1. On the Windows login screen, click &quot;I forgot my password&quot;</li>
                        <li>2. Follow the prompts to verify your identity</li>
                        <li>3. Microsoft will send a code to your recovery email or phone</li>
                        <li>4. Enter the verification code</li>
                        <li>5. Create a new password</li>
                        <li>6. Use the new password to log in</li>
                      </ol>
                    </div>

                    <div className="border-l-4 border-mpdee-blue-500 pl-4">
                      <h4 className="font-semibold mb-2">Option 2: Reset from Another Device</h4>
                      <ol className="text-muted-foreground space-y-1 ml-4">
                        <li>1. Go to Microsoft Password Reset webpage on phone/tablet</li>
                        <li>2. Enter your Microsoft account email</li>
                        <li>3. Choose verification method (email or SMS)</li>
                        <li>4. Enter the code sent to you</li>
                        <li>5. Create new password</li>
                        <li>6. Return to your PC and use new password</li>
                      </ol>
                      <div className="bg-muted/50 p-3 rounded-lg mt-2">
                        <p className="text-sm text-muted-foreground">
                          <strong>Note:</strong> Your PC needs internet connection to recognize the new password immediately. 
                          Connect via Ethernet or use Wi-Fi options on lock screen if available.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-green-200 rounded-lg p-6 bg-green-50/30">
                  <h3 className="font-bold mb-4 text-lg">Local Account (Windows 10/11)</h3>
                  <p className="text-muted-foreground mb-3">
                    Username and password stored only on your PC:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold mb-2">Option 1: Security Questions (Windows 10)</h4>
                      <ol className="text-muted-foreground space-y-1 ml-4">
                        <li>1. Enter wrong password several times</li>
                        <li>2. Look for &quot;Reset Password&quot; link that appears</li>
                        <li>3. Click it to see security questions</li>
                        <li>4. Answer the questions you set up during account creation</li>
                        <li>5. Create a new password when prompted</li>
                      </ol>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold mb-2">Option 2: Password Reset Disk</h4>
                      <p className="text-muted-foreground mb-2">If you previously created a reset disk:</p>
                      <ol className="text-muted-foreground space-y-1 ml-4">
                        <li>1. Insert your password reset USB drive</li>
                        <li>2. On login screen, click &quot;Reset Password&quot;</li>
                        <li>3. Follow the Password Reset Wizard</li>
                        <li>4. Create a new password</li>
                      </ol>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold mb-2">Option 3: Another Administrator Account</h4>
                      <p className="text-muted-foreground mb-2">If there&apos;s another admin user on the PC:</p>
                      <ol className="text-muted-foreground space-y-1 ml-4">
                        <li>1. Log in with the other administrator account</li>
                        <li>2. Go to Settings &gt; Accounts &gt; Family &amp; other users</li>
                        <li>3. Select your locked account</li>
                        <li>4. Click &quot;Change account type&quot; or use Control Panel user management</li>
                        <li>5. Reset password for your account</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="border border-amber-200 rounded-lg p-6 bg-amber-50/30">
                  <h3 className="font-bold mb-4 text-lg">Advanced Methods (Technical)</h3>
                  <p className="text-muted-foreground mb-3">
                    If no other options are available:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-500 pl-4">
                      <h4 className="font-semibold mb-2">Windows Installation USB Method</h4>
                      <p className="text-muted-foreground mb-2">
                        Advanced users can use Windows installation media to access Command Prompt and enable 
                        the built-in Administrator account or reset passwords via command line.
                      </p>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-2">
                        <p className="text-red-800 text-sm">
                          <strong>Warning:</strong> This method is technical and can cause system issues if done incorrectly. 
                          Consider professional help if you&apos;re not comfortable with advanced troubleshooting.
                        </p>
                      </div>
                    </div>

                    <div className="border-l-4 border-amber-500 pl-4">
                      <h4 className="font-semibold mb-2">Professional Service</h4>
                      <p className="text-muted-foreground mb-2">
                        Computer repair shops can often unlock Windows accounts with specialized tools and techniques. 
                        This is the safest option if the data is important and other methods haven&apos;t worked.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Prevention */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-card/50 backdrop-blur border-border">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-6 w-6 text-yellow-600" />
                <h2 className="text-xl font-semibold text-shadow-sm">How to Prevent It</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Password Management</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Use memorable passwords or passphrases</li>
                    <li>• Write down passwords and keep them in a secure place (wallet, safe)</li>
                    <li>• Use a password manager for complex passwords</li>
                    <li>• Practice typing new passwords several times after changing them</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Account Setup</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Set up security questions for local accounts (Windows 10)</li>
                    <li>• Create a password reset disk when setting up new accounts</li>
                    <li>• Keep recovery email and phone number updated for Microsoft accounts</li>
                    <li>• Consider using Windows Hello PIN as alternative login</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Microsoft Account Benefits</h3>
                  <p className="text-muted-foreground">
                    Consider switching to using a Microsoft account to log in, as password resets can be done online easily. 
                    This is especially useful for seniors or non-technical users – Microsoft accounts have a straightforward recovery flow.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Alternative Access Methods</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Set up Windows Hello PIN (easier to remember than complex passwords)</li>
                    <li>• Enable picture password if available</li>
                    <li>• Consider biometric login if your device supports it</li>
                    <li>• Keep multiple administrator accounts on shared computers</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Documentation</h3>
                  <p className="text-muted-foreground">
                    When you change passwords, log in a couple times with the new one to build muscle memory, 
                    and update any written notes. It&apos;s far less hassle to take these preventive steps than to bypass 
                    a locked Windows account later.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-red-50/50 to-red-100/30 border-red-200">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-shadow-sm">
                Still Locked Out?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you&apos;ve tried all applicable methods and still can&apos;t access your account, 
                professional password recovery services can help unlock your computer safely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-shadow-sm">
                  Get Password Recovery Help
                </Button>
                <Button variant="outline" size="lg" className="text-shadow-sm">
                  Emergency Access Service
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
