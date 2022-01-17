import { SAVE_ACTINFO } from '../action_types/active'
const initValue = {
  info: {},
}
// 处理活动信息的 reducer
export default function reducer(state = initValue, action) {
  const { type, payload } = action
  // console.log('action', action)
  if (type === SAVE_ACTINFO) {
    return {
      ...state,
      info: payload,
    }
  }
  return state
}
