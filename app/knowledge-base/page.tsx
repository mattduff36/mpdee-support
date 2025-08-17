import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Monitor, 
  Wifi, 
  Printer, 
  AlertTriangle, 
  Power, 
  Shield, 
  Thermometer, 
  HardDrive, 
  Disc, 
  Zap,
  Lock
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'IT Knowledge Base - Common Computer Problems & Solutions | MPDEE Support',
  description: 'Complete guide to fixing common IT problems including slow computers, WiFi issues, printer problems, blue screens, viruses, and more. Expert solutions from MPDEE Support.',
  keywords: 'IT support, computer problems, troubleshooting, tech help, virus removal, printer issues, WiFi problems, blue screen, data recovery, password reset'
}

const problems = [
  {
    id: 'slow-computer',
    title: 'Slow Computer Performance',
    difficulty: '4/10',
    icon: Monitor,
    colorScheme: 'blue',
    description: 'Computer running slowly, programs taking forever to open, system feels sluggish',
    causes: 'Too many programs running, insufficient RAM, malware infections, or background processes consuming resources',
    solutions: [
      'Close unnecessary programs and browser tabs',
      'Open Task Manager (Ctrl + Shift + Esc) to end resource-heavy tasks',
      'Restart computer to clear background processes',
      'Run Disk Cleanup to free up storage space',
      'Perform full antivirus scan to remove malware',
      'Disable unnecessary startup programs in Settings > Apps > Startup'
    ],
    prevention: [
      'Limit startup programs to essentials only',
      'Run regular virus scans and keep antivirus updated',
      'Keep disk space free (at least 10-20% of total capacity)',
      'Restart PC regularly (daily or few times per week)',
      'Consider adding more RAM for older computers'
    ]
  },
  {
    id: 'wifi-issues',
    title: 'Internet or Wi-Fi Connection Issues',
    difficulty: '3/10',
    icon: Wifi,
    colorScheme: 'green',
    description: 'No internet connection, slow Wi-Fi, or intermittent connectivity problems',
    causes: 'Router issues, weak signal, ISP problems, network settings, or service outages',
    solutions: [
      'Restart router and modem (unplug for 30 seconds, then plug back in)',
      'Check Wi-Fi is enabled and not in Airplane Mode',
      'Forget and reconnect to Wi-Fi network with password',
      'Run Windows Network Troubleshooter in Settings > Network & Internet',
      'Move closer to router or use Ethernet cable to test connection',
      'Contact ISP if all devices affected'
    ],
    prevention: [
      'Place router in central, elevated location',
      'Keep router firmware updated',
      'Use strong Wi-Fi password to prevent unauthorized access',
      'Switch to 5GHz band to avoid interference',
      'Restart router weekly to maintain performance'
    ]
  },
  {
    id: 'printer-problems',
    title: 'Printer Not Printing',
    difficulty: '5/10',
    icon: Printer,
    colorScheme: 'purple',
    description: 'Printer shows offline, no output, error messages, or print jobs stuck in queue',
    causes: 'Connectivity issues, offline mode, paper jams, empty ink/toner, or driver problems',
    solutions: [
      'Check printer power, paper supply, and ink/toner levels',
      'Verify cable connections or Wi-Fi connectivity',
      'Set printer online in Settings > Printers & scanners',
      'Clear stuck print jobs from queue',
      'Clear paper jams following manufacturer instructions',
      'Restart both printer and computer',
      'Reinstall printer drivers if issues persist'
    ],
    prevention: [
      'Keep printer drivers updated',
      'Ensure strong Wi-Fi signal for wireless printers',
      'Print test pages regularly to prevent ink drying',
      'Use quality paper to avoid jams',
      'Place printer in dust-free, stable environment'
    ]
  },
  {
    id: 'blue-screen',
    title: 'Blue Screen of Death (Windows Crash)',
    difficulty: '8/10',
    icon: AlertTriangle,
    colorScheme: 'red',
    description: 'Windows shows blue screen with error codes and restarts unexpectedly',
    causes: 'Hardware failures, driver issues, overheating, faulty RAM, or software conflicts',
    solutions: [
      'Note down the stop code or error message displayed',
      'Restart computer to see if it was a one-time occurrence',
      'Update all device drivers, especially graphics and Wi-Fi',
      'Install Windows updates for stability fixes',
      'Run Windows Memory Diagnostic to test RAM',
      'Check for overheating and clean dust from fans',
      'Boot into Safe Mode to troubleshoot or remove recent changes',
      'Use System Restore to revert to previous working state'
    ],
    prevention: [
      'Keep Windows and drivers updated regularly',
      'Use quality hardware components',
      'Maintain proper cooling and clean PC internals regularly',
      'Run antivirus to prevent malware-induced crashes',
      'Create regular backups in case of system corruption'
    ]
  },
  {
    id: 'computer-wont-turn-on',
    title: 'Computer Won&apos;t Turn On',
    difficulty: '7/10',
    icon: Power,
    colorScheme: 'orange',
    description: 'No response when pressing power button, or powers on but screen stays black',
    causes: 'Power supply issues, faulty outlets, dead battery (laptops), or hardware component failures',
    solutions: [
      'Check power connections and try different outlet',
      'For laptops, verify charger connection and try different charger',
      'Look for any lights or fan activity when pressing power',
      'Check monitor connections and try different display',
      'Disconnect all external devices except keyboard, mouse, monitor',
      'Listen for diagnostic beep codes that indicate hardware issues',
      'For persistent issues, may need professional diagnosis'
    ],
    prevention: [
      'Use surge protectors to prevent power damage',
      'Avoid outlets controlled by wall switches',
      'Clean dust from internal components regularly',
      'Handle charging ports and cables carefully on laptops',
      'Shut down properly rather than forcing power off'
    ]
  },
  {
    id: 'virus-malware',
    title: 'Virus or Malware Infections',
    difficulty: '6/10',
    icon: Shield,
    colorScheme: 'red',
    description: 'Suspicious pop-ups, changed browser settings, extremely slow performance, or unusual behavior',
    causes: 'Downloaded unsafe programs, email attachments, visiting compromised websites, or outdated security',
    solutions: [
      'Run full system scan with Windows Security (built-in antivirus)',
      'Use secondary scanner like Malwarebytes for thorough check',
      'Remove or quarantine detected threats',
      'Restart computer after cleaning',
      'Change passwords from clean device if banking/personal data affected',
      'Update all software to patch vulnerabilities',
      'Consider Windows Reset for severe infections'
    ],
    prevention: [
      'Never open suspicious email attachments or links',
      'Download software only from official sources',
      'Keep Windows Defender enabled and updated',
      'Use standard user account for daily activities',
      'Enable browser security features and SmartScreen',
      'Keep operating system and software updated'
    ]
  },
  {
    id: 'overheating',
    title: 'Overheating Computer',
    difficulty: '7/10',
    icon: Thermometer,
    colorScheme: 'orange',
    description: 'Computer feels very hot, fans running loudly, or random shutdowns during use',
    causes: 'Dust blocking vents, failed cooling fans, high ambient temperature, or intensive tasks',
    solutions: [
      'Ensure proper ventilation around computer',
      'Clean dust from vents and fans with compressed air',
      'Verify all cooling fans are spinning when computer is on',
      'Move computer to cooler environment if possible',
      'Use laptop cooling pad for portable computers',
      'Monitor temperatures with software tools',
      'Replace failed fans or reapply thermal paste if needed'
    ],
    prevention: [
      'Clean computer vents every 6-12 months',
      'Keep computer in cool, dry location with good airflow',
      'Use hard, flat surfaces for laptops to allow air circulation',
      'Monitor temperatures periodically',
      'Ensure adequate case ventilation for desktop upgrades'
    ]
  },
  {
    id: 'data-loss',
    title: 'Data Loss (Deleted Files or Drive Failure)',
    difficulty: '8/10',
    icon: HardDrive,
    colorScheme: 'red',
    description: 'Important files accidentally deleted, drive not accessible, or data corruption',
    causes: 'Accidental deletion, hard drive failure, power outages during saves, or malware attacks',
    solutions: [
      'Check Recycle Bin first for recently deleted files',
      'Use File History or Previous Versions if available',
      'Try file recovery software like Recuva or Windows File Recovery',
      'Stop using affected drive immediately to prevent overwriting',
      'Consider professional data recovery for critical data',
      'Restore from backups if available'
    ],
    prevention: [
      'Regular backups to external drive or cloud storage',
      'Enable Windows File History for automatic backups',
      'Use System Restore points before major changes',
      'Be careful with delete operations, avoid Shift+Delete',
      'Keep multiple copies of critical data in different locations'
    ]
  },
  {
    id: 'low-disk-space',
    title: 'Low Disk Space (Hard Drive Full)',
    difficulty: '3/10',
    icon: Disc,
    colorScheme: 'yellow',
    description: 'Warnings about low disk space, unable to save files, or system running slowly',
    causes: 'Accumulated files over time, large programs, temporary files, or insufficient initial storage',
    solutions: [
      'Run Disk Cleanup to remove temporary and system files',
      'Uninstall unnecessary programs and games',
      'Move large files (photos, videos) to external storage or cloud',
      'Empty Recycle Bin to reclaim space',
      'Remove old System Restore points if desperately needed',
      'Enable Storage Sense for automatic cleanup'
    ],
    prevention: [
      'Regular cleanup using Disk Cleanup or Storage Sense',
      'Monitor disk usage and clean up proactively',
      'Use external storage for large media files',
      'Uninstall programs you no longer use',
      'Keep at least 10-15% of drive space free for optimal performance'
    ]
  },
  {
    id: 'frozen-program',
    title: 'Frozen or Unresponsive Program',
    difficulty: '2/10',
    icon: Zap,
    colorScheme: 'teal',
    description: 'Application shows &quot;Not Responding&quot; or completely freezes during use',
    causes: 'Software bugs, insufficient system resources, conflicts with other programs, or corrupted files',
    solutions: [
      'Wait a moment to see if program recovers on its own',
      'Use Task Manager (Ctrl + Alt + Del) to end unresponsive task',
      'Restart the application after closing it',
      'Reboot computer if problem persists',
      'Check for application updates',
      'Try opening problematic files in different programs',
      'Repair or reinstall the application if crashes continue'
    ],
    prevention: [
      'Keep software updated to latest stable versions',
      'Avoid running too many resource-intensive programs simultaneously',
      'Save work frequently and enable auto-save features',
      'Keep graphics and system drivers updated',
      'Be cautious with third-party plugins and extensions'
    ]
  },
  {
    id: 'forgotten-password',
    title: 'Forgotten Password (Unable to Log In)',
    difficulty: '7/10',
    icon: Lock,
    colorScheme: 'indigo',
    description: 'Cannot remember Windows login password or password not being accepted',
    causes: 'Memory lapse, recent password change, Windows updates, or account type confusion',
    solutions: [
      'For Microsoft accounts: Use password reset on login screen or Microsoft website',
      'For local accounts: Answer security questions if configured',
      'Use password reset disk if previously created',
      'Log in with another administrator account to reset password',
      'Use advanced recovery methods or professional help for complex cases'
    ],
    prevention: [
      'Use memorable passwords or secure password storage',
      'Set up security questions for local accounts',
      'Create password reset disk when setting up account',
      'Keep recovery email and phone number updated for Microsoft accounts',
      'Consider using Windows Hello PIN as alternative login method'
    ]
  }
]

// Color scheme configurations
const getColorClasses = (colorScheme: string) => {
  const schemes = {
    blue: {
      iconBg: 'bg-blue-100 group-hover:bg-blue-200',
      iconText: 'text-blue-600',
      accent: 'text-blue-600 group-hover:text-blue-700',
      bullet: 'text-blue-500 group-hover:text-blue-600',
      border: 'hover:border-blue-300/60',
      shadow: 'hover:shadow-blue-500/15',
      gradient: 'hover:to-blue-50/30'
    },
    green: {
      iconBg: 'bg-green-100 group-hover:bg-green-200',
      iconText: 'text-green-600',
      accent: 'text-green-600 group-hover:text-green-700',
      bullet: 'text-green-500 group-hover:text-green-600',
      border: 'hover:border-green-300/60',
      shadow: 'hover:shadow-green-500/15',
      gradient: 'hover:to-green-50/30'
    },
    purple: {
      iconBg: 'bg-purple-100 group-hover:bg-purple-200',
      iconText: 'text-purple-600',
      accent: 'text-purple-600 group-hover:text-purple-700',
      bullet: 'text-purple-500 group-hover:text-purple-600',
      border: 'hover:border-purple-300/60',
      shadow: 'hover:shadow-purple-500/15',
      gradient: 'hover:to-purple-50/30'
    },
    red: {
      iconBg: 'bg-red-100 group-hover:bg-red-200',
      iconText: 'text-red-600',
      accent: 'text-red-600 group-hover:text-red-700',
      bullet: 'text-red-500 group-hover:text-red-600',
      border: 'hover:border-red-300/60',
      shadow: 'hover:shadow-red-500/15',
      gradient: 'hover:to-red-50/30'
    },
    orange: {
      iconBg: 'bg-orange-100 group-hover:bg-orange-200',
      iconText: 'text-orange-600',
      accent: 'text-orange-600 group-hover:text-orange-700',
      bullet: 'text-orange-500 group-hover:text-orange-600',
      border: 'hover:border-orange-300/60',
      shadow: 'hover:shadow-orange-500/15',
      gradient: 'hover:to-orange-50/30'
    },
    yellow: {
      iconBg: 'bg-yellow-100 group-hover:bg-yellow-200',
      iconText: 'text-yellow-600',
      accent: 'text-yellow-600 group-hover:text-yellow-700',
      bullet: 'text-yellow-500 group-hover:text-yellow-600',
      border: 'hover:border-yellow-300/60',
      shadow: 'hover:shadow-yellow-500/15',
      gradient: 'hover:to-yellow-50/30'
    },
    teal: {
      iconBg: 'bg-teal-100 group-hover:bg-teal-200',
      iconText: 'text-teal-600',
      accent: 'text-teal-600 group-hover:text-teal-700',
      bullet: 'text-teal-500 group-hover:text-teal-600',
      border: 'hover:border-teal-300/60',
      shadow: 'hover:shadow-teal-500/15',
      gradient: 'hover:to-teal-50/30'
    },
    indigo: {
      iconBg: 'bg-indigo-100 group-hover:bg-indigo-200',
      iconText: 'text-indigo-600',
      accent: 'text-indigo-600 group-hover:text-indigo-700',
      bullet: 'text-indigo-500 group-hover:text-indigo-600',
      border: 'hover:border-indigo-300/60',
      shadow: 'hover:shadow-indigo-500/15',
      gradient: 'hover:to-indigo-50/30'
    }
  }
  
  return schemes[colorScheme as keyof typeof schemes] || schemes.blue
}

// Difficulty badge color classes
const getDifficultyBadgeClasses = (difficulty: string) => {
  const difficultyNum = parseInt(difficulty.split('/')[0])
  
  if (difficultyNum <= 3) {
    // Easy - Green
    return 'bg-green-100 text-green-800 border border-green-200'
  } else if (difficultyNum <= 6) {
    // Medium - Yellow
    return 'bg-yellow-100 text-yellow-800 border border-yellow-200'
  } else {
    // Hard - Red
    return 'bg-red-100 text-red-800 border border-red-200'
  }
}

export default function KnowledgeBasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background/50 to-background/80">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-sm">
            Knowledge Base
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Simple, step-by-step guides to solve common computer problems. No technical jargon - just clear instructions anyone can follow to get their technology working again.
          </p>
        </div>
      </section>

      {/* Problems Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem) => {
              const IconComponent = problem.icon
              const colors = getColorClasses(problem.colorScheme)
              return (
                <Link key={problem.id} href={`/knowledge-base/${problem.id}`} className="group block">
                  <Card className={`bg-card/50 backdrop-blur border-border hover:shadow-xl ${colors.shadow} ${colors.border} hover:-translate-y-2 hover:bg-gradient-to-br hover:from-card/60 ${colors.gradient} transition-all duration-300 cursor-pointer`}>
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg ${colors.iconBg} ${colors.iconText} group-hover:scale-110 transition-all duration-300`}>
                          <IconComponent className="h-6 w-6 group-hover:rotate-3 transition-transform duration-300" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2 text-shadow-sm group-hover:text-mpdee-blue-800 transition-colors duration-300">{problem.title}</h3>
                          <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mb-2 ${getDifficultyBadgeClasses(problem.difficulty)}`}>
                            Difficulty: {problem.difficulty}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                        {problem.description}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2 text-foreground group-hover:text-mpdee-blue-800 transition-colors duration-300">Common Causes:</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                            {problem.causes}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm mb-2 text-foreground group-hover:text-mpdee-blue-800 transition-colors duration-300">Quick Solutions:</h4>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {problem.solutions.slice(0, 3).map((solution, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className={`${colors.bullet} mt-1 transition-colors duration-300`}>•</span>
                                <span className="leading-relaxed group-hover:text-slate-600 transition-colors duration-300">{solution}</span>
                              </li>
                            ))}
                            {problem.solutions.length > 3 && (
                              <li className={`${colors.accent} font-medium transition-colors duration-300`}>
                                + {problem.solutions.length - 3} more solutions...
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border group-hover:border-mpdee-blue-200 transition-colors duration-300">
                        <div className={`text-center text-sm ${colors.accent} font-medium transition-colors duration-300`}>
                          Click to view full guide →
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="bg-gradient-to-br from-mpdee-blue-50/50 to-mpdee-blue-100/30 border-mpdee-blue-200">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-shadow-sm">
                Need Professional Help?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Can&apos;t find the solution you&apos;re looking for? Our expert technicians 
                are here to help with any IT problem, big or small.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-shadow-sm">
                  Contact Support
                </Button>
                <Button variant="outline" size="lg" className="text-shadow-sm">
                  Schedule Remote Session
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-background/30 to-background/60">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold mb-6 text-shadow-sm">
              Expert IT Support and Computer Troubleshooting
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-sm text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Why Choose MPDEE Support?</h3>
                <ul className="space-y-2">
                  <li>• Over 10 years of IT support experience</li>
                  <li>• Certified technicians available 24/7</li>
                  <li>• Remote and on-site support options</li>
                  <li>• Specializing in Windows, Mac, and Linux systems</li>
                  <li>• Business and residential IT services</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Common Service Areas</h3>
                <ul className="space-y-2">
                  <li>• Virus removal and malware protection</li>
                  <li>• Data backup and recovery services</li>
                  <li>• Network setup and troubleshooting</li>
                  <li>• Hardware diagnostics and repair</li>
                  <li>• Software installation and configuration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
