import request from '@/utils/request'
import { SAVE_ACTINFO } from '../action_types/active'

// 保存活动信息
export const saveActiveInfo = (payload) => {
  // console.log(payload)
  return {
    type: SAVE_ACTINFO,
    payload,
  }
}
// 获取活动信息
// export const activeInfo = () => {
//   return async (dispatch) => {
//     const res = await request.get('/activity/info')
//     dispatch(saveActiveInfo(res.data)) // 把活动信息保存到 上面
//   }
// }
export const activeInfo = (params) => {
  return async (dispatch) => {
    // 发送请求
    const res = await request({
      url: '/activity/info',
      method: 'get',
      params,
    })
    dispatch(saveActiveInfo(res.data))
    console.log(res.data)
  }
}

// 活动列表
// export const prizeList = () => {
//   return async () => {
//     const res = await request({
//       url: '/prizes',
//       method: 'get',
//     })
//     console.log(res)
//   }
// }
//  获取用户信息
export const userInfo = () => {
  return async () => {
    const res = await request({
      url: '/user/info',
      method: 'get',
    })
    console.log(res)
  }
}
