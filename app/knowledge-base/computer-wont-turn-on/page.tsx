import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Power, ArrowLeft, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Computer Won\'t Turn On - Complete Troubleshooting Guide | MPDEE Support',
  description: 'Complete guide to fixing computers that won\'t turn on. Learn to diagnose power issues, hardware failures, and get your PC working again.',
  keywords: 'computer won\'t turn on, PC not starting, power issues, hardware failure, black screen, no power'
}

export default function ComputerWontTurnOnGuide() {
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
              <Power className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-sm">
                Computer Won&apos;t Turn On
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  Difficulty: 7/10
                </span>
                <span className="text-muted-foreground">
                  Estimated fix time: 20 minutes - 2 hours
                </span>
              </div>
              <p className="text-lg text-muted-foreground">
                You press the power button on your PC or laptop and nothing happens – maybe no lights, 
                or it powers on but the screen stays black. This issue can range from simple to serious.
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
                  If absolutely nothing turns on (no fans, no lights), it&apos;s likely a power issue – the PC isn&apos;t getting 
                  power due to a bad outlet, a tripped surge protector, or a faulty power supply or battery. In laptops, 
                  a completely drained battery or bad charger can prevent power-on.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  If the computer&apos;s fans spin or lights come on but the screen is black, it could be a display issue 
                  (e.g. monitor turned off or disconnected) or an internal hardware problem (like RAM or graphics card issues). 
                  Sometimes recently added hardware or even a USB device can prevent boot.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Common causes:
                </p>
                <ul className="text-muted-foreground space-y-2 mt-2">
                  <li>• Power supply failure or issues</li>
                  <li>• Faulty power outlets or surge protectors</li>
                  <li>• Dead laptop battery or bad charger</li>
                  <li>• Loose power connections</li>
                  <li>• Monitor/display issues</li>
                  <li>• RAM or graphics card problems</li>
                  <li>• Motherboard or CPU failure</li>
                  <li>• Problematic external devices</li>
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
                  <h3 className="font-semibold mb-2">Step 1: Check Power Source</h3>
                  <p className="text-muted-foreground mb-2">
                    Start with the basics - ensure power is actually reaching your computer:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-1">For Desktop PCs:</h4>
                      <ul className="text-muted-foreground space-y-1 ml-4">
                        <li>• Ensure PC is plugged in firmly</li>
                        <li>• Try a different wall outlet or power strip</li>
                        <li>• Check power switch on back of power supply is ON (I = on)</li>
                        <li>• Bypass surge protector by plugging directly into wall</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">For Laptops:</h4>
                      <ul className="text-muted-foreground space-y-1 ml-4">
                        <li>• Verify charger is securely connected</li>
                        <li>• Check charging indicator light is on</li>
                        <li>• Try a different charger if available</li>
                        <li>• Remove battery (if removable), plug in AC power, and try to start</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 2: Look for Signs of Life</h3>
                  <p className="text-muted-foreground mb-2">
                    When you press power, check for any activity:
                  </p>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• Do any lights blink (keyboard, power LED)?</li>
                    <li>• Do you hear any fans or beeps?</li>
                    <li>• Does the hard drive make any sounds?</li>
                  </ul>
                  <div className="bg-muted/50 p-3 rounded-lg mt-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>If you hear fans but see no display:</strong> The PC might be on but the monitor isn&apos;t showing anything. 
                      Check monitor connections and power.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 3: Check Monitor and Display</h3>
                  <p className="text-muted-foreground mb-2">
                    If you hear the computer starting but see no display:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Check monitor power and turn it on</li>
                    <li>2. Verify video cable is plugged in properly (both ends)</li>
                    <li>3. Make sure monitor is set to correct input</li>
                    <li>4. Try a different monitor or TV if possible</li>
                    <li>5. Try different video ports (HDMI, VGA, DisplayPort)</li>
                  </ol>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 4: Disconnect External Devices</h3>
                  <p className="text-muted-foreground mb-2">
                    Remove all non-essential peripherals that might cause startup issues:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Unplug all USB devices except keyboard and mouse</li>
                    <li>2. Remove external drives, printers, webcams</li>
                    <li>3. Disconnect any recently added hardware</li>
                    <li>4. Try powering on with minimal connections</li>
                  </ol>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 5: Listen for Diagnostic Beeps</h3>
                  <p className="text-muted-foreground mb-2">
                    Some computers have BIOS beep codes that indicate hardware problems:
                  </p>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• 1 long beep: Possible memory issue</li>
                    <li>• 3 long beeps: Often means RAM not detected</li>
                    <li>• Continuous beeping: Power supply or motherboard issue</li>
                    <li>• No beeps but fans running: Could be CPU or motherboard problem</li>
                  </ul>
                  <div className="bg-muted/50 p-3 rounded-lg mt-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>If you hear memory-related beeps:</strong> Try reseating RAM modules by removing and 
                      firmly reinstalling them in their slots.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 6: Reseat Internal Components (Desktop Only)</h3>
                  <p className="text-muted-foreground mb-2">
                    If comfortable with hardware, try reseating components:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Turn off and unplug computer completely</li>
                    <li>2. Open case and locate RAM modules</li>
                    <li>3. Remove RAM by pressing down clips, then reinstall firmly</li>
                    <li>4. Check graphics card is seated properly in slot</li>
                    <li>5. Verify all power cables are connected securely</li>
                  </ol>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-2">
                    <p className="text-amber-800 text-sm">
                      <strong>Caution:</strong> Only attempt this if you&apos;re comfortable with computer hardware. 
                      Ground yourself to prevent static damage.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 7: Test with Minimal Configuration</h3>
                  <p className="text-muted-foreground mb-2">
                    Try starting with bare minimum components:
                  </p>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• Remove all but one RAM module</li>
                    <li>• Disconnect all drives except boot drive</li>
                    <li>• Remove graphics card and use onboard video (if available)</li>
                    <li>• Try to boot with this minimal setup</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
                <p className="text-red-800 text-sm">
                  <strong>When to Seek Professional Help:</strong> If the computer still won&apos;t power on at all, 
                  the power supply in a desktop might have failed, or laptops may have logic board issues. 
                  These require professional diagnosis and potentially component replacement.
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
                  <h3 className="font-semibold mb-2">Power Protection</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Use surge protectors to prevent power damage</li>
                    <li>• Avoid outlets controlled by wall switches</li>
                    <li>• Don&apos;t plug computers into extension cords if possible</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Regular Maintenance</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Clean dust from internal components every 6 months</li>
                    <li>• Ensure proper ventilation around computer</li>
                    <li>• Handle charging ports and cables carefully on laptops</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Proper Usage</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Shut down properly rather than forcing power off</li>
                    <li>• Don&apos;t move desktop computers while powered on</li>
                    <li>• Ensure hardware upgrades are properly installed</li>
                    <li>• Keep spare power cables for laptops</li>
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
                Computer Still Won&apos;t Start?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If your computer still won&apos;t turn on after trying these solutions, 
                it&apos;s likely a hardware failure that requires professional diagnosis and repair.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-shadow-sm">
                  Get Hardware Diagnosis
                </Button>
                <Button variant="outline" size="lg" className="text-shadow-sm">
                  Emergency Repair Service
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
