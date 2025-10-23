import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChabadAI - The Future of Jewish Learning',
  description: 'Experience Torah study like never before with our advanced AI platform. Get personalized insights, instant translations, and deep understanding of Jewish texts and traditions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/three@0.138.0/build/three.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/three@0.138.0/examples/js/controls/OrbitControls.js" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
