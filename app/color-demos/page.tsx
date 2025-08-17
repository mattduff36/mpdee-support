"use client";

import { useState } from "react";
import { MPDEELogo } from "@/components/ui/mpdee-logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ColorDemosPage() {
  const [currentDemo, setCurrentDemo] = useState(0);

  const demos = [
    { name: "Navy Background", id: "navy-bg" },
    { name: "Red Gradient", id: "red-gradient" },
    { name: "Dark Slate", id: "dark-slate" },
    { name: "Crimson Deep", id: "crimson-deep" },
    { name: "Navy Red Mix", id: "navy-red-mix" },
    { name: "Charcoal Red", id: "charcoal-red" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Color Scheme Demos</h1>
            <div className="flex gap-2 flex-wrap">
              {demos.map((demo, index) => (
                <Button
                  key={index}
                  variant={currentDemo === index ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentDemo(index)}
                  className={currentDemo === index ? "support-gradient text-white" : ""}
                >
                  {demo.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Demo Content */}
      <div className="relative">
        {currentDemo === 0 && <NavyBackgroundDemo />}
        {currentDemo === 1 && <RedGradientDemo />}
        {currentDemo === 2 && <DarkSlateDemo />}
        {currentDemo === 3 && <CrimsonDeepDemo />}
        {currentDemo === 4 && <NavyRedMixDemo />}
        {currentDemo === 5 && <CharcoalRedDemo />}
      </div>
    </div>
  );
}

// Demo 1: Navy Background
function NavyBackgroundDemo() {
  return (
    <div className="p-8 bg-slate-900 min-h-screen text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <MPDEELogo size="lg" className="mb-4 text-white" />
          <h2 className="text-3xl font-bold mb-2 text-white">Deep Navy Background</h2>
          <p className="text-slate-300">Professional navy base with red accent highlights</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-slate-800 border border-slate-700 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/20 transition-all">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Remote Support</h3>
            </div>
            <p className="text-sm text-slate-300">Instant remote access and troubleshooting</p>
          </Card>

          <Card className="p-6 bg-slate-800 border border-slate-700 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/20 transition-all">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">On-Site Support</h3>
            </div>
            <p className="text-sm text-slate-300">Professional technical assistance at your location</p>
          </Card>

          <Card className="p-6 bg-slate-800 border border-slate-700 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/20 transition-all">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Hardware Services</h3>
            </div>
            <p className="text-sm text-slate-300">Installation, maintenance, and repairs</p>
          </Card>
        </div>

        <div className="flex gap-4 justify-center">
          <Button className="support-gradient text-white hover:opacity-90">Get Support</Button>
          <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white">Schedule Visit</Button>
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">View Services</Button>
        </div>
      </div>
    </div>
  );
}

// Demo 2: Red Gradient Background
function RedGradientDemo() {
  return (
    <div className="p-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 min-h-screen text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <MPDEELogo size="lg" className="mb-4 text-white" />
          <h2 className="text-3xl font-bold mb-2 text-white">Red Gradient Background</h2>
          <p className="text-red-200">Bold red base with navy accent elements</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-8 bg-red-800/50 backdrop-blur border border-red-700/50 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">Pricing Plans</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-900/70 rounded-lg border border-slate-700">
                <span className="text-white">Hourly Support</span>
                <span className="font-semibold text-red-300">£50/hour</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-900/70 rounded-lg border border-slate-700">
                <span className="text-white">Monthly Retainer</span>
                <span className="font-semibold text-red-300">£120/month</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-slate-900/70 backdrop-blur border border-slate-700 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">Support Hours</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-red-800/50 rounded-lg border border-red-700">
                <span className="text-white">Standard Hours</span>
                <span className="font-semibold text-red-300">8AM - 6PM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-800/50 rounded-lg border border-red-700">
                <span className="text-white">Extended Hours</span>
                <span className="font-semibold text-red-300">Available</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 border border-slate-700">Contact Support Team</Button>
        </div>
      </div>
    </div>
  );
}

// Demo 3: Dark Slate with Red Accents
function DarkSlateDemo() {
  return (
    <div className="p-8 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 min-h-screen text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <MPDEELogo size="lg" className="mb-4 text-white" />
          <h2 className="text-3xl font-bold mb-2 text-white">Dark Slate Background</h2>
          <p className="text-slate-300">Sophisticated dark slate with red highlight system</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-slate-800/80 border border-slate-600 text-white hover:border-red-500/50 transition-colors">
            <div className="w-12 h-12 support-gradient rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">System Monitoring</h3>
            <p className="text-sm text-slate-300">24/7 system health monitoring</p>
          </Card>

          <Card className="p-6 bg-slate-800/80 border border-slate-600 text-white hover:border-red-500/50 transition-colors">
            <div className="w-12 h-12 support-gradient rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Security Services</h3>
            <p className="text-sm text-slate-300">Advanced security implementations</p>
          </Card>

          <Card className="p-6 bg-slate-800/80 border border-slate-600 text-white hover:border-red-500/50 transition-colors">
            <div className="w-12 h-12 support-gradient rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Cloud Solutions</h3>
            <p className="text-sm text-slate-300">Cloud migration and management</p>
          </Card>
        </div>

        <div className="flex gap-4 justify-center">
          <Button className="support-gradient text-white hover:opacity-90">Learn More</Button>
          <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white">Get Started</Button>
        </div>
      </div>
    </div>
  );
}

// Demo 4: Crimson Deep Background
function CrimsonDeepDemo() {
  return (
    <div className="p-8 bg-gradient-to-br from-red-950 via-rose-900 to-red-950 min-h-screen text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <MPDEELogo size="lg" className="mb-4 text-white" />
          <h2 className="text-3xl font-bold mb-2 text-white">Deep Crimson Background</h2>
          <p className="text-red-200">Rich crimson tones with navy blue contrast elements</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-slate-900/80 rounded-xl shadow-lg overflow-hidden border border-slate-700">
            <div className="support-gradient p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Emergency Support</h3>
              <p className="text-red-100">Available 24/7 for critical issues</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-slate-200">Immediate response</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                  <span className="text-slate-200">Expert technicians</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-300 rounded-full mr-3"></div>
                  <span className="text-slate-200">Fast resolution</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 rounded-xl shadow-lg p-6 border border-slate-700 backdrop-blur">
            <h3 className="text-xl font-bold mb-4 text-white">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-red-900/50 rounded-lg border border-red-800">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-white">Email Support</div>
                  <div className="text-sm text-red-300">sendme@mpdee.info</div>
                </div>
              </div>
              <div className="flex items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-white">Response Time</div>
                  <div className="text-sm text-slate-300">Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 border border-slate-700">
            Get Deep Support
          </Button>
        </div>
      </div>
    </div>
  );
}

// Demo 5: Navy Red Mixed Background
function NavyRedMixDemo() {
  return (
    <div className="p-8 bg-gradient-to-br from-slate-900 via-red-900/30 to-slate-800 min-h-screen text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <MPDEELogo size="lg" className="mb-4 text-white" />
          <h2 className="text-3xl font-bold mb-2 text-white">Navy & Red Mixed</h2>
          <p className="text-slate-300">Balanced navy and red tones throughout design</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center bg-red-900/50 border border-red-700/50 hover:shadow-lg hover:shadow-red-500/20 transition-all backdrop-blur">
            <div className="w-12 h-12 bg-red-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-white font-bold text-xl">✓</span>
            </div>
            <h4 className="font-semibold text-white mb-1">Reliable</h4>
            <p className="text-xs text-red-300">99.9% uptime</p>
          </Card>

          <Card className="p-4 text-center bg-slate-800/80 border border-slate-600 hover:shadow-lg hover:shadow-slate-500/20 transition-all">
            <div className="w-12 h-12 bg-slate-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-white font-bold text-xl">⚡</span>
            </div>
            <h4 className="font-semibold text-white mb-1">Fast</h4>
            <p className="text-xs text-slate-300">Quick response</p>
          </Card>

          <Card className="p-4 text-center bg-red-900/50 border border-red-700/50 hover:shadow-lg hover:shadow-red-500/20 transition-all backdrop-blur">
            <div className="w-12 h-12 bg-red-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-white font-bold text-xl">🔒</span>
            </div>
            <h4 className="font-semibold text-white mb-1">Secure</h4>
            <p className="text-xs text-red-300">Data protected</p>
          </Card>

          <Card className="p-4 text-center bg-slate-800/80 border border-slate-600 hover:shadow-lg hover:shadow-slate-500/20 transition-all">
            <div className="w-12 h-12 bg-slate-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-white font-bold text-xl">👥</span>
            </div>
            <h4 className="font-semibold text-white mb-1">Expert</h4>
            <p className="text-xs text-slate-300">Skilled team</p>
          </Card>
        </div>

        <div className="bg-slate-900/80 rounded-xl p-6 shadow-lg border border-slate-700 mb-6 backdrop-blur">
          <h3 className="text-xl font-bold text-white mb-4">Success Metrics</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-1">500+</div>
              <div className="text-sm text-slate-300">Issues Resolved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-400 mb-1">24h</div>
              <div className="text-sm text-slate-300">Avg Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-1">98%</div>
              <div className="text-sm text-slate-300">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="support-gradient text-white px-8 py-3 hover:opacity-90">
            Start Working with Us
          </Button>
        </div>
      </div>
    </div>
  );
}

// Demo 6: Charcoal with Red Highlights
function CharcoalRedDemo() {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-zinc-900 min-h-screen text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <MPDEELogo size="lg" className="mb-4 text-white" />
          <h2 className="text-3xl font-bold mb-2 text-white">Charcoal & Red Highlights</h2>
          <p className="text-gray-300">Sophisticated charcoal base with strategic red accents</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <Card className="p-6 support-gradient text-white border-0 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Premium Support</h3>
              <p className="text-red-100 mb-4">Advanced diagnostics with priority response</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                Learn More
              </Button>
            </Card>

            <Card className="p-6 bg-gray-800 border border-gray-700 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-2">Standard Support</h3>
              <p className="text-gray-300 mb-4">Comprehensive IT support and maintenance</p>
              <Button variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white">
                Explore
              </Button>
            </Card>
          </div>

          <div className="bg-gray-800/80 rounded-xl p-6 shadow-lg border border-gray-700 backdrop-blur">
            <h3 className="text-xl font-bold text-white mb-4">Service Timeline</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-600 rounded-full mr-4"></div>
                <div>
                  <div className="font-medium text-white">Immediate</div>
                  <div className="text-sm text-red-300">Issue Assessment</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-500 rounded-full mr-4"></div>
                <div>
                  <div className="font-medium text-white">Within 2 Hours</div>
                  <div className="text-sm text-gray-300">Initial Response</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-600 rounded-full mr-4"></div>
                <div>
                  <div className="font-medium text-white">Same Day</div>
                  <div className="text-sm text-red-300">Resolution Target</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="support-gradient text-white px-8 py-3 hover:opacity-90 shadow-lg">
            Get Professional Support
          </Button>
        </div>
      </div>
    </div>
  );
}
