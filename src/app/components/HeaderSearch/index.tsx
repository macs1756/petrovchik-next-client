import * as React from 'react'

export default function HeaderSearch() {

  const [searchValue, setSearchValue] = React.useState<string>('')


  return (
    <div className='border-2 border-solid border-gray-800 rounded-[8px] w-[240px] h-[45px]'>
      <input 
      className='rounded-[8px] w-full h-full pl-[12px] text-[14px] '
      type="text" 
      value={searchValue}
      onChange={(e) => {setSearchValue(e.target.value)}}
      placeholder='Пошук'
       />
    </div>
  )
}