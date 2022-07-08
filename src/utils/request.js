import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use((config) => {
  // 添加icode
  config.headers.icode = 'BD9A5B168A1AE047'
  // 必须返回config
  return config
})

export default service
