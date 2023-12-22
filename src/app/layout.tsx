import type { Metadata } from 'next'
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'


export const metadata: Metadata = {
  title: 'Petrovchik',
  description: 'Petrovchik description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className='content'>
         {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
