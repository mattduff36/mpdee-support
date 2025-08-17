"use client";

import { useState, useEffect } from "react";
import { MPDEELogo } from "@/components/ui/mpdee-logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HeroDemosPage() {
  const [currentDemo, setCurrentDemo] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Hero Animation Demos</h1>
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <Button
                  key={index}
                  variant={currentDemo === index ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentDemo(index)}
                  className={currentDemo === index ? "support-gradient text-white" : ""}
                >
                  Demo {index + 1}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Demo Content */}
      <div className="relative">
        {currentDemo === 0 && <FloatingElementsHero />}
        {currentDemo === 1 && <TypewriterHero />}
        {currentDemo === 2 && <ParticleNetworkHero />}
        {currentDemo === 3 && <CodeRainHero />}
        {currentDemo === 4 && <CircuitBoardHero />}
        {currentDemo === 5 && <GlitchHero />}
      </div>
    </div>
  );
}

// Demo 1: Floating Tech Elements
function FloatingElementsHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-8 h-8 text-support-red/30">
              {i % 4 === 0 && <MonitorIcon />}
              {i % 4 === 1 && <ServerIcon />}
              {i % 4 === 2 && <CpuIcon />}
              {i % 4 === 3 && <CloudIcon />}
            </div>
          </div>
        ))}
      </div>
      
      <div className="relative z-10 text-center">
        <div className="animate-fade-in-up">
          <MPDEELogo size="xl" className="mb-6" />
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-200">
            Floating into the future of IT support
          </p>
          <Button className="support-gradient text-white hover:opacity-90 animate-fade-in-up animation-delay-400" size="lg">
            Get Support Now
          </Button>
        </div>
      </div>
    </section>
  );
}

// Demo 2: Typewriter Effect
function TypewriterHero() {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Professional IT Support Services";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-background to-muted/10">
      <div className="text-center">
        <MPDEELogo size="xl" className="mb-6 animate-pulse" />
        <div className="h-16 mb-8">
          <p className="text-xl text-muted-foreground font-mono">
            {text}<span className="animate-pulse">|</span>
          </p>
        </div>
        <div className="animate-slide-up">
          <Button className="support-gradient text-white hover:opacity-90" size="lg">
            Initialize Support
          </Button>
        </div>
      </div>
    </section>
  );
}

// Demo 3: Particle Network
function ParticleNetworkHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted/5">
      {/* Network Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {[...Array(20)].map((_, i) => (
          <g key={i}>
            <circle
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="2"
              fill="currentColor"
              className="text-support-red/20 animate-pulse"
              style={{ animationDelay: `${Math.random() * 2}s` }}
            />
            <line
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="currentColor"
              strokeWidth="1"
              className="text-support-red/10 animate-pulse"
              style={{ animationDelay: `${Math.random() * 3}s` }}
            />
          </g>
        ))}
      </svg>
      
      <div className="relative z-10 text-center">
        <div className="animate-scale-in">
          <MPDEELogo size="xl" className="mb-6" />
          <p className="text-xl text-muted-foreground mb-8">
            Connected solutions for your business
          </p>
          <Button className="support-gradient text-white hover:opacity-90 animate-bounce" size="lg">
            Connect Now
          </Button>
        </div>
      </div>
    </section>
  );
}

// Demo 4: Code Rain Effect
function CodeRainHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/10">
      {/* Code Rain Background */}
      <div className="absolute inset-0 font-mono text-xs text-support-red/10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-slide-down"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {[...Array(20)].map((_, j) => (
              <div key={j} className="mb-2">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="relative z-10 text-center">
        <div className="animate-fade-in">
          <MPDEELogo size="xl" className="mb-6 filter drop-shadow-lg" />
          <p className="text-xl text-muted-foreground mb-8">
            Decoding your IT challenges
          </p>
          <Button className="support-gradient text-white hover:opacity-90" size="lg">
            Debug Issues
          </Button>
        </div>
      </div>
    </section>
  );
}

// Demo 5: Circuit Board Animation
function CircuitBoardHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/5 to-background">
      {/* Circuit Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M10 10h80v80h-80z M30 30h40v40h-40z M50 10v20 M50 70v20 M10 50h20 M70 50h20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-support-red animate-pulse"
              />
              <circle cx="50" cy="50" r="5" fill="currentColor" className="text-support-red animate-ping" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>
      
      <div className="relative z-10 text-center">
        <div className="animate-slide-up">
          <MPDEELogo size="xl" className="mb-6" />
          <p className="text-xl text-muted-foreground mb-8">
            Engineering reliable IT solutions
          </p>
          <Button className="support-gradient text-white hover:opacity-90 animate-pulse" size="lg">
            Power Up
          </Button>
        </div>
      </div>
    </section>
  );
}

// Demo 6: Glitch Effect
function GlitchHero() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-background via-muted/5 to-background">
      <div className="text-center">
        <div className={`transition-all duration-200 ${glitch ? 'animate-pulse filter hue-rotate-180' : ''}`}>
          <MPDEELogo 
            size="xl" 
            className={`mb-6 ${glitch ? 'transform skew-x-2 text-red-500' : ''}`} 
          />
          <p className={`text-xl text-muted-foreground mb-8 ${glitch ? 'transform -skew-x-1' : ''}`}>
            {glitch ? 'SY5T3M R3B00T1NG...' : 'System optimization in progress'}
          </p>
          <Button 
            className={`support-gradient text-white hover:opacity-90 ${glitch ? 'animate-bounce' : ''}`} 
            size="lg"
          >
            {glitch ? 'REBOOT' : 'Optimize Now'}
          </Button>
        </div>
      </div>
    </section>
  );
}

// Icon Components
function MonitorIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  );
}

function CpuIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  );
}
