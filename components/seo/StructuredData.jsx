'use client';

import { useEffect } from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lucys-cleaning.com';

const StructuredData = () => {
  useEffect(() => {
    // LocalBusiness Schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}#business`,
      name: "Lucy's Cleaning",
      legalName: "Lucy's Cleaning LLC",
      description: "Professional home cleaning services. Specializing in deep cleaning, regular maintenance, move-in/move-out cleaning, post-construction cleanup, office cleaning, and more. Trusted, reliable cleaning service you can count on.",
      telephone: '+15513012908',
      priceRange: '$$',
      image: `${siteUrl}/new-logo.png`,
      url: siteUrl,
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'NJ',
        addressLocality: 'Hudson County',
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'City',
        name: 'Hudson County',
        addressRegion: 'NJ',
        addressCountry: 'US',
      },
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          addressRegion: 'NJ',
          addressLocality: 'Hudson County',
        },
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Cleaning Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Deep Cleaning',
              description: 'Comprehensive deep cleaning service for your entire home, including detailed attention to all areas and surfaces.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Regular Maintenance',
              description: 'Weekly, bi-weekly, or monthly cleaning services to keep your home consistently clean and fresh.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Move-in/Move-out Cleaning',
              description: 'Thorough cleaning service for moving in or out, ensuring your space is spotless and ready.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Post-Construction Cleanup',
              description: 'Specialized cleaning after construction or renovation projects, removing dust, debris, and construction residue.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Office Cleaning',
              description: 'Professional commercial cleaning services for offices and workspaces to maintain a clean, productive environment.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Window Cleaning',
              description: 'Interior and exterior window cleaning for crystal-clear views and natural light.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Carpet Cleaning',
              description: 'Deep carpet cleaning and stain removal to restore the beauty and freshness of your carpets.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Upholstery Cleaning',
              description: 'Professional cleaning of sofas, chairs, and other upholstered furniture to keep them looking like new.',
            },
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '6',
        bestRating: '5',
        worstRating: '5',
      },
      review: [
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Melissa B.',
          },
          datePublished: '2024-03-01',
          reviewBody: "Zoila did an amazing deep clean of our home before we moved in. She was thorough, professional, and the house looked absolutely spotless. I would recommend her to anyone. She is a find!",
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Yoel L.',
          },
          datePublished: '2024-02-01',
          reviewBody: "Zoila has been my cleaning professional since 2023, and I cannot recommend her highly enough. Her quality of work is consistently excellent, her pricing is very fair, and she's always flexible and accommodating with scheduling. She pays close attention to detail—from neatly folding blankets to ensuring all trash is removed—and is responsive and professional in all communication.",
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'Jennifer L.',
          },
          datePublished: '2024-01-01',
          reviewBody: "Very reliable and thorough. Zoila cleaned our home after our renovation and you can't even tell there was ever construction dust everywhere. She was punctual, courteous, and her work exceeded our expectations. Great work!",
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
        },
      ],
    };

    // Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${siteUrl}#organization`,
      name: "Lucy's Cleaning",
      legalName: "Lucy's Cleaning LLC",
      url: siteUrl,
      logo: `${siteUrl}/new-logo.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+15513012908',
        contactType: 'Customer Service',
        availableLanguage: ['English', 'Spanish'],
        areaServed: 'US',
      },
      sameAs: [],
    };

    // WebSite Schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      url: siteUrl,
      name: "Lucy's Cleaning",
      description: "Professional home cleaning services in Hudson County, NJ",
      publisher: {
        '@id': `${siteUrl}#organization`,
      },
      inLanguage: ['en', 'es'],
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteUrl}/?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    };

    // Create script tags and append to head
    const scripts = [
      { id: 'local-business-schema', schema: localBusinessSchema },
      { id: 'organization-schema', schema: organizationSchema },
      { id: 'website-schema', schema: websiteSchema },
    ];

    scripts.forEach(({ id, schema }) => {
      // Remove existing script if present
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }

      // Create new script tag
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      scripts.forEach(({ id }) => {
        const script = document.getElementById(id);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
};

export default StructuredData;

