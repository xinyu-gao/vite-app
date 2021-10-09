import { creatRequest } from '@/utils/request'

export function hello() {
  return creatRequest({
    'url': '/user/hello',
    'method': 'get'
  })
}
