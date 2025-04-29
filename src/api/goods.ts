import Request from '@/utils/request'

const http = Request.getInstance()

export interface GoodType {
  id: string
  name: string
  price: {
    original: number
    currency: string
  }
  thumbnail: string
}
export function getGoodsList() {
  const url = '/products?delay=1'
  return http.get<GoodType[]>(url)
}
