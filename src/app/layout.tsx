import './styles/globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MovieLibrary',
  description: 'MovieLibrary offers a vast and constantly updated database of movies and TV series, covering a wide range of genres, languages, release years, and more. Users can search for specific titles, actors, directors, genres, or keywords to quickly find relevant content.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
      <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  )
}