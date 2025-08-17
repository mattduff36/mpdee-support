import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { HardDrive, ArrowLeft, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Recover Lost Data - Complete Data Recovery Guide | MPDEE Support',
  description: 'Complete guide to recovering lost data from deleted files, drive failures, and corruption. Learn data recovery methods and prevention strategies.',
  keywords: 'data recovery, deleted files, hard drive failure, file recovery, backup, data loss prevention'
}

export default function DataLossGuide() {
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
              <HardDrive className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-sm">
                Data Loss (Deleted Files or Drive Failure)
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  Difficulty: 8/10
                </span>
                <span className="text-muted-foreground">
                  Estimated recovery time: 30 minutes - several hours
                </span>
              </div>
              <p className="text-lg text-muted-foreground">
                Losing important files can be devastating. Maybe you emptied the Recycle Bin only to realize a critical document 
                was in there, or a whole folder disappeared. In worse cases, a hard drive crash or malware attack can wipe out data. 
                Data loss can range from a single file to everything on your disk.
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
                  The most common cause is accidental deletion – we think a file is unneeded and delete it, or drag a folder 
                  to the wrong place. If you didn&apos;t notice, you might even empty the Recycle Bin, making recovery trickier. 
                  Another cause is disk failure: traditional hard drives (HDDs) will eventually fail mechanically, and if that 
                  happens, all data on them becomes inaccessible.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Power outages or system crashes during a file save can corrupt files. Additionally, viruses like ransomware 
                  can encrypt or delete files maliciously. And sometimes, an improper Windows update or install can lead to a 
                  &quot;Windows.old&quot; scenario where files seem lost (though often recoverable).
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Common causes of data loss:
                </p>
                <ul className="text-muted-foreground space-y-2 mt-2">
                  <li>• Accidental deletion or file moves</li>
                  <li>• Emptying Recycle Bin with important files</li>
                  <li>• Hard drive mechanical failure</li>
                  <li>• SSD wear-out or electronic failure</li>
                  <li>• Power outages during file operations</li>
                  <li>• System crashes or blue screens</li>
                  <li>• Virus or ransomware attacks</li>
                  <li>• Formatting drives accidentally</li>
                  <li>• Windows updates gone wrong</li>
                  <li>• Physical damage to storage devices</li>
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
                <h2 className="text-xl font-semibold text-shadow-sm">How to Recover It</h2>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 text-sm">
                  <strong>Critical:</strong> If you&apos;ve lost important data, stop using the affected drive immediately! 
                  New data can overwrite deleted files, making them unrecoverable.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="border border-green-200 rounded-lg p-6 bg-green-50/30">
                  <h3 className="font-bold mb-4 text-lg">Recently Deleted Files</h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold mb-2">Step 1: Check Recycle Bin</h4>
                      <ol className="text-muted-foreground space-y-1 ml-4">
                        <li>1. Double-click the Recycle Bin icon on your desktop</li>
                        <li>2. Look for your deleted files in the list</li>
                        <li>3. Right-click the file you want to recover</li>
                        <li>4. Select &quot;Restore&quot; to put it back in original location</li>
                      </ol>
                      <div className="bg-muted/50 p-3 rounded-lg mt-2">
                        <p className="text-sm text-muted-foreground">
                          <strong>Note:</strong> Recycle Bin holds files until it reaches a size limit or until you empty it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-blue-200 rounded-lg p-6 bg-blue-50/30">
                  <h3 className="font-bold mb-4 text-lg">Permanently Deleted Files</h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold mb-2">Step 1: Check File History / Previous Versions</h4>
                      <ol className="text-muted-foreground space-y-1 ml-4">
                        <li>1. Navigate to the folder that contained the deleted file</li>
                        <li>2. Right-click the folder and choose &quot;Restore previous versions&quot;</li>
                        <li>3. Look for earlier versions from before the file was deleted</li>
                        <li>4. Open the previous version and copy your file out</li>
                      </ol>
                      <div className="bg-muted/50 p-3 rounded-lg mt-2">
                        <p className="text-sm text-muted-foreground">
                          <strong>Requirements:</strong> This only works if File History was enabled or restore points exist.
                        </p>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold mb-2">Step 2: Use File Recovery Software</h4>
                      <p className="text-muted-foreground mb-2">
                        If no backup is available, try data recovery tools:
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium mb-1">Windows File Recovery (Built-in):</h5>
                          <ol className="text-muted-foreground text-sm space-y-1 ml-4">
                            <li>1. Install from Microsoft Store (Windows 10/11)</li>
                            <li>2. Open Command Prompt as Administrator</li>
                            <li>3. Use command: <code className="bg-muted px-1 rounded">winfr C: D: /n *.docx</code></li>
                            <li>4. Replace C: with source drive, D: with recovery drive</li>
                          </ol>
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">Third-party Tools:</h5>
                          <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                            <li>• Recuva (free, user-friendly)</li>
                            <li>• EaseUS Data Recovery Wizard</li>
                            <li>• Disk Drill</li>
                            <li>• PhotoRec (free, powerful)</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-2">
                        <p className="text-amber-800 text-sm">
                          <strong>Important:</strong> Install recovery software on a different drive than the one with lost data. 
                          Recover files to a different drive to avoid overwriting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-red-200 rounded-lg p-6 bg-red-50/30">
                  <h3 className="font-bold mb-4 text-lg">Drive Failure or Severe Data Loss</h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold mb-2">Signs of Drive Failure:</h4>
                      <ul className="text-muted-foreground space-y-1 ml-4">
                        <li>• Drive not showing up in Windows</li>
                        <li>• Clicking or grinding noises from hard drive</li>
                        <li>• Blue screen errors mentioning storage</li>
                        <li>• Extremely slow file access</li>
                        <li>• Files becoming corrupted randomly</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold mb-2">Professional Data Recovery:</h4>
                      <p className="text-muted-foreground mb-2">
                        For critical data or physical drive failures:
                      </p>
                      <ul className="text-muted-foreground space-y-1 ml-4">
                        <li>• Stop using the drive immediately</li>
                        <li>• Don&apos;t attempt DIY repairs on clicking drives</li>
                        <li>• Professional services have specialized equipment</li>
                        <li>• Can recover from severely damaged drives</li>
                        <li>• Expensive but may be worth it for irreplaceable data</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold mb-2">Ransomware Recovery:</h4>
                      <p className="text-muted-foreground mb-2">
                        If files were encrypted by ransomware:
                      </p>
                      <ul className="text-muted-foreground space-y-1 ml-4">
                        <li>• Never pay the ransom (no guarantee of recovery)</li>
                        <li>• Check for free decryption tools online</li>
                        <li>• Restore from backups made before infection</li>
                        <li>• Consider professional malware removal services</li>
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
                  <h3 className="font-semibold mb-2">The Golden Rule: Backup, Backup, Backup!</h3>
                  <p className="text-muted-foreground mb-2">
                    Regularly save copies of important files to separate locations:
                  </p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• External hard drives for large backups</li>
                    <li>• Cloud storage (OneDrive, Google Drive, Dropbox)</li>
                    <li>• USB flash drives for smaller, critical files</li>
                    <li>• Network drives for business environments</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Automated Backup Solutions</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Enable Windows File History for automatic backups</li>
                    <li>• Set up OneDrive sync for documents and photos</li>
                    <li>• Use third-party backup software (Acronis, EaseUS Todo)</li>
                    <li>• Schedule regular backup tasks</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Safe Computing Practices</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Double-check before deleting files</li>
                    <li>• Avoid Shift+Delete (bypasses Recycle Bin)</li>
                    <li>• Safely eject USB drives before removal</li>
                    <li>• Use UPS (battery backup) to prevent power loss during saves</li>
                    <li>• Keep antivirus updated to prevent ransomware</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">System Protection</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Enable System Restore and create restore points</li>
                    <li>• Keep Windows updated for stability</li>
                    <li>• Monitor drive health with tools like CrystalDiskInfo</li>
                    <li>• Replace aging drives before they fail</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">The 3-2-1 Backup Rule</h3>
                  <p className="text-muted-foreground">
                    For critical data: Keep <strong>3</strong> copies of important files, on <strong>2</strong> different 
                    types of media, with <strong>1</strong> copy stored off-site (cloud or different location). 
                    Data isn&apos;t truly backed up until it exists in at least two places.
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
                Critical Data Loss Emergency?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you&apos;ve lost critical business data or irreplaceable personal files, 
                professional data recovery services may be your best option for maximum recovery chances.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-shadow-sm">
                  Emergency Data Recovery
                </Button>
                <Button variant="outline" size="lg" className="text-shadow-sm">
                  Backup Setup Service
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
