import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './Login.module.css'
import Logo from '../../assets/images/logo.png'
import http from '../../utils/request'
export default function Login(props) {
  const [form] = Form.useForm();
  const onFinish = ()=>{
    localStorage.setItem('token','12345')
    props.history.push('/home')
  }
  const reset = ()=>{
    form.setFieldsValue({
      username:'',
      password:'',
      yzm:''
    })
  }
  return (
    <div className={styles.login}>
      <Form
        form={form}
        name="login-form"
        className={styles.loginForm}
        onFinish={onFinish}
      > 
        <Form.Item>
          <img className={styles.logo} src={Logo} alt=""/>
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: '用户名' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '密码' }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item
          name="yzm"
          rules={[{ required: true, message: '验证码' }]}
          className='flex'
        > 
          <div className='flex'>
            <Input placeholder="验证码" />
            <img className={styles.codeImg} src='https://img0.baidu.com/it/u=348404915,2991827248&fm=26&fmt=auto&gp=0.jpg' alt=""/>
          </div>
        </Form.Item>
        <Form.Item>
          <Button type="primary" danger onClick={reset}>
              重置
          </Button>
          <Button className={styles.loginbtn} type="primary" htmlType="submit">
              登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
