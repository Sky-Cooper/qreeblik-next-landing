import { MetadataRoute } from 'next'
 import Image from 'next/image';
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.qreeblik.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1, 
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
        url: `${baseUrl}/patient-policy`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
  ]
}

