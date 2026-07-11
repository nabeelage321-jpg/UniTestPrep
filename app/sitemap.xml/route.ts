import { buildSitemapUrls, buildSitemapXml } from "@/lib/seo"

export default async function GET() {
  const urls = buildSitemapUrls()
  const xml = buildSitemapXml(urls)

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
