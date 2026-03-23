import type { MetadataRoute } from 'next'
import { getAllPostSlugs, getAllCaseSlugs } from '@/lib/notion'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://worthit-ai.com'

export const revalidate = 3600 // regenerate sitemap every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/cases`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/diagnose`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Dynamic blog post pages
  let postPages: MetadataRoute.Sitemap = []
  try {
    const slugs = await getAllPostSlugs()
    postPages = slugs.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  } catch {
    // Silently skip if Notion is unavailable
  }

  // Dynamic case pages
  let casePages: MetadataRoute.Sitemap = []
  try {
    const slugs = await getAllCaseSlugs()
    casePages = slugs.map((slug) => ({
      url: `${BASE_URL}/cases/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  } catch {
    // Silently skip if Notion is unavailable
  }

  return [...staticPages, ...postPages, ...casePages]
}
