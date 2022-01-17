import ReactDOM from 'react-dom'
import App from './App'
// 导入通用样式
// import './assets/styles/index.scss'
// import '@scss/index.scss'
// import '@scss/index.scss'
import './assets/styles/index.scss'
import store from '@/store'
import { Provider } from 'react-redux'
import 'antd-mobile/es/global'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
)
