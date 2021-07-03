import React , {useState,useEffect} from 'react'
import { Modal , Button ,Tree , Table , Form , Input} from 'antd';
import http from '../../utils/request'
export default function RoleList() {
  const [dataSource, setdataSource] = useState([])
  const [visible, setvisible] = useState(false)
  const [id,setId] = useState('')
  useEffect(()=>{
    http.get('http://localhost:8000/roleList').then(res=>{
      setdataSource(res)
    })
  },[])
  const setRole = (item)=>{
    setId(item.id)
    setvisible(true)
    setCheckedKeys(item.rightsList)
  }
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '角色名称',
      dataIndex: 'roleName',
    },
    {
      title: '操作',
      width:'200px',
      render:(item)=>{
        return (
          <div size="middle">
          <Button onClick={()=>{setRole(item)}}>设置权限</Button>
          <Button style={{marginLeft:'10px'}} danger>删除</Button>
        </div>
        )
      }
    },
  ]
  const [treeData, settreeData] = useState([])
  useEffect(() => {
      http.get('http://localhost:8000/rights?_embed=children').then(res=>{
        // console.log(res)
        settreeData(res)
      })
    }, [])
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = (expandedKeysValue) => {
    // console.log('onExpand', expandedKeysValue);
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue) => {
    // console.log('onCheck', checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };

  const handleOk = () => {
    http.patch('http://localhost:8000/roleList/'+id,{
      rightsList: checkedKeys
    }).then(res=>{
      console.log(res)
    })
  };
  return (
    <div>
      <Modal
        visible={visible}
        title="设置权限"
        okText="保存"
        cancelText="取消"
        onCancel={()=>{setvisible(false)}}
        onOk={handleOk}
      >
        <Tree
          checkable
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          onCheck={onCheck}
          checkedKeys={checkedKeys}
          treeData={treeData}
        />
        
      </Modal>

      <Table style={{marginTop:'20px'}} dataSource={dataSource} columns={columns} rowKey="id" pagination={{
        pageSize:5
      }} />
    </div>
  )
}
