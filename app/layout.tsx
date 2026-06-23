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
  title: 'Anton Kariskau - Portfolio',
  description: 'Portfolio website of Anton Kariskau - Developer, Designer, Creator',
  keywords: ['portfolio', 'developer', 'designer', 'Anton', 'Kariskau'],
  authors: [{ name: 'Anton Kariskau' }],
  openGraph: {
    title: 'Anton Kariskau - Portfolio',
    description: 'Portfolio website of Anton Kariskau',
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
