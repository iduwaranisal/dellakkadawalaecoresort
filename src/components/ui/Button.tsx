import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "glass" | "outline-gold" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  icon,
  iconPosition = "right",
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071F1A] disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide";

  const sizeClasses = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm sm:text-base px-6 py-3 gap-2",
    lg: "text-base sm:text-lg px-8 py-3.5 sm:py-4 gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-[#C9A84C] text-[#071F1A] font-semibold hover:bg-[#D8B75B] hover:shadow-[0_0_24px_rgba(201,168,76,0.35)] active:scale-[0.98]",
    glass:
      "bg-white/10 backdrop-blur-md text-[#F5F1E6] border border-[#DDE5DD]/30 hover:border-[#C9A84C] hover:bg-white/15 hover:text-white active:scale-[0.98]",
    "outline-gold":
      "bg-transparent text-[#C9A84C] border border-[#C9A84C]/60 hover:bg-[#C9A84C] hover:text-[#071F1A] active:scale-[0.98]",
    ghost:
      "bg-transparent text-[#F5F1E6] hover:text-[#C9A84C] hover:bg-white/5",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (isExternal || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={isExternal || href.startsWith("http") ? "_blank" : undefined}
          rel={isExternal || href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
}

