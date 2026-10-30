import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhySection } from "@/components/sections/WhySection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { StaySection } from "@/components/sections/StaySection";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { GalleryPreviewSection } from "@/components/sections/GalleryPreviewSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { LocationPreviewSection } from "@/components/sections/LocationPreviewSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Full-screen Hero Slideshow */}
      <Hero />

      {/* 2. About section */}
      <AboutSection />

      {/* 3. Why Dellakkadawala 3-step journey */}
      <WhySection />

      {/* 4. Experiences */}
      <ExperiencesSection />

      {/* 5. Stay and Facilities */}
      <StaySection />

      {/* 6. Nearby Tourism Destinations */}
      <DestinationsSection />

      {/* 7. Gallery preview */}
      <GalleryPreviewSection />

      {/* 8. Testimonials */}
      <TestimonialsSection />

      {/* 9. Frequently Asked Questions */}
      <FaqSection />

      {/* 10. Location preview */}
      <LocationPreviewSection />

      {/* 11. Final Call-to-Action banner */}
      <CtaBannerSection />
    </>
  );
}
