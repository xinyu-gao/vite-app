import { creatRequest } from '@/utils/request'

export function hello(data) {
  return creatRequest({
    url: `/user/hello`,
    method: 'get'
  })
}