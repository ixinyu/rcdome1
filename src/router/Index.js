import {
  UserOutlined
} from '@ant-design/icons';
import Home from '../views/home/Home'
import HotelList from '../views/hotelMange/HotelList'
import HotelType from '../views/hotelMange/HotelType'
import SafeTxt from '../views/hotelMange/SafeTxt'
import AddHotelType from '../views/hotelMange/AddHotelType';
import RoleList from '../views/permissRoles/RoleList';
export const menuList = [
  {
    key:'/home',
    title:'首页',
    icon:<UserOutlined />,
    component:Home,
    pagePermission:1
  },
  {
    key:'/hotel',
    title:'酒店管理',
    icon:<UserOutlined />,
    pagePermission:1,
    children:[
      {
        key:'/hotel/hotelList',
        title:'酒店列表',
        icon:<UserOutlined />,
        component:HotelList,
        pagePermission:1
      },
      {
        key:'/hotel/HotelType',
        title:'酒店分类',
        icon:<UserOutlined />,
        component:HotelType,
        pagePermission:1
      },
      {
        key:'/hotel/addHotelType',
        title:'添加酒店分类',
        icon:<UserOutlined />,
        component:AddHotelType,
      },
      {
        key:'/hotel/SafeTxt',
        title:'使用说明',
        icon:<UserOutlined />,
        component:SafeTxt,
        pagePermission:1
      }
    ]
  },
  {
    key:'/roles',
    title:'权限管理',
    icon:<UserOutlined />,
    pagePermission:1,
    children:[
      {
        key:'/roles/permissRoles',
        title:'角色权限',
        icon:<UserOutlined />,
        component:RoleList,
        pagePermission:1
      }
    ]
  },
]