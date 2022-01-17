import request from '@/utils/request'
import { setTokenInfo } from '@/utils/storage'
// action 是属于 领导管理层  负责发请求
export const sendCode = (mobile) => {
  return async () => {
    // 发送请求
    await request({
      url: `/sms/codes/${mobile}`,
      method: 'get',
    })
  }
}

export const saveToken = (payload) => {
  return {
    type: 'login/token',
    payload,
  }
}
/**
 * 登录功能
 * @param {*} data
 * @returns
 */
export const login = (data) => {
  return async (dispatch) => {
    const res = await request({
      method: 'post',
      url: '/authorizations',
      data,
    })
    // 保存token 到redux中
    dispatch(saveToken(res.data))
    // console.log(res.data)
    // 把token保存到 localStorage
    setTokenInfo(res.data)
  }
}
