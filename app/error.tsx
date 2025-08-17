"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MPDEELogo } from "@/components/ui/mpdee-logo";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto text-center">
        <MPDEELogo size="lg" className="mb-6" />
        
        <div className="error-dialog mx-auto max-w-lg mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 text-shadow-lg">Oops!</h1>
          <h2 className="text-xl font-semibold text-foreground mb-4 text-shadow-lg">Something went wrong</h2>
          <p className="text-muted-foreground">
            We encountered an unexpected error. Our support team has been notified and is working to resolve the issue.
          </p>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4 text-left bg-muted p-4 rounded-md">
              <summary className="cursor-pointer text-sm font-medium">Error Details</summary>
              <pre className="mt-2 text-xs overflow-auto">
                {error.message}
                {error.stack}
              </pre>
            </details>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={reset}
              className="support-gradient text-white hover:opacity-90"
            >
              Try Again
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Go Home</Link>
            </Button>
          </div>
          
          <div className="pt-4">
            <p className="text-sm text-muted-foreground">
              Still having issues? <a href="/contact" className="text-primary hover:underline">Contact our support team</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
