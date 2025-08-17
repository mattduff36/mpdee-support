import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PRICING_TIERS } from "@/lib/constants/services";
import Link from "next/link";

export const metadata = {
  title: "Pricing - MPDEE Support",
  description: "Transparent pricing for IT support services. Hourly rates starting at £50, monthly retainers from £120, and custom project pricing.",
  keywords: "IT support pricing, hourly rates, monthly retainer, project pricing, technical support costs",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the support option that works best for your needs. No hidden fees, 
            no long-term contracts required.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier) => (
              <Card key={tier.id} className={`relative p-8 ${tier.popular ? 'ring-2 ring-support-red shadow-lg' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="support-gradient text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                  <div className="text-3xl font-bold text-support-red mb-2">{tier.price}</div>
                  <p className="text-muted-foreground">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild 
                  className={`w-full ${tier.popular ? 'support-gradient text-white hover:opacity-90' : ''}`}
                  variant={tier.popular ? 'default' : 'outline'}
                >
                  <Link href="/contact">
                    {tier.id === 'project' ? 'Get Quote' : 'Get Started'}
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pricing Details</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our pricing structure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Hourly Support Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>First hour (minimum charge)</span>
                  <span className="font-semibold">£50.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Additional hours</span>
                  <span className="font-semibold">£24.00/hour</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency callout (out of hours)</span>
                  <span className="font-semibold">£75.00 + hourly</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-muted rounded-md">
                <p className="text-sm text-muted-foreground">
                  <strong>Example:</strong> A 2.5-hour support session would cost £50 + (1.5 × £24) = £86.00
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Monthly Retainer Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Priority support queue</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Reduced hourly rates (£18/hour)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Proactive system monitoring</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Monthly system health reports</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">No minimum charge for support calls</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pricing FAQ</h2>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Do you charge for travel time?</h3>
              <p className="text-muted-foreground">
                For on-site visits within our local area (within 10 miles), travel time is included. 
                For locations beyond this, we charge £0.45 per mile for travel expenses.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">What's included in the first hour charge?</h3>
              <p className="text-muted-foreground">
                The first hour includes problem diagnosis, initial troubleshooting, and up to 60 minutes 
                of active support work. This ensures we can properly assess and address your issue.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Can I cancel my monthly retainer?</h3>
              <p className="text-muted-foreground">
                Yes, our monthly retainers have no long-term commitment. You can cancel at any time 
                with 30 days' notice. We believe in earning your business every month.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">How do you handle emergency support?</h3>
              <p className="text-muted-foreground">
                Emergency support outside of business hours incurs an additional £75 callout fee, 
                plus our standard hourly rates. We aim to respond to emergencies within 2 hours.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get professional IT support tailored to your needs and budget
          </p>
          <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
            <Button asChild className="support-gradient text-white hover:opacity-90" size="lg">
              <Link href="/contact">Request Support</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
