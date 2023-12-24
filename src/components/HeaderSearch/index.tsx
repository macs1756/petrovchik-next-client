import Link from 'next/link'
import * as React from 'react'
import { SEARCH } from '@/constants/links'
import Image from 'next/image'

export default function HeaderSearch() {

  const [searchValue, setSearchValue] = React.useState<string>('')


  return (
    <div className='border-2 border-solid border-gray-800 rounded-[8px] w-[240px] h-[45px] relative ' >
      <input 
      className='rounded-[8px] w-full h-full pl-[12px] text-[14px] pr-[40px]'
      type="text" 
      value={searchValue}
      onChange={(e) => {setSearchValue(e.target.value)}}
      placeholder='Пошук'
       />

       <Link
        className='absolute top-[calc(50%-10px)] right-[10px] z-10 hover:transform hover:-rotate-12 tr'
        href={ SEARCH + searchValue } >
          <Image 
          width={20}
          height={20}
          src='/header__search.svg'
          alt='header logo'
       />
       </Link>

    </div>
  )
}