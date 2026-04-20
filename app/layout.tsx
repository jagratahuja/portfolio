import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTopOnLoad } from '@/components/scroll-to-top-on-load'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Jagrat Ahuja | Developer Portfolio',
  description: 'Student developer focused on productivity systems and educational tools. Building practical software solutions in education and productivity.',
  keywords: ['developer', 'portfolio', 'student', 'python', 'education', 'productivity'],
  authors: [{ name: 'Jagrat Ahuja' }],
}

export const viewport: Viewport = {
  themeColor: '#0a0f1c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body
        className="font-sans antialiased bg-[#0a0f1c] text-[#f0f4ff] overflow-x-hidden"
        suppressHydrationWarning
      >
        <ScrollToTopOnLoad />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
