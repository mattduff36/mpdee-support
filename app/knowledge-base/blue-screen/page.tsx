import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertTriangle, ArrowLeft, CheckCircle, Lightbulb, Skull } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Fix Blue Screen of Death (BSOD) - Complete Guide | MPDEE Support',
  description: 'Complete guide to fixing Windows Blue Screen of Death errors. Learn causes, solutions, and prevention for BSOD crashes with expert troubleshooting steps.',
  keywords: 'blue screen of death, BSOD, Windows crash, stop code, critical error, system crash, memory management, driver issues'
}

export default function BlueScreenGuide() {
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
              <Skull className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-sm">
                Blue Screen of Death (Windows Crash)
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  Difficulty: 8/10
                </span>
                <span className="text-muted-foreground">
                  Estimated fix time: 30 minutes - 2 hours
                </span>
              </div>
              <p className="text-lg text-muted-foreground">
                When your Windows PC suddenly shows a blue screen with a sad face or error code and then restarts, 
                that&apos;s the dreaded Blue Screen of Death (BSOD). It can be scary, but it&apos;s a safety measure when 
                Windows encounters a serious error.
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
                  A BSOD is typically caused by critical errors in Windows, often due to hardware failures or driver issues. 
                  Common culprits include faulty memory (RAM), a failing hard drive, overheating, or an outdated/corrupt device driver. 
                  It can also be triggered by software conflicts (like a buggy program or virus messing with system files) or 
                  recently installed hardware that isn&apos;t compatible.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Essentially, Windows &quot;blue-screens&quot; to prevent further damage when it can&apos;t recover from an error.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Most common causes:
                </p>
                <ul className="text-muted-foreground space-y-2 mt-2">
                  <li>• Faulty memory (RAM) modules</li>
                  <li>• Failing hard drive or SSD</li>
                  <li>• Overheating CPU or GPU</li>
                  <li>• Outdated or corrupt device drivers</li>
                  <li>• Software conflicts or malware</li>
                  <li>• Recently installed incompatible hardware</li>
                  <li>• Power supply issues</li>
                  <li>• Motherboard problems</li>
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
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-amber-800 text-sm">
                  <strong>Important:</strong> Since BSODs usually come with a stop code or error message, 
                  note down any code displayed (for example, CRITICAL_PROCESS_DIED or MEMORY_MANAGEMENT). 
                  This code can be searched online for specific clues.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 1: Restart and Check if It Recurs</h3>
                  <p className="text-muted-foreground mb-2">
                    The first step after a BSOD is to simply restart the computer and see if it was a one-time fluke. 
                    If you keep getting blue screens, proceed with the following steps.
                  </p>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 2: Update Drivers</h3>
                  <p className="text-muted-foreground mb-2">
                    Faulty or old drivers are a common cause of BSODs. Update all hardware drivers:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Right-click Start button and select &quot;Device Manager&quot;</li>
                    <li>2. Look for devices with yellow warning signs</li>
                    <li>3. Right-click each device and select &quot;Update driver&quot;</li>
                    <li>4. Focus especially on graphics, Wi-Fi, and audio drivers</li>
                    <li>5. Visit manufacturer websites for latest drivers if needed</li>
                  </ol>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 3: Install Windows Updates</h3>
                  <p className="text-muted-foreground mb-2">
                    Make sure your Windows OS is up to date:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Go to Settings &gt; Update &amp; Security &gt; Windows Update</li>
                    <li>2. Click &quot;Check for updates&quot;</li>
                    <li>3. Install all available updates</li>
                    <li>4. Restart when prompted</li>
                  </ol>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 4: Run Hardware Diagnostics</h3>
                  <p className="text-muted-foreground mb-2">
                    Test your RAM and hard drive for errors:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-1">Memory Test:</h4>
                      <ol className="text-muted-foreground space-y-1 ml-4">
                        <li>1. Search for &quot;Windows Memory Diagnostic&quot; in Start menu</li>
                        <li>2. Choose &quot;Restart now and check for problems&quot;</li>
                        <li>3. Let it run the memory test during restart</li>
                        <li>4. Check results after Windows loads</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Hard Drive Test:</h4>
                      <ol className="text-muted-foreground space-y-1 ml-4">
                        <li>1. Open Command Prompt as Administrator</li>
                        <li>2. Type: <code className="bg-muted px-1 rounded">chkdsk C: /f /r</code></li>
                        <li>3. Press Y when asked to schedule scan on restart</li>
                        <li>4. Restart to run the disk check</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 5: Check for Overheating</h3>
                  <p className="text-muted-foreground mb-2">
                    Overheating can lead to system crashes:
                  </p>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• Use hardware monitoring tools to check temperatures</li>
                    <li>• Ensure fans are running and vents aren&apos;t blocked</li>
                    <li>• Clean out dust from PC fans and heatsinks with compressed air</li>
                    <li>• CPU temps should stay under 80°C under load</li>
                  </ul>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 6: Remove Recent Changes</h3>
                  <p className="text-muted-foreground mb-2">
                    If BSODs started after recent changes:
                  </p>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• Uninstall recently installed software</li>
                    <li>• Remove or reseat recently installed hardware</li>
                    <li>• Roll back recent driver updates in Device Manager</li>
                    <li>• Check that RAM modules and graphics cards are properly seated</li>
                  </ul>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 7: Boot into Safe Mode</h3>
                  <p className="text-muted-foreground mb-2">
                    If you can&apos;t stay in Windows without crashing:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Interrupt boot 3 times to trigger Recovery menu</li>
                    <li>2. Choose Troubleshoot &gt; Advanced Options &gt; Startup Settings</li>
                    <li>3. Click Restart and press F4 for Safe Mode</li>
                    <li>4. In Safe Mode, perform driver updates or system restore</li>
                  </ol>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 8: Use System Restore</h3>
                  <p className="text-muted-foreground mb-2">
                    Roll back to a previous working state:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Search for &quot;Create a restore point&quot; in Start menu</li>
                    <li>2. Click &quot;System Restore&quot;</li>
                    <li>3. Choose a restore point from before the BSODs started</li>
                    <li>4. Follow prompts to restore (won&apos;t affect personal files)</li>
                  </ol>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
                <p className="text-red-800 text-sm">
                  <strong>When to Seek Professional Help:</strong> If none of these work, the issue might be deeper 
                  (like a failing motherboard or power supply). Professional technicians can analyze minidump files 
                  Windows creates during crashes to pinpoint the exact cause.
                </p>
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
                  <h3 className="font-semibold mb-2">Keep Software Updated</h3>
                  <p className="text-muted-foreground">
                    Most BSOD prevention comes down to good maintenance. Keep your device drivers and Windows updated 
                    so known bugs are fixed. This addresses the majority of compatibility issues.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Use Quality Hardware</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Choose reputable brands for RAM, storage, and other components</li>
                    <li>• Test new hardware thoroughly before relying on it</li>
                    <li>• Avoid overclocking unless you&apos;re experienced</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Maintain Proper Cooling</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Clean PC internals every few months to avoid dust buildup</li>
                    <li>• Ensure fans are not obstructed</li>
                    <li>• Monitor temperatures periodically</li>
                    <li>• Replace thermal paste on CPU every few years</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Security and Backups</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Run antivirus to prevent malware-induced crashes</li>
                    <li>• Create regular backups of important data</li>
                    <li>• Address BSODs early - repeated crashes can indicate failing components</li>
                  </ul>
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
                Recurring Blue Screens?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you&apos;re experiencing frequent BSODs despite trying these solutions, 
                it&apos;s likely a hardware issue that requires professional diagnosis and repair.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-shadow-sm">
                  Get Expert Diagnosis
                </Button>
                <Button variant="outline" size="lg" className="text-shadow-sm">
                  Emergency Support
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
