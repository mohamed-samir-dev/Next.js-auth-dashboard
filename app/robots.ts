import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://next-js-auth-dashboard.vercel.app/'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard/',
          '/api/',
          '/auth/verify/',
          '/_next/',
          '/admin/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}