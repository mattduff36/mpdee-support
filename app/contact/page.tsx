import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_INFO } from "@/lib/constants/services";

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
          <h1 className="text-4xl font-bold mb-6">Get Support</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Need IT support? We're here to help. Submit a request below and we'll get back to you quickly.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-slate-900/50 backdrop-blur border-slate-700">
              <h2 className="text-2xl font-bold mb-6">Submit Support Request</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" name="phone" type="tel" />
                </div>

                <div>
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input id="company" name="company" />
                </div>

                <div>
                  <Label htmlFor="priority">Priority Level</Label>
                  <select 
                    id="priority" 
                    name="priority" 
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="low">Low - General inquiry</option>
                    <option value="medium">Medium - Non-urgent issue</option>
                    <option value="high">High - Business affecting</option>
                    <option value="urgent">Urgent - Critical system down</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="issue-type">Issue Type</Label>
                  <select 
                    id="issue-type" 
                    name="issue-type" 
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select issue type</option>
                    <option value="remote-support">Remote Support Needed</option>
                    <option value="onsite-support">On-site Support Required</option>
                    <option value="hardware">Hardware Issue</option>
                    <option value="software">Software Problem</option>
                    <option value="network">Network/Connectivity</option>
                    <option value="consultation">General Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Describe Your Issue *</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Please provide details about your technical issue or support request..."
                    className="min-h-[120px]"
                    required
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    0/1000 characters
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="callback" 
                    name="callback" 
                    className="rounded border-input"
                  />
                  <Label htmlFor="callback" className="text-sm font-medium">
                    Request instant callback (we'll call you within 30 minutes during business hours)
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="remote-access" 
                    name="remote-access" 
                    className="rounded border-input"
                  />
                  <Label htmlFor="remote-access" className="text-sm font-medium">
                    I consent to remote access of my system if needed for diagnosis
                  </Label>
                </div>

                <Button type="submit" className="w-full support-gradient text-white hover:opacity-90" size="lg">
                  Submit Support Request
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> and{" "}
                  <a href="/terms" className="text-primary hover:underline">Terms of Service</a>.
                </p>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6 bg-slate-900/50 backdrop-blur border-slate-700">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-support-red mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <div className="font-medium">Email</div>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-support-red mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div className="text-muted-foreground">{CONTACT_INFO.responseTime}</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-support-red mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="font-medium">Service Area</div>
                      <div className="text-muted-foreground">{CONTACT_INFO.location}</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-support-red mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-medium">Support Hours</div>
                      <div className="text-muted-foreground">{CONTACT_INFO.supportHours}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-900/50 backdrop-blur border-slate-700">
                <h3 className="text-xl font-semibold mb-4">Emergency Support</h3>
                <p className="text-muted-foreground mb-4">
                  For urgent issues outside of business hours, we offer emergency support with a priority response.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Emergency callout fee:</span>
                    <span className="font-semibold">£75.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Plus standard hourly rates</span>
                    <span className="font-semibold">£50 + £24/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Target response time:</span>
                    <span className="font-semibold">Within 2 hours</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-900/50 backdrop-blur border-slate-700">
                <h3 className="text-xl font-semibold mb-4">What Happens Next?</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-support-gradient text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                    <div>
                      <div className="font-medium">We Review Your Request</div>
                      <div className="text-sm text-muted-foreground">Our team assesses your issue and priority level</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-support-gradient text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                    <div>
                      <div className="font-medium">Quick Response</div>
                      <div className="text-sm text-muted-foreground">We contact you within 24 hours (or 30 minutes for callbacks)</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-support-gradient text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                    <div>
                      <div className="font-medium">Problem Resolution</div>
                      <div className="text-sm text-muted-foreground">We work with you to resolve your IT issue efficiently</div>
                    </div>
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
