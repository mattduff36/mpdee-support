import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Monitor, ArrowLeft, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Fix Slow Computer Performance - Complete Guide | MPDEE Support',
  description: 'Complete guide to fixing slow computer performance. Learn why computers run slowly and get step-by-step solutions to speed up your PC with expert tips from MPDEE Support.',
  keywords: 'slow computer, speed up PC, computer running slow, improve performance, Task Manager, RAM, CPU, malware removal'
}

export default function SlowComputerGuide() {
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
            <div className="p-4 rounded-xl bg-mpdee-blue-100 text-mpdee-blue-600">
              <Monitor className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-sm">
                Slow Computer Performance
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  Difficulty: 4/10
                </span>
                <span className="text-muted-foreground">
                  Estimated fix time: 15-30 minutes
                </span>
              </div>
              <p className="text-lg text-muted-foreground">
                A slow or lagging computer is one of the most common frustrations. Programs might take forever to open, 
                and the whole system feels sluggish. Here&apos;s how to diagnose and fix the problem.
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
                  This usually occurs because too many programs are running at once or in the background, consuming your PC&apos;s 
                  memory and CPU power. Insufficient RAM or even malware can also bog down performance. For example, having lots 
                  of apps auto-start with Windows or an active virus scan can eat up resources and make everything slow.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Common causes include:
                </p>
                <ul className="text-muted-foreground space-y-2 mt-2">
                  <li>• Too many programs running simultaneously</li>
                  <li>• Background processes consuming resources</li>
                  <li>• Insufficient RAM for current workload</li>
                  <li>• Malware or virus infections</li>
                  <li>• Full or nearly full hard drive</li>
                  <li>• Outdated hardware or drivers</li>
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
              
              <div className="space-y-6">
                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 1: Close Unnecessary Programs</h3>
                  <p className="text-muted-foreground mb-2">
                    Start by closing any programs or browser tabs you don&apos;t need. This immediately frees up memory and CPU resources.
                  </p>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 2: Use Task Manager</h3>
                  <p className="text-muted-foreground mb-2">
                    Open the Task Manager (press <kbd className="px-2 py-1 bg-muted rounded text-sm">Ctrl + Shift + Esc</kbd>) 
                    to see what&apos;s using up memory or CPU. You can end tasks that aren&apos;t needed.
                  </p>
                  <div className="bg-muted/50 p-3 rounded-lg mt-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Tip:</strong> Look for processes using high CPU (above 50%) or Memory usage. 
                      Be careful not to end Windows system processes.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 3: Restart Your Computer</h3>
                  <p className="text-muted-foreground mb-2">
                    Reboot the computer to clear out background processes and give it a fresh start.
                  </p>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 4: Free Up Disk Space</h3>
                  <p className="text-muted-foreground mb-2">
                    Delete temporary files and run the built-in Disk Cleanup tool:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Click Start menu and type &quot;Disk Cleanup&quot;</li>
                    <li>2. Select your main drive (usually C:)</li>
                    <li>3. Check all categories and click &quot;Clean up system files&quot;</li>
                    <li>4. Let it run to clear several GB of space</li>
                  </ol>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 5: Run Antivirus Scan</h3>
                  <p className="text-muted-foreground mb-2">
                    Perform a full antivirus scan to rule out malware (viruses can consume resources and slow you down):
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Open Windows Security (search for it in Start menu)</li>
                    <li>2. Go to Virus & threat protection</li>
                    <li>3. Click &quot;Scan options&quot; and select &quot;Full scan&quot;</li>
                    <li>4. Let the scan complete and remove any threats found</li>
                  </ol>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 6: Disable Startup Programs</h3>
                  <p className="text-muted-foreground mb-2">
                    Uninstall unused programs and disable unnecessary startup apps:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Go to Settings &gt; Apps &gt; Startup</li>
                    <li>2. Turn off programs you don&apos;t need at startup</li>
                    <li>3. Keep only essential programs enabled</li>
                  </ol>
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
                  <h3 className="font-semibold mb-2">Keep Your System Lean</h3>
                  <p className="text-muted-foreground">
                    Limit the number of programs that open on startup – only allow essential ones. 
                    This prevents your computer from being overwhelmed from the moment it starts.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Regular Maintenance</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Run virus scans regularly and keep antivirus updated</li>
                    <li>• Delete or archive files you no longer need</li>
                    <li>• Move large files to external drive or cloud storage</li>
                    <li>• Restart your PC every few days for a fresh start</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Hardware Considerations</h3>
                  <p className="text-muted-foreground">
                    If your computer is older, adding more RAM can greatly improve performance. 
                    Windows needs some free space to run efficiently, so keep at least 10-20% of your disk free.
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
          <Card className="bg-gradient-to-br from-mpdee-blue-50/50 to-mpdee-blue-100/30 border-mpdee-blue-200">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-shadow-sm">
                Still Having Issues?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If your computer is still running slowly after trying these steps, it might be time for 
                professional help. Our experts can diagnose hardware issues and provide advanced solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-shadow-sm">
                  Get Professional Help
                </Button>
                <Button variant="outline" size="lg" className="text-shadow-sm">
                  Contact Support
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
