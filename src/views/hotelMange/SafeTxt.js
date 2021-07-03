import React,{useEffect,useState} from 'react'
import { Button } from 'antd';
import Editer from '../../components/Editer/Editer'
import http from '../../utils/request'
export default function SaveTxt() {
  const [txt, setTxt] = useState('')
  const [curtxt,setcurtxt] = useState('')
  const [count,setCount] = useState(0)
  useEffect(() => {
    getDetail()
  }, [])
  const getDetail = async()=>{
    var res = await http.get('http://localhost:8000/safe')
    setTxt(res.text)
  }
  const save = ()=>{
    http.patch('http://localhost:8000/safe',{
      text: curtxt
    }).then(res=>{
      // console.log(res)
    })
  } 
  const getData = (data)=>{
    // console.log(data)
    setcurtxt(data)
  }
  return (
    <div>
      <Editer style={{height:'400px'}} toParent={getData} value={txt}/>

      <Button type="primary" onClick={save}>保存</Button>
    </div>
  )
}
