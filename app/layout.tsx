import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Talk Timer',
  description: 'A simple timer for lightning talks',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
