import React from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  theme = "dark",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = theme === "light";

  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {label && (
        <div className={`flex items-center gap-2 mb-3.5 ${isCenter ? "justify-center" : "justify-start"}`}>
          <span className="w-6 sm:w-8 h-[1px] bg-[#C9A84C]" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A84C]">
            {label}
          </span>
          {isCenter && <span className="w-6 sm:w-8 h-[1px] bg-[#C9A84C]" />}
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium leading-[1.15] tracking-tight ${
          isLight ? "text-[#071F1A]" : "text-[#F5F1E6]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isLight ? "text-[#0E3B2F]/80" : "text-[#DDE5DD]/85"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

