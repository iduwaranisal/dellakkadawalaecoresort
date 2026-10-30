import React from "react";
import { Home, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-svh flex items-center justify-center bg-[#071F1A] px-4 py-24 relative overflow-hidden">
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-[120px] pointer-events-none" />

      <Container size="narrow" className="relative z-10 text-center space-y-6">
        <span className="font-mono text-sm uppercase tracking-[0.3em] text-[#C9A84C]">
          Page Not Found (404)
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F5F1E6] font-normal">
          Lost in the Forest?
        </h1>

        <p className="text-base sm:text-lg text-[#DDE5DD]/80 max-w-lg mx-auto leading-relaxed">
          The page you are looking for does not exist or has been moved. Let us guide you back to the peaceful riverbank.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button
            variant="primary"
            size="md"
            href="/"
            icon={<Home className="w-4 h-4" />}
          >
            Back to Home
          </Button>

          <Button
            variant="glass"
            size="md"
            href="/contact"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Contact Desk
          </Button>
        </div>
      </Container>
    </div>
  );
}
