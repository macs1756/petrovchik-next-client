import { IpropsSearchPage } from "@/types"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: 'Search',
  description: 'Search',
}

export default function Search({ params }: IpropsSearchPage) {  
    return(
      <div>Search on {params.body}</div>
    )
}