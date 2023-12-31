import { headerModalElements } from "@/constants/header.modal"
import Image from "next/image"
import Link from "next/link"

export default function HeaderModalForCreatedNewElement() {
  return(
    <div className="h-full">
      <button className="tr bg-yellow h-full py-[14px] px-[30px] text-[16px] rounded-[6px] hover:bg-yellow-hover">Додати оголошення</button>

      <div className="modal__wr active">
        <div className="modal__body">

             <Image
             alt='modal__close'
             src='/modal__close.svg'
             width={24}
             height={24}
             className='absolute top-[16px] right-[16px]'
           />

          <h2 className="text-[40px] mb-[50px] text-center">Додати оголошення</h2>

          <div className="grid gap-[24px] grid-cols-3">
              {
                headerModalElements.map( (e, i) => (
                    <Link 
                     href={e?.link}
                     key={e?.text + i}
                     className='bg-white rounded-[15px] flex justify-center flex-col items-center py-[32px] tr hover:transform hover:translate-y-[-16px]'
                     >

                        <Image
                        width={70}
                        height={70}
                        src={e?.image}
                        alt={e?.text}
                        className='mb-[20px]'
                         />

                        <p className="text-[#1C1C1C] text-[24px] font-bold">{e?.text}</p>

                    </Link>
                ))
              }
          </div>

        </div>
      </div>

    </div>
  )
}
