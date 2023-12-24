import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import './globals.css'


export const metadata: Metadata = {
  title: 'Petrovchik - Дошка Оголошень для Українців у Великобританії та Ірландії.',
  description: 'Ми найбільша дошка оголошень в Англії, Великобританії та Ірландії для українців з усього світу: Робота, Житло та Бізнес, Залишайте Оголошення вже сьогодні!',
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
