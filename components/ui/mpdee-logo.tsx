import { cn } from "@/lib/utils";
import { GradientText } from "./gradient-text";

interface MPDEELogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showDepartment?: boolean;
  department?: "Support" | "Development" | "Creative";
  className?: string;
}

export function MPDEELogo({ 
  size = "md", 
  showDepartment = true,
  department = "Support",
  className 
}: MPDEELogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl", 
    lg: "text-4xl",
    xl: "text-6xl"
  };

  const departmentVariants = {
    Support: "support", // now red-to-blue
    Development: "primary", 
    Creative: "secondary"
  } as const;

  return (
    <div className={cn("font-bold", sizeClasses[size], className)}>
      MPDEE{showDepartment && (
        <>
          {" "}
          <GradientText variant={departmentVariants[department]}>
            {department}
          </GradientText>
        </>
      )}
    </div>
  );
}
