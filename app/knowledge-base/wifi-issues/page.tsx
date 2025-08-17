import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Wifi, ArrowLeft, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Fix WiFi and Internet Connection Issues - Complete Guide | MPDEE Support',
  description: 'Complete guide to fixing WiFi and internet connection problems. Learn to troubleshoot router issues, weak signals, and connectivity problems with expert solutions.',
  keywords: 'WiFi problems, internet connection issues, router troubleshooting, network problems, WiFi not working, internet slow'
}

export default function WiFiIssuesGuide() {
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
              <Wifi className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-sm">
                Internet or Wi-Fi Connection Issues
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Difficulty: 3/10
                </span>
                <span className="text-muted-foreground">
                  Estimated fix time: 10-20 minutes
                </span>
              </div>
              <p className="text-lg text-muted-foreground">
                Nothing is more annoying than losing your internet connection or having painfully slow Wi-Fi. 
                You might see a warning icon on your Wi-Fi signal or just be unable to load websites.
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
                  Common causes include a glitchy router, weak Wi-Fi signal, or issues with your Internet Service Provider (ISP). 
                  Sometimes the computer&apos;s network settings or a brief service outage are to blame. Even having Airplane Mode 
                  on by mistake will cut off networks.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Most common causes:
                </p>
                <ul className="text-muted-foreground space-y-2 mt-2">
                  <li>• Router or modem technical glitches</li>
                  <li>• Weak Wi-Fi signal due to distance or obstacles</li>
                  <li>• ISP service outages or maintenance</li>
                  <li>• Incorrect network settings on your device</li>
                  <li>• Airplane Mode accidentally enabled</li>
                  <li>• Outdated network drivers</li>
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
                  <h3 className="font-semibold mb-2">Step 1: Restart Your Router and Modem</h3>
                  <p className="text-muted-foreground mb-2">
                    Often the simplest fix is to restart your router and modem. This clears network glitches:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Unplug the power cable from both router and modem</li>
                    <li>2. Wait 30 seconds</li>
                    <li>3. Plug the modem back in first, wait 2 minutes</li>
                    <li>4. Plug the router back in and wait another 2 minutes</li>
                  </ol>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 2: Check Your Device Settings</h3>
                  <p className="text-muted-foreground mb-2">
                    Make sure Wi-Fi is turned on and Airplane Mode is off:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Click the network icon in the taskbar (bottom right)</li>
                    <li>2. Ensure Wi-Fi is turned on</li>
                    <li>3. Make sure Airplane Mode is off</li>
                    <li>4. Check if your network appears in the list</li>
                  </ol>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 3: Forget and Reconnect to Network</h3>
                  <p className="text-muted-foreground mb-2">
                    If you see your Wi-Fi network but can&apos;t connect, try this:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Right-click on your Wi-Fi network name</li>
                    <li>2. Select &quot;Forget&quot; or &quot;Forget this network&quot;</li>
                    <li>3. Click on the network again to reconnect</li>
                    <li>4. Enter your Wi-Fi password when prompted</li>
                  </ol>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 4: Run Windows Network Troubleshooter</h3>
                  <p className="text-muted-foreground mb-2">
                    Windows has a built-in tool that can detect and fix network problems automatically:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Go to Settings &gt; Network &amp; Internet &gt; Status</li>
                    <li>2. Click &quot;Network troubleshooter&quot;</li>
                    <li>3. Follow the prompts to let Windows diagnose the issue</li>
                    <li>4. Apply any fixes it suggests</li>
                  </ol>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 5: Check Signal Strength and Distance</h3>
                  <p className="text-muted-foreground mb-2">
                    If the internet is slow or intermittent:
                  </p>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• Move closer to the Wi-Fi router</li>
                    <li>• Try connecting via Ethernet cable to test if it&apos;s a Wi-Fi issue</li>
                    <li>• Check if the problem affects all devices or just one</li>
                  </ul>
                  <div className="bg-muted/50 p-3 rounded-lg mt-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Tip:</strong> If all devices are affected, contact your ISP as it might be a service outage.
                    </p>
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
                  <h3 className="font-semibold mb-2">Optimal Router Placement</h3>
                  <p className="text-muted-foreground">
                    Place your Wi-Fi router in a central location in your home for a stronger signal, and keep it elevated 
                    (not buried behind furniture). This ensures better coverage throughout your space.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Regular Maintenance</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Keep router firmware updated through the settings interface</li>
                    <li>• Use a strong Wi-Fi password to prevent unauthorized access</li>
                    <li>• Reboot your router weekly to keep the network fresh</li>
                    <li>• Consider 5GHz band to avoid interference from neighbors</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Advanced Tips</h3>
                  <p className="text-muted-foreground">
                    If you experience frequent Wi-Fi interference, consider switching your router to a less crowded channel. 
                    Many higher-end routers can schedule automatic reboots at night to maintain optimal performance.
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
                Network Issues Persist?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you&apos;re still experiencing connectivity problems after trying these solutions, 
                it might be a hardware issue or require advanced network configuration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-shadow-sm">
                  Get Network Support
                </Button>
                <Button variant="outline" size="lg" className="text-shadow-sm">
                  Schedule Diagnosis
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
