'use client'
import Image from "next/image"
import Link from "next/link"
import { HOME_PAGE } from '@/constants/links'
import { NAVBAR_LINKS } from '@/constants/navbar'
import { usePathname } from 'next/navigation'



export default function Header (){

  const path =  usePathname()
   
  return(
    <header>
      <div className="content flex items-center justify-between">
          <div className="flex gap-[50px] items-center">
          <Link href={HOME_PAGE} >
          <Image
          alt="header logo"
          src='/header__logo.webp'
          width={130}
          height={43}
           />
          </Link>

          <ul className="flex items-center gap-[36px] pt-[6px] " >
            
            {
              NAVBAR_LINKS.map((e, i)=>(
                <li 
                className={e?.url.includes(path) ? 'font-bold' : ''}
                key={e?.text + i}><Link 
                href={e?.url} >{e?.text}</Link></li>
              ))
            }
          </ul>

          </div>
      </div>  
    </header>
  )
}