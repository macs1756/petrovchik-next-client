import * as React from 'react'

export default function HeaderSearch() {

  const [searchValue, setSearchValue] = React.useState<string>('')


  return (
    <div >
      <input 
      type="text" 
      value={searchValue}
      onChange={(e) => {setSearchValue(e.target.value)}}
       />
    </div>
  )
}