import type { Metadata } from 'next';
import Link from 'next/link';
import { Monitor, Wifi, Printer, AlertTriangle, Power, Shield, Thermometer, HardDrive, Disc, Zap, Lock } from 'lucide-react';
export const metadata: Metadata = {title:'Knowledge Base | MPDEE Support', description:'Practical guides to common computer, Wi-Fi, printer and software problems.', alternates:{canonical:'/knowledge-base'}};
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
export default function KnowledgeBasePage(){return <div className="support-page knowledge-index">
<section className="support-intro"><span className="support-kicker">THE KNOWLEDGE BASE</span><h1>A little know-how.<br/><span>A useful next step.</span></h1><p>Start with the problem you’re seeing. These guides walk through common checks and explain when to get help.</p></section>
<section className="support-guide-list" aria-label="Troubleshooting guides">{problems.map((problem,index)=><Link className="support-guide-link" key={problem.id} href={'/knowledge-base/'+problem.id}><span className="support-guide-number">{String(index+1).padStart(2,'0')}</span><div><h2>{problem.title}</h2><p>{problem.description}</p></div><span aria-hidden="true">↗</span></Link>)}</section>
<section className="support-note" id="faq"><span className="support-kicker">STILL NEED A HAND?</span><h2>We can work through it together.</h2><p>If a guide doesn’t solve it, tell us what happened and which steps you’ve already tried.</p><Link className="support-action" href="/contact">Request support <span aria-hidden="true">↗</span></Link></section>
</div>}
