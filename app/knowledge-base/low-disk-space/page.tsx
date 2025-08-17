import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Disc, ArrowLeft, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Fix Low Disk Space - Complete Storage Cleanup Guide | MPDEE Support',
  description: 'Complete guide to fixing low disk space warnings. Learn to free up storage, clean temporary files, and optimize your hard drive space.',
  keywords: 'low disk space, disk cleanup, storage full, free up space, hard drive full, disk space warning'
}

export default function LowDiskSpaceGuide() {
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
            <div className="p-4 rounded-xl bg-yellow-100 text-yellow-600">
              <Disc className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-sm">
                Low Disk Space (Hard Drive Full)
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Difficulty: 3/10
                </span>
                <span className="text-muted-foreground">
                  Estimated fix time: 15-30 minutes
                </span>
              </div>
              <p className="text-lg text-muted-foreground">
                You might see a notification that your disk is running low on space, or you notice your C: drive bar 
                is red in Windows Explorer. A full hard drive can cause various problems – you can&apos;t install new programs 
                or save files, and the system may slow down or fail to update.
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
                  Over time, we accumulate a lot of files – documents, photos, videos, and so on – which can fill the hard drive. 
                  Installing many programs or games (some of which can be tens of gigabytes each) will also consume space. 
                  Additionally, Windows itself and programs create temporary files, caches, and update files that can pile up.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  If you never clean up, eventually the drive fills to capacity. Traditional guidance is to keep some percentage 
                  of the drive free (at least 10-20%) so that the system can use that space for virtual memory and temp files. 
                  When nearly 100% full, the computer may struggle.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Common space consumers:
                </p>
                <ul className="text-muted-foreground space-y-2 mt-2">
                  <li>• Large programs and games</li>
                  <li>• Photos, videos, and media files</li>
                  <li>• Temporary files and caches</li>
                  <li>• Windows update files</li>
                  <li>• Downloads folder accumulation</li>
                  <li>• System restore points</li>
                  <li>• Recycle bin contents</li>
                  <li>• Browser cache and history</li>
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
                  <h3 className="font-semibold mb-2">Step 1: Run Disk Cleanup</h3>
                  <p className="text-muted-foreground mb-2">
                    Windows has a built-in tool that finds and deletes temporary files:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Click Start menu and type &quot;Disk Cleanup&quot;</li>
                    <li>2. Select your main drive (usually C:)</li>
                    <li>3. Wait for it to scan and calculate space</li>
                    <li>4. Check all categories (Temporary files, Recycle Bin, etc.)</li>
                    <li>5. Click &quot;Clean up system files&quot; for more options</li>
                    <li>6. Select additional items like Windows Update files</li>
                    <li>7. Click OK and Delete Files to proceed</li>
                  </ol>
                  <div className="bg-muted/50 p-3 rounded-lg mt-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Result:</strong> This can often clear several GB of space by removing unnecessary system files.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 2: Uninstall Unnecessary Programs</h3>
                  <p className="text-muted-foreground mb-2">
                    Remove large programs you no longer use:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Go to Settings &gt; Apps &gt; Apps &amp; features</li>
                    <li>2. Sort by &quot;Size&quot; to see largest programs first</li>
                    <li>3. Review large games or software you don&apos;t use</li>
                    <li>4. Click on unused programs and select &quot;Uninstall&quot;</li>
                    <li>5. Be careful not to remove anything you actually need</li>
                  </ol>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-2">
                    <p className="text-amber-800 text-sm">
                      <strong>Tip:</strong> If you&apos;re unsure about a program, Google it to see its purpose before uninstalling.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 3: Delete or Archive Personal Files</h3>
                  <p className="text-muted-foreground mb-2">
                    Videos and high-resolution photos are big space hogs:
                  </p>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• Move old photos/videos to external drive or cloud storage</li>
                    <li>• Clean out Downloads folder of old installers and files</li>
                    <li>• Remove duplicate files and old backups</li>
                    <li>• Archive documents you rarely access</li>
                  </ul>
                  <div className="bg-muted/50 p-3 rounded-lg mt-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Find large files:</strong> In Windows Explorer search box, type <code>size:gigantic</code> 
                      to find files over 128MB.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 4: Empty the Recycle Bin</h3>
                  <p className="text-muted-foreground mb-2">
                    Don&apos;t forget this simple step:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Right-click the Recycle Bin icon on desktop</li>
                    <li>2. Select &quot;Empty Recycle Bin&quot;</li>
                    <li>3. Confirm to permanently delete files</li>
                  </ol>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 5: Use Storage Sense (Windows 10/11)</h3>
                  <p className="text-muted-foreground mb-2">
                    Enable automatic cleanup for the future:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. Go to Settings &gt; System &gt; Storage</li>
                    <li>2. Turn on &quot;Storage Sense&quot;</li>
                    <li>3. Configure it to automatically delete temp files</li>
                    <li>4. Set it to empty Recycle Bin after 30 days</li>
                    <li>5. Choose how often it runs (monthly recommended)</li>
                  </ol>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 6: Remove Old System Restore Points (If Desperate)</h3>
                  <p className="text-muted-foreground mb-2">
                    Only if you desperately need space:
                  </p>
                  <ol className="text-muted-foreground space-y-1 ml-4">
                    <li>1. In Disk Cleanup, click &quot;More Options&quot; tab</li>
                    <li>2. Under System Restore, click &quot;Clean up...&quot;</li>
                    <li>3. This deletes all but the most recent restore point</li>
                    <li>4. Only do this if your system is running fine</li>
                  </ol>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-2">
                    <p className="text-red-800 text-sm">
                      <strong>Warning:</strong> This removes your ability to restore to older points. 
                      Only use if absolutely necessary.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-mpdee-blue-500 pl-4">
                  <h3 className="font-semibold mb-2">Step 7: Check Results</h3>
                  <p className="text-muted-foreground mb-2">
                    After cleanup, verify you have adequate free space:
                  </p>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• Open File Explorer and check C: drive</li>
                    <li>• Aim for at least 10-15% free space</li>
                    <li>• On a 500GB drive, keep 50+ GB free if possible</li>
                    <li>• This cushion helps performance and future growth</li>
                  </ul>
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
                  <h3 className="font-semibold mb-2">Regular Maintenance</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Schedule Disk Cleanup monthly or enable Storage Sense</li>
                    <li>• Regularly review and uninstall unused programs</li>
                    <li>• Clean Downloads folder periodically</li>
                    <li>• Monitor disk usage in Settings &gt; System &gt; Storage</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Smart Storage Habits</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Use external storage for large media collections</li>
                    <li>• Consider cloud storage for photos and documents</li>
                    <li>• Archive old files rather than keeping everything local</li>
                    <li>• Uninstall old games/programs before installing new ones</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Hardware Upgrades</h3>
                  <p className="text-muted-foreground">
                    If your drive is constantly near full and you can&apos;t delete more, consider upgrading to a larger drive. 
                    Moving from an old small HDD to a larger SSD gives you more space and a significant performance boost.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Monitor Usage</h3>
                  <p className="text-muted-foreground">
                    Keep an eye on disk usage periodically. Windows Storage Settings can show what categories are using space 
                    (System, Apps, Videos, etc.), which helps target cleanup efforts before you hit capacity.
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
          <Card className="bg-gradient-to-br from-yellow-50/50 to-yellow-100/30 border-yellow-200">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-shadow-sm">
                Need More Storage Space?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you&apos;ve cleaned up everything possible and still need more space, 
                it might be time to upgrade your storage or get professional advice on storage solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-shadow-sm">
                  Storage Upgrade Consultation
                </Button>
                <Button variant="outline" size="lg" className="text-shadow-sm">
                  Professional Cleanup
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
