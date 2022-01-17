import styles from './index.module.scss'
import React from 'react'
import classNames from 'classnames'

export default function Input({ extra, className, ...rest }) {
  // const onExtraClick = () => {
  //   console.log('wwww')
  // }
  return (
    <div className={styles.root}>
      <input {...rest} className={classNames('input', className)} />
      {/* <div className="extra" onClick={onExtraClick}> */}
      {/* {extra} */}
      {/* </div> */}
      {/* {extra && (
        <div className="extra" noClick={onExtraClick}>
          {extra}
        </div>
      )} */}
    </div>
  )
}
