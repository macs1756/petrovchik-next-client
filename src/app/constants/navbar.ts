import { InavbarLink } from "../types"
import { WORK_CATALOG, DWELLING_CATALOG, BUSINESS_CATALOG, BLOG_CATALOG } from '../constants/links'

export const NAVBAR_LINKS: InavbarLink[] = [
  {
    text: 'Робота',
    url: WORK_CATALOG,
  },
  {
    text: 'Житло',
    url: DWELLING_CATALOG,
  },
  {
    text: 'Бізнес',
    url: BUSINESS_CATALOG,
  },
  {
    text: 'Блог',
    url: BLOG_CATALOG,
  },
]