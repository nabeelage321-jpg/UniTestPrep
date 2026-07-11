import { MetadataRoute } from "next"
import { buildSitemapUrls } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapUrls().map((url) => ({ url }))
}
