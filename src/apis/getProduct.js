import { apiLink } from './api'
import { http } from './http'

export const getProduct = (id) => {
  console.log('api')
  return http.get(`${apiLink}/danhSachSanPham?id=${id}`)
}
