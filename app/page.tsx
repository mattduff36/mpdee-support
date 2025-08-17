import { MPDEELogo } from "@/components/ui/mpdee-logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Error Page Style */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center overflow-hidden">
        {/* Hero background image with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-it-team.jpg"
            alt="IT support team collaboration"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.7)' }}
          />
          <div className="absolute inset-0 z-10 bg-white/75" />
        </div>
        <div className="mx-auto max-w-xl text-center relative z-30">
          <MPDEELogo size="xl" className="mb-6" />

          <div className="error-dialog mx-auto max-w-2xl mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-3 text-shadow-lg">Oops!</h1>
            <h2 className="text-xl font-semibold text-foreground mb-4 text-shadow-lg">Something went wrong?</h2>
            <p className="text-base text-muted-foreground mb-4">
              Have you encountered an unexpected error or technical issue? MPDEE Support can help resolve the issue.
            </p>
            <div className="flex items-center mb-3">
              <span className="font-semibold text-sm text-blue-700">Describe your issue:</span>
            </div>
            <Textarea 
              id="message" 
              name="message" 
              placeholder="This is a fake error message, but you might have seen something similar. Tell us what happened... (e.g., 'My computer won't start', 'Email not working', 'Network connection issues')"
              className="min-h-[90px]"
              required
            />
            <div className="text-xs text-blue-600 mt-1">
              0/500 characters
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="support-gradient text-white hover:opacity-90 min-w-[120px]">
                Report Issue
              </Button>
              <Button variant="outline" className="min-w-[120px] border-gray-300 text-gray-700 hover:bg-gray-50">
                Go Home
              </Button>
            </div>

            <div className="pt-2">
              <p className="text-sm text-muted-foreground">
                Still having issues? <a href="/contact" className="text-blue-600 hover:underline">Contact our support team</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-shadow-lg">Our Support Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for comprehensive IT support services. We provide remote helpdesk support,
              on-site technical assistance, and everything in between to keep your technology running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg hover:shadow-blue-500/20 transition-all border-blue-200 bg-blue-50">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-blue-900">Remote Support</h3>
              <p className="text-sm text-blue-700">1st & 2nd line helpdesk support with instant remote access</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg hover:shadow-emerald-500/20 transition-all border-emerald-200 bg-emerald-50">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-emerald-900">On-Site Support</h3>
              <p className="text-sm text-emerald-700">3rd line technical support at your location</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg hover:shadow-amber-500/20 transition-all border-amber-200 bg-amber-50">
              <div className="w-12 h-12 bg-amber-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-amber-900">Hardware Services</h3>
              <p className="text-sm text-amber-700">Installation, maintenance, and repairs</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg hover:shadow-gray-500/20 transition-all border-gray-200 bg-gray-50">
              <div className="w-12 h-12 bg-gray-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">Software Solutions</h3>
              <p className="text-sm text-gray-700">Troubleshooting, updates, and installations</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-white to-amber-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-shadow-lg">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today for professional IT support tailored to your needs
          </p>
          <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
            <Button className="support-gradient hover:opacity-90 text-white text-shadow-lg" size="lg">
              Request Support
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}