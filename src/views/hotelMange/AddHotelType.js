import React from 'react'
import { Form, Input, Button ,message } from 'antd';
import http from '../../utils/request'
import qs from 'querystring'
export default function AddHotelType(props) {
  const {search=''} = props.location
  const obj = qs.parse(search.slice(1))
  const {id=''} = obj
  // const id = props.location?.query?.id || "" //1
  // const { match: { params = {} } } = props
  // const { id = '' } = params 
  // console.log(id)
  const [form] = Form.useForm();
  // HotelList 用的onFinish 事件，这使用点击事件
  const submit = () =>{
    form
    .validateFields()
    .then(values => {
      const data = form.getFieldsValue();
      add(data)
    })
    .catch(info => {});
  }
  const add = (data)=>{
    http.post('http://localhost:8000/hotelType',data).then(res=>{
      // console.log(res)
      props.history.go(-1)
      message.success('添加成功');
    })
  }
  return (
    <div>
      <Form
          form = {form}
          labelCol={{ span: 2 }}
          wrapperCol={{ span: 10 }}
          initialValues={{sort:'0'}}
        >
        <Form.Item name="typeName" label="分类名称" rules={[{ required: true, message: '分类名称' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="sort" label="排序">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={submit}>
            保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
