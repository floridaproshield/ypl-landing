import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata = {
  title: 'YPL Services LLC | Painting & Home Services in Birmingham, AL',
  description:
    'Professional painting, pressure washing, carpentry, deck staining & general renovation in Birmingham, AL. Licensed & insured. Call (205) 946-7649 for a free quote.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
