import login from './login'
import active from './active'
const { combineReducers } = require('redux')

const reducer = combineReducers({
  login,
  active,
})
export default reducer
