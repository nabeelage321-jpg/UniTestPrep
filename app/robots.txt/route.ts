import { NextResponse } from "next/server"

export default function GET() {
  return new NextResponse(
    [
      "User-agent: *",
      "Disallow: /api/",
      "Allow: /",
      "Sitemap: https://clearsit.vercel.app/sitemap.xml",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain",
      },
    },
  )
}
