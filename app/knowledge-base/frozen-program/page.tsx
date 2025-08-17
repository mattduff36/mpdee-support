import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Zap, ArrowLeft, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Fix Frozen or Unresponsive Programs - Complete Guide | MPDEE Support',
  description: 'Complete guide to fixing frozen and unresponsive programs. Learn to force close crashed applications and prevent software freezing issues.',
  keywords: 'frozen program, not responding, software crash, application freeze, task manager, force close program'
}

export default function FrozenProgramGuide() {
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
            <div className="p-4 rounded-xl bg-blue-100 text-blue-600">
              <Zap className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-sm">
                Frozen or Unresponsive Program
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Difficulty: 2/10
                </span>
                <span className="text-muted-foreground">
                  Estimated fix time: 2-10 minutes
                </span>
              </div>
              <p className="text-lg text-muted-foreground">
                We&apos;ve all had a program freeze with a &quot;Not Responding&quot; message, or suddenly crash and disappear. 
                For instance, your web browser might hang, or Word stops responding right when you need it. 
                This is generally a software issue, confined to the app itself.
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
                  Applications can freeze or crash for a variety of reasons. A bug or glitch in the software can cause it to hang 
                  (especially if it hits a condition it wasn&apos;t programmed to handle). Running out of system resources can also 
                  cause hangs – if your computer is low on RAM and CPU (perhaps many apps open), a program may become unresponsive.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Conflicts between the program and other software or the operating system (especially after an OS update) can trigger crashes. 
                  Sometimes, a heavy workload (like a huge spreadsheet or very high-resolution video editing) causes a program to temporarily 
                  freeze because it&apos;s overwhelmed or waiting for another process.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Common causes:
                </p>
                <ul className="text-muted-foreground space-y-2 mt-2">
                  <li>• Software bugs or glitches</li>
                  <li>• Insufficient system resources (RAM/CPU)</li>
                  <li>• Conflicts with other software</li>
                  <li>• Operating system compatibility issues</li>
                  <li>• Corrupted program files</li>
                  <li>• Heavy workloads overwhelming the application</li>
                  <li>• Outdated software versions</li>
                  <li>• Driver conflicts</li>
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
                  <h3 className="font-semibold mb-2">Step 1: Wait a Moment</h3>
                  <p className="text-muted-foreground mb-2">
                    When a program freezes, first give it a moment. Occasionally, it will recover on its own if it was 
                    just temporarily busy processing a complex task.
                  </p>
                  <div className="bg-muted/50 p-3 rounded-lg mt-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>How long to wait:</strong> Give it 30-60 seconds for simple tasks, or up to 5 minutes 
                      for complex operations like large file processing.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 2: Force Close the Program</h3>
                  <p className="text-muted-foreground mb-2">
                    If the program remains unresponsive, force close it using Task Manager:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Press <kbd className="px-2 py-1 bg-muted rounded text-sm">Ctrl + Alt + Del</kbd></li>
                    <li>2. Select &quot;Task Manager&quot;</li>
                    <li>3. Find the unresponsive application in the list</li>
                    <li>4. Click on it to select it</li>
                    <li>5. Click &quot;End Task&quot; button</li>
                    <li>6. Confirm if prompted</li>
                  </ol>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-2">
                    <p className="text-amber-800 text-sm">
                      <strong>Note:</strong> You&apos;ll lose any unsaved work in that program when you force close it.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 3: Restart the Application</h3>
                  <p className="text-muted-foreground mb-2">
                    After closing the frozen program:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Wait a few seconds for the program to fully close</li>
                    <li>2. Reopen the application normally</li>
                    <li>3. Check if it loads properly</li>
                    <li>4. Look for any auto-recovery features for unsaved work</li>
                  </ol>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 4: If It Keeps Happening</h3>
                  <p className="text-muted-foreground mb-2">
                    If the application keeps freezing or crashing repeatedly:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-1">Restart Your Computer:</h4>
                      <p className="text-muted-foreground text-sm ml-4">
                        This clears memory and ensures no lingering processes remain from the crashed app.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Update the Application:</h4>
                      <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                        <li>• Check for updates within the app (Help menu)</li>
                        <li>• Visit the software&apos;s website for latest version</li>
                        <li>• Updates often fix bugs that cause crashes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Update Windows:</h4>
                      <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                        <li>• Go to Settings &gt; Update &amp; Security</li>
                        <li>• Install all available Windows updates</li>
                        <li>• Apps might crash due to OS compatibility issues</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 5: Check for Specific Triggers</h3>
                  <p className="text-muted-foreground mb-2">
                    If crashes happen with specific files or actions:
                  </p>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• The file might be corrupted - try opening it elsewhere</li>
                    <li>• Try the same action with different files</li>
                    <li>• Note when crashes occur to identify patterns</li>
                    <li>• Consider if it happens after specific system changes</li>
                  </ul>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 6: Repair or Reinstall</h3>
                  <p className="text-muted-foreground mb-2">
                    For persistent problems:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-1">Try Repair Option:</h4>
                      <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                        <li>• Go to Control Panel &gt; Programs</li>
                        <li>• Find the problematic program</li>
                        <li>• Click &quot;Change&quot; and look for &quot;Repair&quot; option</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Reinstall the Program:</h4>
                      <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                        <li>• Uninstall the current version</li>
                        <li>• Download fresh copy from official website</li>
                        <li>• Install the latest version</li>
                      </ul>
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
                  <h3 className="font-semibold mb-2">Keep Software Updated</h3>
                  <p className="text-muted-foreground">
                    Keep your software up to date to benefit from stability improvements. Developers often release patches 
                    for known crashes and compatibility issues.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Manage System Resources</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Avoid running too many heavy programs simultaneously</li>
                    <li>• Close unused applications to free up RAM</li>
                    <li>• Monitor system performance if you have limited resources</li>
                    <li>• Consider upgrading RAM if you frequently run out</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Save Work Frequently</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Enable auto-save features where available</li>
                    <li>• Save important work every few minutes</li>
                    <li>• Use Ctrl+S regularly as a habit</li>
                    <li>• Keep backups of critical documents</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Maintain System Health</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Keep graphics and system drivers updated</li>
                    <li>• Be cautious with browser extensions and plugins</li>
                    <li>• Run regular system maintenance</li>
                    <li>• Check Event Viewer for recurring error patterns</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Alternative Solutions</h3>
                  <p className="text-muted-foreground">
                    If an app is notoriously unstable and you&apos;ve tried everything, consider looking for alternative 
                    software that performs the same task. Sometimes switching to a more reliable program is the best solution.
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
          <Card className="bg-gradient-to-br from-blue-50/50 to-blue-100/30 border-blue-200">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-shadow-sm">
                Persistent Software Issues?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you&apos;re experiencing frequent program crashes despite trying these solutions, 
                it might indicate deeper system issues or the need for professional software troubleshooting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-shadow-sm">
                  Get Software Support
                </Button>
                <Button variant="outline" size="lg" className="text-shadow-sm">
                  System Diagnosis
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
