import { Inter } from 'next/font/google'
import './globals.css'
import SideNavbar from './components/SideNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MARZKYY ANIM',
  description: 'Setraming Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        suppressHydrationWarning={true}
        className={inter.className}>
        <div className='flex bg-bacground h-[100vh] w-[100vw] relative min-w-[100vw] overflow-x-hidden'>
          <SideNavbar />
          <div className='w-[calc(100vw-240px)]'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
