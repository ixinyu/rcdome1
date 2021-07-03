import React , { useEffect, useState }from 'react'
import { Modal , Button , Table ,Tag , Form , Input} from 'antd';
import http from '../../utils/request'
export default function HotelList(props) {
  const [dataSource, setDataSource] = useState([])
  const [isModalVisible, setisModalVisible] = useState(false)
  const [id, setId] = useState('')
  const [form] = Form.useForm()
  useEffect(()=>{
    http.get('http://localhost:8000/hotelList').then(res=>{
      setDataSource(res)
    })
  },[])
  const addHotel = ()=>{
    setisModalVisible(true)
    setId('')
  }
  const edit = (item)=>{
    setisModalVisible(true)
    form.setFieldsValue(item)
    setId(item.id)
  }
  const del = (item)=>{
    http.delete('http://localhost:8000/hotelList/'+item.id).then(res=>{
      console.log(res)
    })
  }
  const handleCancel = ()=>{
    setisModalVisible(false)
  }
  const onFinish = (values)=>{
    if(!id){ //添加
      http.post('http://localhost:8000/hotelList',values).then(res=>{
        console.log(res)
        setisModalVisible(false)
      })
    }else{ //编辑
      http.patch('http://localhost:8000/hotelList/'+id,values).then(res=>{
        console.log(res)
      })
    }
  }
  const columns = [
    {
      title: 'ID', //列标题
      dataIndex: 'id' //每列展示的字段
    },
    {
      title: '酒店名称',
      dataIndex: 'hotel_name'
    },
    {
      title: '联系人',
      dataIndex: 'uname'
    },
    {
      title: '手机号',
      dataIndex: 'hotel_phones',
      render:(hotel_phones)=>{
        return <Tag color="orange">{hotel_phones}</Tag>
      }
    },
    {
      title: '操作',
      width:'200px',
      render: (item) => ( //自定义样式
        <div size="middle">
          <Button onClick={()=>edit(item)}>编辑</Button>
          <Button style={{marginLeft:'10px'}} danger onClick={()=>{del(item)}}>删除</Button>
        </div>
      ),
    },
  ];
  
  return (
    <div>
      <Button type="primary" onClick={addHotel}>添加酒店</Button>
      <Modal title="添加酒店" visible={isModalVisible} footer={null} onCancel={handleCancel}>
        <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
          >
          <Form.Item
            label="酒店名称"
            name="hotel_name"
            rules={[{ required: true, message: '酒店名称' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="联系人"
            name="uname"
            rules={[{ required: true, message: '联系人' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="手机号"
            name="hotel_phones"
            rules={[{ required: true, message: '手机号' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Table style={{marginTop:'20px'}} dataSource={dataSource} columns={columns} rowKey="id" pagination={{
        pageSize:5
      }} />
    </div>
  )
}
