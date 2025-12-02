const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lucys-cleaning.com';

export default function sitemap() {
  const baseUrl = siteUrl;
  const currentDate = new Date().toISOString();

  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          en: baseUrl,
          es: baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: {
          en: `${baseUrl}/privacy-policy`,
          es: `${baseUrl}/privacy-policy`,
        },
      },
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: {
          en: `${baseUrl}/terms-conditions`,
          es: `${baseUrl}/terms-conditions`,
        },
      },
    },
  ];

  return routes;
}

