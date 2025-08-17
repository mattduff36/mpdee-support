import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Printer, ArrowLeft, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Fix Printer Problems - Complete Troubleshooting Guide | MPDEE Support',
  description: 'Complete guide to fixing printer issues including offline status, paper jams, connectivity problems, and print queue issues. Expert printer troubleshooting solutions.',
  keywords: 'printer problems, printer not printing, printer offline, paper jam, print queue, printer troubleshooting, printer drivers'
}

export default function PrinterProblemsGuide() {
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
              <Printer className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-sm">
                Printer Not Printing (Printer Issues)
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  Difficulty: 5/10
                </span>
                <span className="text-muted-foreground">
                  Estimated fix time: 15-45 minutes
                </span>
              </div>
              <p className="text-lg text-muted-foreground">
                You sent a document to print, but nothing happens – no output, maybe an error message, 
                or the printer status shows &quot;Offline.&quot; Printers can be temperamental, but most issues are fixable.
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
                  Common printer issues include lack of connectivity (the computer can&apos;t talk to the printer), 
                  the printer being set to &quot;Offline&quot; mode, a paper jam, or low ink/toner. Sometimes the print job 
                  gets stuck in the queue due to a glitch. If it&apos;s a network or wireless printer, it might have 
                  lost its connection to the network.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Most common causes:
                </p>
                <ul className="text-muted-foreground space-y-2 mt-2">
                  <li>• Connectivity issues (USB loose, Wi-Fi disconnected)</li>
                  <li>• Printer set to &quot;Offline&quot; mode</li>
                  <li>• Paper jams or empty paper tray</li>
                  <li>• Low or empty ink/toner cartridges</li>
                  <li>• Print jobs stuck in queue</li>
                  <li>• Outdated or corrupted printer drivers</li>
                  <li>• Network connectivity issues for wireless printers</li>
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
                  <h3 className="font-semibold mb-2">Step 1: Check the Basics</h3>
                  <p className="text-muted-foreground mb-2">
                    These might sound obvious, but power or paper issues can make a printer unresponsive:
                  </p>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• Is the printer turned on and showing no error lights?</li>
                    <li>• Is there paper in the tray?</li>
                    <li>• Are the ink or toner cartridges not empty?</li>
                    <li>• Check for any error messages on the printer display</li>
                  </ul>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 2: Check Connections</h3>
                  <p className="text-muted-foreground mb-2">
                    Ensure the printer can communicate with your computer:
                  </p>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• For USB printers: Check cable is firmly plugged in</li>
                    <li>• For wireless printers: Verify Wi-Fi light is on and connected</li>
                    <li>• Try using a different USB port or cable if available</li>
                  </ul>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 3: Check Printer Status</h3>
                  <p className="text-muted-foreground mb-2">
                    Make sure Windows recognizes your printer and it&apos;s not offline:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Go to Settings &gt; Bluetooth &amp; devices &gt; Printers &amp; scanners</li>
                    <li>2. Find your printer and click on it</li>
                    <li>3. Make sure &quot;Use Printer Offline&quot; is NOT checked</li>
                    <li>4. Verify you&apos;re printing to the correct printer</li>
                  </ol>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 4: Clear Print Queue</h3>
                  <p className="text-muted-foreground mb-2">
                    Cancel any stuck print jobs that might be blocking new ones:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Open your printer queue (double-click printer in Settings)</li>
                    <li>2. Select any pending print jobs</li>
                    <li>3. Right-click and choose &quot;Cancel&quot; to clear them</li>
                    <li>4. Try printing again after clearing the queue</li>
                  </ol>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 5: Handle Paper Jams</h3>
                  <p className="text-muted-foreground mb-2">
                    If a paper jam is indicated on the printer display:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Turn off the printer completely</li>
                    <li>2. Open the printer&apos;s access panels (check manual for location)</li>
                    <li>3. Gently remove jammed paper by pulling in direction of paper path</li>
                    <li>4. Check for any torn pieces and remove them</li>
                    <li>5. Close panels and turn printer back on</li>
                  </ol>
                  <div className="bg-muted/50 p-3 rounded-lg mt-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Warning:</strong> Never force paper out. Pull gently and in the direction it would normally travel.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 6: Restart Everything</h3>
                  <p className="text-muted-foreground mb-2">
                    Power cycling often resets connections and clears glitches:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Turn off the printer and unplug it for 30 seconds</li>
                    <li>2. Restart your computer</li>
                    <li>3. For network printers, restart your Wi-Fi router too</li>
                    <li>4. Plug in and turn on the printer</li>
                    <li>5. Try printing a test page</li>
                  </ol>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 7: Reinstall Printer Drivers (If Issues Persist)</h3>
                  <p className="text-muted-foreground mb-2">
                    If nothing prints at all, the driver might be corrupted:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Go to Settings &gt; Printers &amp; scanners</li>
                    <li>2. Click your printer and choose &quot;Remove&quot;</li>
                    <li>3. Download latest driver from manufacturer&apos;s website</li>
                    <li>4. Install the new driver or let Windows re-detect the printer</li>
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
                  <h3 className="font-semibold mb-2">Keep Drivers Updated</h3>
                  <p className="text-muted-foreground">
                    Keep your printer&apos;s drivers updated to ensure compatibility with your computer&apos;s OS. 
                    Windows Update often provides driver updates, or check the manufacturer site periodically.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Maintain Good Connectivity</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• For wireless printers, ensure strong Wi-Fi signal or Ethernet connection</li>
                    <li>• Place printer close enough to router for stable connection</li>
                    <li>• Use quality USB cables for wired connections</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Regular Maintenance</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Print a test page regularly to prevent ink cartridges from drying out</li>
                    <li>• Use good quality paper to avoid jams (avoid bent or damp paper)</li>
                    <li>• Keep printer in dust-free, stable environment</li>
                    <li>• Know that printers may appear offline if in deep sleep - press power to wake</li>
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
          <Card className="bg-gradient-to-br from-mpdee-blue-50/50 to-mpdee-blue-100/30 border-mpdee-blue-200">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-shadow-sm">
                Printer Still Not Working?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If your printer continues to have issues after trying these solutions, 
                it might be a hardware problem or require professional diagnosis and repair.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-shadow-sm">
                  Get Printer Support
                </Button>
                <Button variant="outline" size="lg" className="text-shadow-sm">
                  Schedule Service Call
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
