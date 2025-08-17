import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Thermometer, ArrowLeft, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Fix Overheating Computer - Complete Cooling Guide | MPDEE Support',
  description: 'Complete guide to fixing computer overheating issues. Learn to clean dust, improve cooling, and prevent thermal shutdowns with expert solutions.',
  keywords: 'computer overheating, thermal shutdown, cooling fans, dust cleaning, CPU temperature, laptop cooling'
}

export default function OverheatingGuide() {
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
              <Thermometer className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-sm">
                Overheating Computer
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  Difficulty: 7/10
                </span>
                <span className="text-muted-foreground">
                  Estimated fix time: 30 minutes - 1 hour
                </span>
              </div>
              <p className="text-lg text-muted-foreground">
                If your computer feels very hot, fans are constantly revving loud, or it randomly shuts itself down 
                especially under heavy use, it&apos;s likely overheating. Overheating can cause slowness, unexpected shutdowns, 
                or even BSOD crashes to protect the hardware.
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
                  Computers generate heat, and they rely on cooling systems (fans, heat sinks, airflow) to keep temperatures 
                  in check. Overheating occurs when this cooling is insufficient. Common reasons include dust buildup blocking 
                  air vents or clogging fans, a failed cooling fan, or using the computer in a very hot environment or on a 
                  soft surface (like a blanket) that blocks airflow.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Laptops are particularly prone if their vents are obstructed. Also, running intensive tasks (like games, 
                  video editing, etc.) for long periods can push temperatures high, especially if the cooling system is marginal.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Common causes:
                </p>
                <ul className="text-muted-foreground space-y-2 mt-2">
                  <li>• Dust buildup blocking air vents and fans</li>
                  <li>• Failed or malfunctioning cooling fans</li>
                  <li>• High ambient temperature environment</li>
                  <li>• Laptops used on soft surfaces (beds, couches)</li>
                  <li>• Intensive tasks running for extended periods</li>
                  <li>• Old thermal paste on CPU/GPU</li>
                  <li>• Inadequate case ventilation (desktops)</li>
                  <li>• Powerful hardware in small cases</li>
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
                  <h3 className="font-semibold mb-2">Step 1: Ensure Proper Ventilation</h3>
                  <p className="text-muted-foreground mb-2">
                    Make sure your computer has adequate airflow:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-1">For Desktop PCs:</h4>
                      <ul className="text-muted-foreground space-y-1 ml-4">
                        <li>• Keep 6+ inches clearance around all vents</li>
                        <li>• Ensure intake and exhaust fans aren&apos;t blocked</li>
                        <li>• Don&apos;t place PC in enclosed cabinet without ventilation</li>
                        <li>• Check that all case panels are properly closed</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">For Laptops:</h4>
                      <ul className="text-muted-foreground space-y-1 ml-4">
                        <li>• Use on hard, flat surfaces only</li>
                        <li>• Avoid beds, couches, or soft surfaces that block vents</li>
                        <li>• Consider a laptop cooling pad with fans</li>
                        <li>• Keep vents on sides/bottom clear of obstructions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 2: Clean Dust from Components</h3>
                  <p className="text-muted-foreground mb-2">
                    Dust is the #1 cause of overheating. Clean it out safely:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Shut down and unplug the computer completely</li>
                    <li>2. Take computer outside or to well-ventilated area</li>
                    <li>3. Use compressed air cans (not vacuum) to blow out dust</li>
                    <li>4. Focus on fans, heat sinks, vents, and air intakes</li>
                    <li>5. Hold fans still while blowing to prevent damage</li>
                    <li>6. For laptops, blow air into vents from outside</li>
                  </ol>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-2">
                    <p className="text-amber-800 text-sm">
                      <strong>Safety:</strong> Never use a vacuum directly on components - static electricity can damage parts. 
                      Always use compressed air and do this outdoors to avoid spreading dust indoors.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 3: Check All Fans Are Working</h3>
                  <p className="text-muted-foreground mb-2">
                    Verify that cooling fans are actually spinning:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Power on the computer and listen for fan noise</li>
                    <li>2. For desktops, visually check that case fans are spinning</li>
                    <li>3. CPU fan should spin up during startup</li>
                    <li>4. Graphics card fan should activate under load</li>
                    <li>5. If any fan isn&apos;t working, it needs replacement</li>
                  </ol>
                  <div className="bg-muted/50 p-3 rounded-lg mt-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Some fans are temperature-controlled and may not spin when the system is cool. 
                      Run a demanding program to heat up the system and check again.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 4: Monitor Temperatures</h3>
                  <p className="text-muted-foreground mb-2">
                    Use software to check actual temperatures:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Download temperature monitoring software (Core Temp, HWMonitor)</li>
                    <li>2. Check CPU temperatures under normal and heavy load</li>
                    <li>3. Normal temps: 30-50°C idle, 60-80°C under load</li>
                    <li>4. If consistently above 80°C, cooling is insufficient</li>
                    <li>5. Above 90°C indicates serious overheating</li>
                  </ol>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 5: Improve Environment</h3>
                  <p className="text-muted-foreground mb-2">
                    Optimize the computer&apos;s operating environment:
                  </p>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• Move to cooler room or improve air conditioning</li>
                    <li>• Keep computer away from heat sources (radiators, direct sunlight)</li>
                    <li>• Ensure room has good air circulation</li>
                    <li>• For laptops, use cooling pads with additional fans</li>
                    <li>• Close unnecessary programs to reduce heat generation</li>
                  </ul>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 6: Advanced Solutions (If Needed)</h3>
                  <p className="text-muted-foreground mb-2">
                    For persistent overheating after basic cleaning:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-1">Replace Thermal Paste:</h4>
                      <p className="text-muted-foreground text-sm ml-4">
                        Old thermal paste between CPU and heatsink can dry out and lose effectiveness. 
                        This is advanced and may void warranty - consider professional service.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Add More Fans (Desktops):</h4>
                      <p className="text-muted-foreground text-sm ml-4">
                        Install additional case fans for better airflow if your case supports it.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Upgrade Cooling:</h4>
                      <p className="text-muted-foreground text-sm ml-4">
                        Consider aftermarket CPU coolers or better case ventilation for high-performance systems.
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
                  <h3 className="font-semibold mb-2">Regular Cleaning Schedule</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Clean computer vents and fans every 6-12 months</li>
                    <li>• More frequent cleaning in dusty environments</li>
                    <li>• Schedule reminders to check for dust buildup</li>
                    <li>• Keep work area clean to reduce dust accumulation</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Optimal Environment</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Keep computer in cool, dry location with good airflow</li>
                    <li>• Maintain room temperature below 25°C (77°F) if possible</li>
                    <li>• Use hard, flat surfaces for laptops</li>
                    <li>• Avoid direct sunlight on computer cases</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Usage Habits</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Take breaks during intensive tasks (gaming, video editing)</li>
                    <li>• Close unnecessary programs to reduce heat generation</li>
                    <li>• Monitor temperatures periodically with software tools</li>
                    <li>• Don&apos;t block vents even temporarily</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Hardware Considerations</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Ensure adequate cooling when upgrading components</li>
                    <li>• Replace thermal paste every 3-5 years on older systems</li>
                    <li>• Consider better cooling solutions for high-performance builds</li>
                    <li>• Replace aging fans before they fail completely</li>
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
                Still Overheating?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If your computer continues to overheat after cleaning and improving ventilation, 
                it may need professional service or hardware replacement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-shadow-sm">
                  Get Cooling System Service
                </Button>
                <Button variant="outline" size="lg" className="text-shadow-sm">
                  Hardware Upgrade Consultation
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
