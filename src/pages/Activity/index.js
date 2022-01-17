import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button, Popup } from 'antd-mobile'
import styles from './index.module.scss'
import 'swiper/css'

const Activity = () => {
  const [visible1, setVisible1] = useState(false)
  const onHandClick = () => {
    setVisible1(true)
  }
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
      <Button color="primary" className={styles.btn}>
        立即领取1元秒杀劵{' '}
      </Button>
      <div className={styles.box}>
        <Swiper
          className={styles.swiper}
          spaceBetween={6}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          centeredSlides
          loop
        >
          <SwiperSlide>
            <h1 onClick={onHandClick}>开</h1>
            <p>领取支付宝1元代金劵</p>
            <p>截止日期XXXX</p>
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
