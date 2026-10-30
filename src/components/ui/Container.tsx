import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide" | "full";
  as?: React.ElementType;
}

export function Container({
  children,
  className = "",
  size = "default",
  as: Component = "div",
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
    full: "max-w-full",
  };

  return (
    <Component
      className={`mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Component>
  );
}

