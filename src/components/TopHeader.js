import React, { useState } from 'react'
import { Layout , Dropdown , Menu,Avatar  } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined 
} from '@ant-design/icons';
const { Header } = Layout;
export default function TopHeader() {
  const [collapsed, setecollapsed] = useState(false)
  const changecollapsed =()=>{
    setecollapsed(!collapsed)
  }
  const menu = (
    <Menu>
      <Menu.Item>管理员</Menu.Item>
      <Menu.Item>退出</Menu.Item>
    </Menu>
  );
  return (
    <Header className="site-layout-background" style={{ padding: '0 16px' }}>
      {
        collapsed?
        <MenuUnfoldOutlined onClick={changecollapsed} />:
        <MenuFoldOutlined onClick={changecollapsed} />
      }
      <div style={{float:'right'}}>
        <span>欢迎admin回来</span>
        <Dropdown  overlay={menu}>
          <Avatar size={40} icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  )
}
