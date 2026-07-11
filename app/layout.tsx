import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Clearsit — Free UK admissions test practice (LNAT, TMUA, TARA, ELAT)',
    template: '%s · Clearsit',
  },
  description:
    'Free, realistic practice tests for UK university admissions exams: LNAT, TMUA, TARA and ELAT. Walk into test day calm, prepared, and sure of yourself.',
  generator: 'v0.app',
  keywords: [
    'LNAT practice',
    'TMUA practice',
    'TARA practice',
    'ELAT practice',
    'Oxford admissions test',
    'Cambridge admissions test',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1c2a4a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${inter.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        <Toaster />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
