// import classnames from 'classnames'
import Icon from '../Icon'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
// import { widthRouter } from 'react-router-dom'

// props 里面解构children
// history 从props里面来
// 1、widthRouter的使用
// props里面能拿到 history match location： 这个组件必须是通过路由配置的 <Router></Router>
// 自己渲染的组件 无法获取到路由的信息

// 2.路由提供了几个和路由相关的hook
const NavBar = ({ children, extra }) => {
  const navigate = useNavigate()
  const back = () => {
    // 点击跳回上一页
    console.log(navigate)
    // navigate('/home')
    navigate(-1)
  }
  return (
    <div className={styles.root}>
      {/* 后退按钮 */}
      <div className="left">
        <Icon type="iconfanhui" onClick={back} />
      </div>
      {/* 居中标题2222 */}
      <div className="title">{children}</div>

      {/* 右侧内容 */}
      <div className="right">{extra}</div>
    </div>
  )
}

// export default widthRouter(NavBar) 使用这个方法直接导出增强版的 组件
export default NavBar
