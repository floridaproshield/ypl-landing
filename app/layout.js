import './globals.css'

export const metadata = {
  title: 'YPL Services LLC | Painting & Home Services in Birmingham, AL',
  description:
    'Professional painting, pressure washing, carpentry, deck staining & general renovation in Birmingham, AL. Licensed & insured. Call (205) 946-7649 for a free quote.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
