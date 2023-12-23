import { useRouter } from "next/navigation"

export default function Search({ params }: { params: { body: string } } ) {  
    return(
      <div>Search on {params.body}</div>
    )
}