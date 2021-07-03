import React from 'react'
import { withRouter } from 'react-router';
import { Layout, Menu } from 'antd';
import {menuList} from '../router/Index'
// import http from '../utils/request' 
const { SubMenu } = Menu;
const { Sider} = Layout;
function SideMenu(props) {
  //从后台获取侧边栏数据,如果后台数据没有icon，我们可以在页面使用对象的方式获取
  // const [menu, setMenu] = useState([])
  // useEffect(() => {
  //   http.get('http://localhost:8000/rights?_embed=children').then(res=>{
  //     console.log(res)
  //     setMenu(res)
  //   })
  // }, [])

  const checkPagePermission = (item)=>{ //是否在侧边栏展示
    return item.pagePermission ===1
  }
  const renderMenu = (menuList)=>{
    return (
      menuList.map(item=>{
        if(item.children&&item.children.length>0&&checkPagePermission(item)){
          return <SubMenu key={item.key} icon={item.icon} title={item.title}>
            { renderMenu(item.children) }
          </SubMenu>
        }
        return checkPagePermission(item)&&<Menu.Item key={item.key} icon={item.icon} onClick={()=>{
          props.history.push(item.key)
        }}>{item.title}</Menu.Item>

      })
    )
  }
  const selectKeys = [props.location.pathname]
  const openKeys = ['/'+props.location.pathname.split('/')[1]]
  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
        <div className="logo">管理系统</div>
        <div style={{flex:1,overflowY:'auto'}}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={selectKeys} defaultOpenKeys={openKeys}>
            {/* 渲染的数据数组 */}
            { renderMenu(menuList) } 
          </Menu>
        </div>
      </div>
    </Sider>
  )
}

export default withRouter(SideMenu)
