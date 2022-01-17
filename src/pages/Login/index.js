import React, { useState } from 'react'
import NavBar from '@/components/NavBar'
import styles from './index.module.scss'
import Input from '@/components/Input'
import { useFormik } from 'formik'
import classNames from 'classnames'
import { Toast } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

import * as Yup from 'yup' //把所有的yup都导出来了
import { useDispatch } from 'react-redux'
import { sendCode, login } from '@/store/action/login' //得按需导入这个东西
// class组件里用
// import { widthRouter } from 'react-router-dom'
// const NavBarWithRouter =widthRouter(NavBar)

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [time, setTime] = useState(0)
  const onExtraClick = async () => {
    if (time > 0) return // 当我点击执行定时器的时候 就让他禁用按钮
    // console.log(mobile)
    // 先对手机号进行验证
    if (!/^1[3-9]\d{9}$/.test(mobile)) {
      formik.setTouched({
        mobile: true,
      })
      return
    }
    await dispatch(sendCode(mobile))
    // console.log('成功')
    Toast.success('验证码获取成功', 1)
    // 开启倒计时
    setTime(60)
    let timeId = setInterval(() => {
      setTime((time) => {
        if (time === 1) {
          clearInterval(timeId)
        }
        return time - 1
      }) // 当我们每次都想要获取到最新的状态 需要写成 箭头函数的形式
    }, 1000)

    // Toast.success('登录成功', 1)
    // console.log(1111)
  }
  // console.log('1111', props)

  // const validate = (values) => {
  //   const errors = {}
  //   if (!values.mobile) {
  //     errors.mobile = '手机号不能为空'
  //   }
  //   if (!values.code) {
  //     errors.code = '验证码不能为空'
  //   }
  //   return errors
  // }
  const formik = useFormik({
    initialValues: {
      // 给表单提供初始值
      mobile: '13911111111',
      code: '246810',
    },
    // validate,
    // 当表单提交的时候会触发
    async onSubmit(values) {
      // console.log(values)

      await dispatch(login(values))
      Toast.success('登录成功')
      navigate('/home')
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .required('手机号不能为空')
        .matches(/^1[3-9]\d{9}$/, '手机号格式错误'),
      code: Yup.string()
        .required('验证码不能为空')
        .matches(/^\d{6}$/, '验证码格式错误'),
    }),
  })
  // console.log(formik.isValid)
  // 从formik 解构
  const {
    values: { mobile, code },
    handleChange,
    handleSubmit, // 提交表单
    handleBlur,
    isValid, //是否校验通过
    errors,
    touched,
  } = formik
  // console.log(touched)
  return (
    <div className={styles.root}>
      {/* 标题 */}
      <NavBar>登录</NavBar>
      {/* 内容 */}
      <div className="content">
        <h3>短信登录</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-item">
            <Input
              placeholder="请输入手机号"
              value={mobile}
              name="mobile"
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              maxLength={11}
            />
            {touched.mobile && errors.mobile ? (
              <div className="validate">{errors.mobile}</div>
            ) : null}
            {/* <div className="validate">手机号码验证错误</div> */}
          </div>
          <div className="input-item">
            <Input
              placeholder="请输入验证码"
              value={code}
              autoComplete="off"
              name="code"
              onChange={handleChange}
              onBlur={handleBlur}
              maxLength={6}
            />
            <div className={styles.extra} onClick={onExtraClick}>
              {time === 0 ? '获取验证码' : time + 's后获取'}
            </div>
            {/* {JSON.stringify(touched)} */}
            {touched.code && errors.code ? (
              <div className="validate">{errors.code}</div>
            ) : null}
          </div>
          <button
            type="submit"
            // disabled={!isValid}
            // className={classnames('login-btn', !isValid ? 'disabled' : '')}
            className={classNames('login-btn', { disabled: !isValid })}
            disabled={!isValid}
          >
            登录
          </button>
        </form>
      </div>
    </div>
  )
}
