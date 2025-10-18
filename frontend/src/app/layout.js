import './globals.css'

export const metadata = {
  title: 'Docker Tutorial App',
  description: 'Simple app to learn Docker containerization',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
