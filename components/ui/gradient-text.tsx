import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "support" | "primary" | "secondary";
  children: React.ReactNode;
}

export function GradientText({ 
  variant = "support", 
  className, 
  children, 
  ...props 
}: GradientTextProps) {
  const gradientClasses = {
    support: "support-text-gradient", // now uses red-to-blue
    primary: "bg-gradient-to-r from-mpdee-primary-600 to-mpdee-primary-800 bg-clip-text text-transparent",
    secondary: "bg-gradient-to-r from-mpdee-secondary-400 to-mpdee-secondary-700 bg-clip-text text-transparent"
  };

  return (
    <span 
      className={cn(gradientClasses[variant], className)} 
      {...props}
    >
      {children}
    </span>
  );
}
