import React from 'react'
// import {Switch,Route,Redirect} from 'react-router-dom'
import { withRouter } from 'react-router';
import { Layout } from 'antd';
import './AppMain.css'
// import Home from '../views/home/Home'
// import HotelList from '../views/hotelMange/HotelList'
// import HotelType from '../views/hotelMange/HotelType'
// import SafeTxt from '../views/hotelMange/SafeTxt'
// import AddHotelType from '../views/hotelMange/AddHotelType';
// import Nofind from '../views/nofind/Nofind'
import SideMenu from './SideMenu'
import TopHeader from './TopHeader'
import Routes from '../router/Routes'
const { Content } = Layout;
function AppMain(props) {
  return (
    <Layout>
      <SideMenu></SideMenu>
      <Layout className="site-layout">
        <TopHeader></TopHeader>
        <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              overflowY:'auto'
            }}
          >
            
            {/* <Switch>
              <Route path="/home" component={Home} />
              <Route path="/hotel/hotelList" component={HotelList} />
              <Route path="/hotel/HotelType" component={HotelType} />
              <Route path="/hotel/addHotelType" component={AddHotelType} />
              <Route path="/hotel/SafeTxt" component={SafeTxt} />

              <Redirect from='/' to="/home" exact />
              <Route path="*" component={Nofind} />
            </Switch> */}
            {/* 将上一段代码用遍历方式实现 */}
            <Routes />
          </Content>
      </Layout>
    </Layout>
  )
}

export default withRouter(AppMain)