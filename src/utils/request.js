import { Toast } from 'antd-mobile'
import axios from 'axios'
import { getTokenInfo } from './storage'

const instance = axios.create({
  timeout: 5000,
  baseURL: 'http://geek.itheima.net/v1_0',
})
// 可以去axois文档上找
// 配置请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 成功了对config做点什么
    // 对config做点什么
    // 获取token ---> 通用配置token
    const token = getTokenInfo().token
    if (token) {
      config.headers.Authorization = 'Bearer' + token
    }
    return config
  },
  (error) => {
    // 对错误做点什么
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应做点什么
    return response.data
  },
  (err) => {
    // 在这里统一把 错误信息处理了
    if (err.response) {
      Toast.info(err.response.data.message)
    } else {
      Toast.info('网络繁忙，请稍后重试')
    }
    return Promise.reject(err)
  }
)
export default instance
