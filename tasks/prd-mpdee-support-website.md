# Product Requirements Document: MPDEE Support Website

## Introduction/Overview

MPDEE Support is the third department of the MPDEE company family, joining MPDEE Development and MPDEE Creative. This website will serve as the primary digital presence for MPDEE's IT support services, offering both remote helpdesk support (1st and 2nd line) and on-site technical support (3rd line) to businesses and individual consumers.

The website should maintain visual consistency with the existing MPDEE brand family while establishing its own distinct identity through a red/navy gradient treatment for the "Support" text, similar to how "Development" uses yellow/orange gradients.

**Goal:** Create a professional, user-friendly website that effectively communicates MPDEE Support's comprehensive IT services and provides easy access to support requests and resources.

## Goals

1. **Brand Consistency:** Maintain visual alignment with existing MPDEE sites while establishing unique Support brand identity
2. **Lead Generation:** Convert website visitors into support service customers through clear service presentation and easy contact methods
3. **Customer Self-Service:** Provide comprehensive knowledge base and resources to reduce support ticket volume
4. **Professional Credibility:** Establish trust and expertise in IT support services for both business and consumer markets
5. **Service Clarity:** Clearly communicate different support tiers, pricing, and service delivery methods

## User Stories

1. **As a small business owner**, I want to understand MPDEE Support's service offerings so that I can determine if they can handle my company's IT needs.

2. **As a home user with a computer problem**, I want to quickly request support and understand the cost so that I can get my issue resolved efficiently.

3. **As a potential business client**, I want to see pricing for ongoing support packages so that I can budget for IT support services.

4. **As an existing customer**, I want to access troubleshooting guides and resources so that I can resolve simple issues myself.

5. **As a business manager**, I want to request an instant callback so that I can discuss urgent IT issues immediately.

6. **As a customer**, I want to download helpful guides and resources so that I can better maintain my systems.

## Functional Requirements

### Core Website Features
1. **Homepage** must showcase all IT support services with clear service categories
2. **Services page** must detail remote helpdesk, on-site support, hardware/software services, upgrades, and consultation
3. **Pricing section** must display:
   - Hourly rates: £50 for first hour, £24 per hour afterwards
   - Monthly retainer packages starting at £120 per month
   - One-off project pricing with "Contact for price" option
4. **Contact form** must include option for "request instant callback"
5. **Knowledge base section** must provide self-help guides, FAQs, troubleshooting wizards, and video tutorials
6. **Resource download area** must allow customers to access guides and documentation
7. **Extended hours information** must be clearly displayed (not 24/7 but beyond standard business hours)

### Technical Integration
8. **RustDesk integration** preparation for remote access tools
9. **Mobile-responsive design** following mobile-first approach
10. **Performance optimization** for fast loading times
11. **Contact form** must be functional with email delivery
12. **SEO optimization** for local IT support searches

### Brand Consistency
13. **Visual styling** must match MPDEE Development and Creative sites' layout structure
14. **"Support" text** must use red/navy gradient treatment
15. **Logo and branding** must follow MPDEE family standards
16. **Navigation structure** must be consistent with other MPDEE sites
17. **Footer structure** must match other MPDEE sites

## Non-Goals (Out of Scope)

1. **Customer portal with login functionality** - not required for initial launch
2. **Live chat system** - contact form with callback option is sufficient
3. **Online ticketing system** - will use contact form initially
4. **Team member profiles** - no individual team information to be displayed
5. **24/7 support claims** - only extended hours, not round-the-clock
6. **E-commerce functionality** - pricing is informational only
7. **Appointment booking system** - callback requests handle scheduling needs
8. **Customer support history tracking** - not required for launch

## Design Considerations

### Visual Consistency
- Follow the layout structure and styling patterns established by MPDEE Development (https://www.mpdee.co.uk/)
- Implement similar hero section with service showcase
- Use consistent typography, spacing, and component styles
- Maintain similar navigation structure and footer design

### Brand Identity
- "Support" text should use red/navy gradient (distinct from Development's yellow/orange)
- Maintain MPDEE logo and overall brand colors
- Use similar portfolio/services grid layout structure
- Implement consistent button styles and form designs

### User Experience
- Mobile-first responsive design
- Clear service categorization
- Prominent call-to-action for support requests
- Easy access to knowledge base resources
- Intuitive navigation between services and pricing

## Technical Considerations

### Technology Stack
- Next.js with TypeScript (consistent with user's expertise)
- Tailwind CSS for styling
- Shadcn UI components for consistency
- React Server Components where possible

### Performance
- Optimize for Web Vitals (LCP, CLS, FID)
- Implement lazy loading for images and resources
- Use WebP format for images
- Minimize client-side JavaScript

### Integration Preparation
- Structure codebase to easily integrate RustDesk remote access tools
- Design contact form to be easily extended to ticketing system
- Prepare for future customer portal integration

### SEO & Analytics
- Implement proper meta tags and structured data
- Optimize for local IT support search terms
- Prepare for analytics integration

## Success Metrics

1. **Conversion Rate:** Achieve 5%+ conversion rate from visitors to support request submissions
2. **Knowledge Base Usage:** 30%+ of visitors should access self-help resources
3. **Mobile Performance:** Achieve 90+ mobile PageSpeed score
4. **User Engagement:** Average session duration of 2+ minutes
5. **Callback Requests:** 20%+ of contact form submissions should request instant callback
6. **Resource Downloads:** Track downloads of guides and resources
7. **Service Inquiry Quality:** Measure quality of leads generated through different service categories

## Open Questions

1. **Content Creation:** Who will provide the content for troubleshooting guides and video tutorials?
2. **RustDesk Integration Timeline:** When should remote access tool integration be implemented?
3. **Extended Hours Definition:** What are the specific extended support hours to be advertised?
4. **Geographic Coverage:** Should the site specify service areas for on-site support?
5. **Certification Display:** Should any IT certifications or qualifications be mentioned without individual profiles?
6. **Emergency Support Pricing:** Is there premium pricing for urgent/emergency support requests?
7. **Video Content:** Will video tutorials be hosted locally or on external platforms (YouTube, etc.)?
8. **Resource Categories:** How should downloadable resources be categorized (by device type, issue type, etc.)?

---

**Document Version:** 1.0  
**Created:** January 2025  
**Target Audience:** Junior Developer  
**Implementation Priority:** High
