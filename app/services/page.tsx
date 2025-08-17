import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SUPPORT_SERVICES } from "@/lib/constants/services";
import Link from "next/link";

export const metadata = {
  title: "IT Support Services - MPDEE Support",
  description: "Comprehensive IT support services including remote helpdesk, on-site support, hardware services, and software solutions for businesses and consumers.",
  keywords: "IT support services, remote helpdesk, on-site support, hardware installation, software troubleshooting, technical support, computer repair",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-6">Our Support Services</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional IT support solutions designed to keep your technology running smoothly, 
            from remote assistance to on-site technical support.
          </p>
          <Button asChild className="support-gradient text-white hover:opacity-90" size="lg">
            <Link href="/contact">Get Support Now</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:gap-12">
            {SUPPORT_SERVICES.map((service, index) => (
              <Card key={service.id} className="overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="w-16 h-16 bg-support-gradient rounded-lg mb-6 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {service.id === 'remote-support' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        )}
                        {service.id === 'onsite-support' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        )}
                        {service.id === 'hardware-services' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        )}
                        {service.id === 'software-solutions' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        )}
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <h3 className="font-semibold mb-3">What's Included:</h3>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className="support-gradient text-white hover:opacity-90">
                      <Link href="/contact">Request This Service</Link>
                    </Button>
                  </div>
                  
                  <div className={`bg-gradient-to-br from-muted to-muted/50 p-8 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="w-full h-48 bg-support-gradient/10 rounded-lg flex items-center justify-center">
                      <svg className="w-24 h-24 text-support-red/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {service.id === 'remote-support' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        )}
                        {service.id === 'onsite-support' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        )}
                        {service.id === 'hardware-services' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        )}
                        {service.id === 'software-solutions' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        )}
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Extended Support Hours</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're here when you need us most, with extended hours beyond standard business times.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Standard Hours</h3>
              <div className="text-2xl font-bold text-support-red mb-2">Monday - Friday</div>
              <div className="text-lg mb-4">8:00 AM - 6:00 PM</div>
              <p className="text-sm text-muted-foreground">
                Full support team available for all service types
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Extended Hours</h3>
              <div className="text-2xl font-bold text-support-red mb-2">Evenings & Weekends</div>
              <div className="text-lg mb-4">By Appointment</div>
              <p className="text-sm text-muted-foreground">
                Emergency support and scheduled maintenance available
              </p>
            </Card>
          </div>
          
          <div className="mt-8">
            <Button asChild className="support-gradient text-white hover:opacity-90" size="lg">
              <Link href="/contact">Schedule Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
