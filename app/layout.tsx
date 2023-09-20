import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import Image from 'next/image'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Liste de pays',
  description: 'Liste de pays ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={nunitoSans.className}>
        <main className='bg-gray-100 min-h-screen'>
          <nav className='w-full bg-white h-16 flex items-center p-10'>
            <section className='container flex items-center gap-3'>
              <Image 
                src="/logo.svg"
                width={48}
                height={48}
                alt='logo'
                />
              <h1 className='font-bold text-2xl'>Liste de pays</h1>
            </section>
          </nav>
          {children}
        </main>
        </body>
    </html>
  )
}
