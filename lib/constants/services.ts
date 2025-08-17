export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const SUPPORT_SERVICES: ServiceCategory[] = [
  {
    id: "remote-support",
    title: "Remote Support",
    description: "1st & 2nd line helpdesk support with instant remote access",
    features: [
      "Instant remote desktop access",
      "Software troubleshooting",
      "System diagnostics",
      "User account management",
      "Email and application support"
    ]
  },
  {
    id: "onsite-support", 
    title: "On-Site Support",
    description: "3rd line technical support at your location",
    features: [
      "Hardware installation and repair",
      "Network setup and configuration", 
      "Server maintenance",
      "Complex system troubleshooting",
      "On-site consultation"
    ]
  },
  {
    id: "hardware-services",
    title: "Hardware Services", 
    description: "Complete hardware installation and maintenance",
    features: [
      "Computer and laptop setup",
      "Printer and peripheral installation",
      "Network equipment configuration",
      "Hardware upgrades",
      "Preventive maintenance"
    ]
  },
  {
    id: "software-solutions",
    title: "Software Solutions",
    description: "Software installation, updates, and troubleshooting", 
    features: [
      "Operating system installation",
      "Software licensing and activation",
      "Application troubleshooting",
      "System updates and patches",
      "Data migration and backup"
    ]
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "hourly",
    name: "Hourly Support",
    price: "£50 first hour, £24/hr after",
    description: "Perfect for one-off issues and ad-hoc support needs",
    features: [
      "No ongoing commitment",
      "Remote and on-site support",
      "Same-day response",
      "Comprehensive diagnostics",
      "Follow-up support included"
    ]
  },
  {
    id: "monthly",
    name: "Monthly Retainer",
    price: "Starting at £120/month",
    description: "Ongoing support with priority response times",
    features: [
      "Priority support queue",
      "Reduced hourly rates",
      "Preventive maintenance",
      "Monthly system health reports",
      "Extended support hours"
    ],
    popular: true
  },
  {
    id: "project",
    name: "Project-Based",
    price: "Contact for quote",
    description: "Custom pricing for large installations and migrations",
    features: [
      "Detailed project planning",
      "Fixed-price quotes",
      "Dedicated project manager",
      "Implementation timeline",
      "Post-project support"
    ]
  }
];

export const CONTACT_INFO = {
  email: "sendme@mpdee.info",
  responseTime: "Usually within 24 hours",
  supportHours: "Monday-Friday 8AM-6PM, Extended hours available",
  location: "Remote & On-site services available"
} as const;
