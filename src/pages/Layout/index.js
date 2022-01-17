import React from 'react'
import styles from './index.module.scss'
import Icon from '@/components/Icon'
import classNames from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'

const tabBar = [
  { title: '首页', icon: 'iconbtn_home', path: '/home' },
  { title: '回答', icon: 'conbtn_qa', path: '/home/qa' },
  { title: '视频', icon: 'iconbtn_video', path: '/home/video' },
  { title: '我的', icon: 'iconbtn_mine', path: '/home/profile' },
]
export default function Home() {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)

  return (
    <div className={styles.root}>
      <div className="tabbar">
        {tabBar.map((item) => (
          <div
            className={classNames(
              'tabbar-item',
              location.pathname === item.path ? 'tabbar-tiem-active' : ''
            )}
            key={item.title}
            onClick={() => navigate(item.path)}
          >
            <Icon type={item.icon} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
