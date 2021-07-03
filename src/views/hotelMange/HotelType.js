import React,{useState,useEffect} from 'react'
import {Button,Table} from 'antd'
import http from '../../utils/request'
export default function HotelType(props) {
  const addType = ()=>{
    props.history.push('/hotel/addHotelType')
  }
  const [dataSource, setdataSource] = useState([])
  useEffect(() => {
    http.get('http://localhost:8000/hotelType').then(res=>{
      setdataSource(res)
    })
  }, [])
  const edit = (item)=>{
    // props.history.push(`/hotel/addHotelType/${item.id}`) //params 传递 路由中需加 :id
    props.history.push(`/hotel/addHotelType?id=${item.id}&typeName='分类2'`)
  }
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '名称',
      dataIndex: 'typeName',
    },
    {
      title: '排序',
      dataIndex: 'sort',
    },
    {
      title: '操作',
      width:'200px',
      render:(item)=>{
        return (
          <div>
          <Button onClick={()=>edit(item)}>编辑</Button>
        </div>
        )
      }
    }
  ]
  return (
    <div>
      <Button type="primary" onClick={addType}>添加分类</Button>

      <Table style={{marginTop:'20px'}} dataSource={dataSource} columns={columns} rowKey="id" pagination={{
        pageSize:5
      }} />
    </div>
  )
}
