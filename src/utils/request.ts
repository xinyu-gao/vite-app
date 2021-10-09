import axios from 'axios'
import { ElNotification } from 'element-plus'

const baseURL = import.meta.env.VITE_API_BASE

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
  const resData = data && data.data || {}
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
  }else{
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
  'baseURL': import.meta.env.VITE_API_BASE,
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
  data = data && data.data || {}
  // 返回 200 代码，正常返回 data，否则抛出异常
  if (data && data.code === 200) {
    return Promise.resolve(data.data)
  } else if (data.code === 401) {
    return Promise.resolve(data.data)
  }
  return Promise.reject(data.message)
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
