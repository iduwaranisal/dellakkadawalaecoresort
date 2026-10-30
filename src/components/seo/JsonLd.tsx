import React from "react";
import { siteConfig } from "@/lib/siteConfig";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Resort",
    "name": siteConfig.name,
    "alternateName": siteConfig.shortName,
    "description": siteConfig.description,
    "url": "https://dellakkadawalaecoresort.com",
    "telephone": [
      siteConfig.contact.primaryPhone,
      siteConfig.contact.secondaryPhone,
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.town,
      "addressRegion": siteConfig.contact.address.province,
      "addressCountry": "LK",
    },
    "sameAs": [siteConfig.contact.facebookUrl],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Natural River Bathing and Swimming",
        "value": true,
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Kayaking and Water Play",
        "value": true,
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free Guest Parking",
        "value": true,
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Outdoor Dining and Barbecue Patio",
        "value": true,
      },
    ],
    "image": [
      "https://dellakkadawalaecoresort.com/images/hero/hero1.jpg",
      "https://dellakkadawalaecoresort.com/images/hero/hero2.jpg",
      "https://dellakkadawalaecoresort.com/images/hero/hero3.jpg",
      "https://dellakkadawalaecoresort.com/images/hero/hero4.jpg",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

