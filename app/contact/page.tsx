import { Card } from "@/components/ui/card";
import { CONTACT_INFO } from "@/lib/constants/services";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us - MPDEE Support",
  description: "Get in touch with MPDEE Support for professional IT assistance. Request instant callback, submit support requests, or schedule consultation.",
  keywords: "contact IT support, instant callback, technical support request, IT consultation, help desk",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-6 text-shadow-lg">Get Support</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Need IT support? We&apos;re here to help. Submit a request below and we&apos;ll get back to you quickly.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-white border-blue-100">
              <h2 className="text-2xl font-bold mb-6 text-shadow-lg">Submit Support Request</h2>
              <ContactForm />
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6 bg-blue-50/80 border-blue-200">
                <img
                  src="/support-rep.jpg"
                  alt="Customer service representative with headset"
                  className="w-full rounded-lg shadow-md mb-4 object-cover object-center max-h-40"
                />
                <h3 className="text-xl font-semibold mb-4 text-shadow-lg">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-support-red mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">{CONTACT_INFO.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-support-red mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">{CONTACT_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-support-red mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-emerald-50/80 border-emerald-200">
                <h3 className="text-xl font-semibold mb-4 text-shadow-lg">Emergency Support</h3>
                <p className="text-muted-foreground mb-4">
                  For urgent technical issues that require immediate attention, please call our emergency support line.
                </p>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-support-red mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div>
                    <p className="font-medium">Emergency Line</p>
                    <p className="text-muted-foreground">{CONTACT_INFO.emergency}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
