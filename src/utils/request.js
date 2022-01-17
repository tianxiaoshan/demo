import { Toast } from 'antd-mobile'
import axios from 'axios'
import { getTokenInfo } from './storage'

const instance = axios.create({
  timeout: 8000,
  baseURL:
    'https://www.fastmock.site/mock/ac9d664fc26b91d4b62fe215c19f93b3/study',
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
