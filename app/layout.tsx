import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Ibra Na Kibra - Portfolio',
  description: 'Portfolio website of Ibra Na Kibra - Developer, Designer, Creator',
  keywords: ['portfolio', 'developer', 'designer', 'Anton', 'Kariskau'],
  authors: [{ name: 'Ibra Na Kibra' }],
  openGraph: {
    title: 'Ibra Na Kibra - Portfolio',
    description: 'Portfolio website of Ibra Na Kibra',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>{children}</body>
    </html>
  )
}
