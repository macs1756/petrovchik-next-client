import { IheaderElement } from "@/types";
import { CREATE_BUSINESS, CREATE_DWELLING, CREATE_WORK } from "./links";


export const headerModalElements: IheaderElement[] = [
    {
      image: '/header__modal-work.svg',
      text: 'Робота',
      link: CREATE_WORK
    },
    {
      image: '/header__modal-dwelling.svg',
      text: 'Житло',
      link: CREATE_DWELLING
    },
    {
      image: '/header__modal-business.svg',
      text: 'Бізнес',
      link: CREATE_BUSINESS
    },
]