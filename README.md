# MPDEE Support Website

A professional IT support services website built with Next.js 15, featuring a unique "error page" hero design and comprehensive support service offerings.

## 🎯 Project Overview

MPDEE Support is the third department of MPDEE company, following MPDEE Development and MPDEE Creative. This website provides IT support services including:

- **Remote Support**: 1st & 2nd line helpdesk with instant remote access
- **On-Site Support**: 3rd line technical support at customer locations  
- **Hardware Services**: Installation, maintenance, and repairs
- **Software Solutions**: Troubleshooting, updates, and installations

### Key Features

- **Unique Hero Design**: Error page aesthetic that converts visitors into support requests
- **Brand Consistency**: Red/navy gradient logo matching MPDEE family branding
- **Professional Color Scheme**: Clean light theme with complementary accent colors
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Complete metadata and structured data
- **Modern Architecture**: Next.js 15 with App Router and TypeScript

## 🛠 Tech Stack

### Core Framework
- **Next.js 15.4.6**: React framework with App Router
- **React 19**: Latest React with Server Components
- **TypeScript**: Type-safe development

### Styling & UI
- **Tailwind CSS v4**: Utility-first CSS framework
- **Shadcn UI**: High-quality component library
- **Radix UI**: Accessible UI primitives
- **Custom CSS**: Brand-specific gradients and animations

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **TypeScript**: Type checking
- **Cursor IDE**: AI-powered development environment

### Testing & Browser Automation
- **Playwright**: End-to-end testing and browser automation
- **Screenshots**: Automated visual testing

## 📁 Project Structure

```
mpdee-support/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout with navigation/footer
│   ├── page.tsx                 # Homepage with error hero design
│   ├── services/page.tsx        # Detailed services page
│   ├── pricing/page.tsx         # Pricing tiers and FAQ
│   ├── contact/page.tsx         # Contact form and information
│   ├── not-found.tsx           # Custom 404 page
│   ├── error.tsx               # Error boundary page
│   ├── color-demos/page.tsx    # Color scheme demonstrations
│   └── hero-demos/page.tsx     # Hero section variations
├── components/                   # Reusable React components
│   └── ui/
│       ├── button.tsx          # Button component
│       ├── card.tsx            # Card component
│       ├── input.tsx           # Form input component
│       ├── label.tsx           # Form label component
│       ├── textarea.tsx        # Textarea component
│       ├── mpdee-logo.tsx      # Brand logo component
│       ├── gradient-text.tsx   # Gradient text utility
│       ├── navigation.tsx      # Site navigation
│       ├── footer.tsx          # Site footer
│       └── typewriter-text.tsx # Animated text component
├── lib/                         # Utility functions and constants
│   ├── utils.ts                # Utility functions (cn, etc.)
│   └── constants/
│       └── services.ts         # Service definitions and contact info
├── public/                      # Static assets
├── tasks/                       # Project documentation
│   ├── prd-mpdee-support-website.md      # Product Requirements
│   └── tasks-prd-mpdee-support-website.md # Task breakdown
├── .playwright-mcp/            # Playwright screenshots
├── components.json             # Shadcn UI configuration
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This documentation
```

## 🎨 Design System

### Brand Colors
- **Primary Red**: `#dc2626` (MPDEE Support brand)
- **Primary Navy**: `#0f172a` (MPDEE Support brand)
- **Support Gradient**: Linear gradient from red to navy

### Complementary Colors
- **Blue**: `#3b82f6` (Remote Support)
- **Emerald**: `#10b981` (On-Site Support)  
- **Amber**: `#f59e0b` (Hardware Services)
- **Gray**: `#6b7280` (Software Solutions)

### Typography
- **Primary Font**: Geist Sans
- **Monospace Font**: Geist Mono
- **Responsive scaling**: Mobile-first approach

### Components
- **Cards**: Clean white backgrounds with colored accents
- **Buttons**: Support gradient primary, outline secondary
- **Forms**: Proper error states and validation styling
- **Navigation**: Clean white with subtle shadow
- **Footer**: Light gray background with organized links

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/mpdee-support.git
   cd mpdee-support
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues

# Playwright (if installed)
npx playwright test  # Run browser tests
npx playwright show-report  # Show test results
```

## 🔧 Configuration Files

### Next.js Configuration (`next.config.ts`)
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['pages', 'utils', 'components', 'lib', 'app']
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  trailingSlash: false,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  }
};

export default nextConfig;
```

### Tailwind Configuration (`tailwind.config.ts`)
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Shadcn UI color system
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // MPDEE Brand Colors
        "support-red": "var(--support-red)",
        "support-navy": "var(--support-navy)",
        "mpdee-primary": "var(--mpdee-primary)",
        "mpdee-secondary": "var(--mpdee-secondary)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

## 🎭 Key Components

### MPDEE Logo Component
```typescript
// components/ui/mpdee-logo.tsx
import { cn } from "@/lib/utils";
import { GradientText } from "./gradient-text";

interface MPDEELogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function MPDEELogo({ size = "md", className }: MPDEELogoProps) {
  const textSize = {
    sm: "text-xl",
    md: "text-2xl", 
    lg: "text-4xl",
    xl: "text-5xl",
  }[size];

  return (
    <h1 className={cn("font-bold", textSize, className)}>
      MPDEE <GradientText text="Support" gradient="support" />
    </h1>
  );
}
```

### Error Hero Section
The unique hero section uses authentic error styling:
- Red error borders and backgrounds (`bg-red-50`, `border-red-200`)
- Warning icons with red coloring
- Realistic form validation styling
- Professional error typography

### Service Cards
Color-coded service cards with:
- **Blue**: Remote Support
- **Emerald**: On-Site Support
- **Amber**: Hardware Services
- **Gray**: Software Solutions

## 📱 Responsive Design

The website uses a mobile-first approach:

- **Mobile**: Single column layout, stacked navigation
- **Tablet**: Two-column service cards, expanded navigation
- **Desktop**: Four-column service grid, full navigation bar

### Breakpoints
- `sm`: 640px and up
- `md`: 768px and up  
- `lg`: 1024px and up
- `xl`: 1280px and up

## 🔍 SEO & Performance

### Metadata Configuration
```typescript
export const metadata: Metadata = {
  title: "MPDEE Support - Professional IT Support Services",
  description: "Professional IT support services for businesses and consumers. Remote helpdesk, on-site support, hardware installation, software troubleshooting, and more.",
  keywords: "IT support, technical support, remote helpdesk, on-site support, hardware installation, software troubleshooting, computer repair, business IT support",
  // ... additional metadata
};
```

### Performance Optimizations
- **Image Optimization**: WebP/AVIF formats, responsive sizing
- **Code Splitting**: Automatic with Next.js App Router
- **CSS Optimization**: Tailwind CSS purging
- **Compression**: Gzip compression enabled
- **Caching**: Optimized ETags and headers

## 🧪 Testing

### Playwright Integration
The project includes Playwright for browser automation and testing:

```bash
# Install Playwright (if needed)
npm install -D @playwright/test
npx playwright install

# Run tests
npx playwright test

# Generate screenshots
npx playwright test --update-snapshots
```

### Visual Testing
Screenshots are automatically generated and saved in `.playwright-mcp/`:
- Homepage variants
- Color scheme demonstrations
- Responsive layout testing

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect Repository**
   - Import project from GitHub in Vercel dashboard
   - Configure build settings (auto-detected for Next.js)

2. **Environment Variables** (if any)
   ```
   NEXT_PUBLIC_SITE_URL=https://support.mpdee.co.uk
   ```

3. **Custom Domain**
   - Configure `support.mpdee.co.uk` in Vercel dashboard
   - Update DNS records as instructed

### Manual Deployment
```bash
# Build for production
npm run build

# Start production server
npm start

# Or export static files
npm run build
npm run export  # if configured
```

## 🔄 Continuing Development on Another PC

### Setup Instructions

1. **Prerequisites Installation**
   ```bash
   # Install Node.js (https://nodejs.org)
   node --version  # Should be 18.0+
   npm --version   # Should be 8.0+
   
   # Install Git (https://git-scm.com)
   git --version
   ```

2. **Clone and Setup**
   ```bash
   git clone https://github.com/YOUR_USERNAME/mpdee-support.git
   cd mpdee-support
   npm install
   ```

3. **Development Environment**
   ```bash
   # Start development server
   npm run dev
   
   # Open browser to http://localhost:3000
   ```

4. **IDE Setup (Optional)**
   - **Cursor IDE**: Recommended for AI-powered development
   - **VS Code**: With TypeScript, Tailwind CSS, and ESLint extensions
   - **WebStorm**: Full TypeScript and React support

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/new-feature

# Create pull request on GitHub
```

## 📋 Dependencies

### Production Dependencies
```json
{
  "next": "^15.4.6",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "@radix-ui/react-label": "^2.1.1",
  "@radix-ui/react-slot": "^1.1.1",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "lucide-react": "^0.468.0",
  "tailwind-merge": "^2.6.0",
  "tailwindcss-animate": "^1.0.7"
}
```

### Development Dependencies
```json
{
  "@types/node": "^22.10.2",
  "@types/react": "^19.0.2",
  "@types/react-dom": "^19.0.2",
  "eslint": "^8.57.1",
  "eslint-config-next": "^15.4.6",
  "postcss": "^8.5.1",
  "tailwindcss": "^4.0.0",
  "typescript": "^5.7.2"
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Node.js Version Error**
   ```bash
   # Check version
   node --version
   
   # Update if needed (using nvm)
   nvm install 18
   nvm use 18
   ```

2. **Module Not Found Errors**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript Errors**
   ```bash
   # Run type checking
   npx tsc --noEmit
   
   # Fix ESLint issues
   npm run lint:fix
   ```

4. **Build Failures**
   ```bash
   # Check for syntax errors
   npm run lint
   
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

### Development Tips

1. **Hot Reload**: Changes auto-refresh in development mode
2. **TypeScript**: Use strict mode for better error catching
3. **Components**: Follow Shadcn UI patterns for consistency
4. **Styling**: Use Tailwind utilities, custom CSS for brand elements
5. **Testing**: Use Playwright for browser automation

## 📞 Support & Contact

For questions about this codebase or MPDEE Support services:

- **Email**: sendme@mpdee.info
- **Website**: https://support.mpdee.co.uk (when deployed)
- **MPDEE Development**: https://www.mpdee.co.uk
- **MPDEE Creative**: https://creative.mpdee.co.uk

## 📄 License

This project is proprietary to MPDEE Support. All rights reserved.

---

**Built with ❤️ by the MPDEE team using modern web technologies.**