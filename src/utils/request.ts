import axios from 'axios'
import { ElNotification } from 'element-plus'

interface resData{
  code: number;
  message: string;
  data: object;
}

const baseURL: string = 'import.meta\u200b.env.VITE_API_BASE'

export const creatRequest = axios.create({
  'baseURL': baseURL,
  'timeout': 7000
})

creatRequest.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'application/json'
  }
  config.data = JSON.stringify(config.data)
  return Promise.resolve(config)
}, error => {
  console.log(error)
  ElNotification({
    'title': '错误',
    'message': '请求超时',
    'type': 'error'
  })
  return Promise.reject(error)
})

creatRequest.interceptors.response.use(data => {
  // console.log(data)
  const resData: resData = data && data.data || {}
  if (resData && resData.code === 200) {
    return Promise.resolve(resData.data)
  } else if (resData.code === 401) {
    return Promise.resolve(resData.data)
  }
  return Promise.reject(resData.message)
}, err => {
  console.log(err)
  if (err.response.status === 500) {
    ElNotification({
      'title': '错误',
      'message': '服务器连接失败',
      'type': 'error'
    })
  }
  return Promise.reject(err)
})

export const creatRequestForFile = axios.create({
  // 请求地址
  'baseURL': baseURL,
  // 请求超时时间
  'timeout': 7000,
  'method': 'post'
})

creatRequestForFile.interceptors.request.use(config => {
  // 设置请求头 ，可选
  config.headers = {
    // 请求格式为 json
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    // 设置 Token
    // 'Authorization': getToken()
  }
  return Promise.resolve(config)
}, error => {
  ElNotification({
    'title': '错误',
    'message': '请求超时',
    'type': 'error'
  })
  return Promise.reject(error)
})

creatRequestForFile.interceptors.response.use(data => {
  const resData: resData = data && data.data || {}
  // 返回 200 代码，正常返回 data，否则抛出异常
  if (resData && resData.code === 200) {
    return Promise.resolve(resData.data)
  } else if (resData.code === 401) {
    return Promise.resolve(resData.data)
  }
  return Promise.reject(resData.message)
}, err => {
  if (err.response.status === 500) {
    ElNotification({
      'title': '错误',
      'message': '服务器连接失败',
      'type': 'error'
    })
  }
  return Promise.reject(err)
})
