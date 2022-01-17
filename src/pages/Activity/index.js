import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button, Popup } from 'antd-mobile'
import styles from './index.module.scss'
import 'swiper/css'
import { useDispatch } from 'react-redux'
import { activeInfo, prizeList, userInfo } from '@/store/action/active'
import { useSelector } from 'react-redux'

const Activity = () => {
  const dispatch = useDispatch()
  const [visible1, setVisible1] = useState(false)
  const onHandClick = () => {
    setVisible1(true)
  }
  useEffect(() => {
    dispatch(activeInfo())
    // dispatch(prizeList())
    dispatch(userInfo())
  }, [dispatch])
  const actInfo = useSelector((state) => state.active.info)
  // console.log(actInfo)
  return (
    <>
      <Popup
        visible={visible1}
        onMaskClick={() => {
          setVisible1(false)
        }}
        bodyStyle={{ minHeight: '40vh' }}
      >
        Hello
      </Popup>
      <div className={styles.box}>
        <Button color="primary" className={styles.btn}>
          立即领取1元秒杀劵
        </Button>

        <Swiper
          className={styles.swiper}
          spaceBetween={1}
          slidesPerView={1.87}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          // loop
        >
          <SwiperSlide>
            <h1 onClick={onHandClick}>开</h1>
            <p>领取支付宝1元代金劵</p>
            <p>截止日期{actInfo.endTime}</p>
          </SwiperSlide>
          <SwiperSlide>
            <h1 onClick={onHandClick}>开</h1>
            <p>领取支付宝1元代金劵</p>
            <p>截止日期XXXX</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Activity
