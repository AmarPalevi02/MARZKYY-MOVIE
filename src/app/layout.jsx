import { Poppins } from 'next/font/google'
import './globals.css'
import SideNavbar from '../components/SideNavbar'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700", "800", "900"] })

export const metadata = {
  title: 'MARZKYY ANIM',
  description: 'Setraming Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        suppressHydrationWarning={true}
        className={poppins.className}>
        <div className='flex bg-bacground h-[100vh] w-[100vw] relative min-w-[100vw] overflow-x-hidden'>
          <SideNavbar />
          <div className='w-[calc(100vw-240px)] h-[100vh] xs:w-full relative'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
