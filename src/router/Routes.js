
import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Nofind from '../views/nofind/Nofind'
import {menuList} from './Index'
export default function Routes() {
  return (
      <Switch>
        {
          menuList.map((item)=>{
            const r = (item)=>{
              return (
                <Route path={item.key} key={item.key} render={(routeProps=>{
                  return <item.component {...routeProps} />
                })} />
              )
            }
            return item.component?r(item):item.children.map(item => r(item))
          })
        }
        <Redirect from='/' to="/home" exact />
        <Route path="*" component={Nofind} />
        
        {/* <Route path="/home" component={Home} />
        <Route path="/hotel/hotelList" component={HotelList} />
        <Route path="/hotel/HotelType" component={HotelType} />
        <Route path="/hotel/addHotelType" component={AddHotelType} />
        <Route path="/hotel/SafeTxt" component={SafeTxt} />

        <Redirect from='/' to="/home" exact />
        <Route path="*" component={Nofind} /> */}
      </Switch>
  )
}
