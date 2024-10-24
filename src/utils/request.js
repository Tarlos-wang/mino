import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: '/api', // 使用 import.meta.env 访问环境变量
  timeout: 5000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，例如添加 token
    return config
  },
  error => {
    // 处理请求错误
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response.data
  },
  error => {
    // 处理响应错误
    console.error('响应错误:', error)
    return Promise.reject(error)
  }
)

export default service
