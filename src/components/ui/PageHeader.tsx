import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  imageSrc?: string;
  imageAlt?: string;
}

export function PageHeader({
  label,
  title,
  description,
  breadcrumbs,
  imageSrc = "/images/hero/hero1.jpg",
  imageAlt = "Dellakkadawala Eco Resort banner",
}: PageHeaderProps) {
  return (
    <div className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#071F1A]">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071F1A] via-[#071F1A]/85 to-[#071F1A]/60" />
      </div>

      <Container size="default" className="relative z-10">
        <div className="max-w-3xl space-y-4">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs text-[#DDE5DD]/70">
            <Link href="/" className="hover:text-[#C9A84C] transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-[#C9A84C]" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#C9A84C] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#C9A84C] font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Small Gold Label */}
          {label && (
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#C9A84C]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A84C]">
                {label}
              </span>
            </div>
          )}

          {/* Main Serif Page Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F1E6] font-normal tracking-tight">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-base sm:text-lg text-[#DDE5DD]/85 leading-relaxed max-w-2xl font-normal">
              {description}
            </p>
          )}

        </div>
      </Container>
    </div>
  );
}

