import { IpropsSearchPage } from "@/types"


export default function Search({ params }: IpropsSearchPage) {  
    return(
      <div>Search on {params.body}</div>
    )
}