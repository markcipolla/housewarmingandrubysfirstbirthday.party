import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "House Warming and Ruby's First Birthday Party",
  description: "We've got a one year old and a new house! Come celebrate with us!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="robots" content="noindex" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
