import React,{useEffect} from 'react'
import { Button } from 'antd';
// import http from '../../utils/request'
import * as echarts from 'echarts';

export default function Home(props) {

  const ajax = ()=>{
    //jsonServer 的 使用
    //获取 get
    // http.get('http://localhost:8000/posts').then(res=>{
    //   console.log(res)
    // })
    
    //增加 post
    // http.post('http://localhost:8000/posts',{
    //   title: "ss", 
    //   author: "aa"
    // }).then(res=>{
    //   console.log(res)
    // })

    //改 put 当不设置其他参数的时候会被去掉，所以更多会用patch
    // http.put('http://localhost:8000/posts/1',{
    //   title: "测试数据11"
    // }).then(res=>{
    //   console.log(res)
    // })

    //更新 patch ,不传的默认不修改
    // http.patch('http://localhost:8000/posts/1',{
    //   title: "测试数据22"
    // }).then(res=>{
    //   console.log(res)
    // })

    //删 delete ，删除的时候会把用到该条的相关数据都会删除
    // http.delete('http://localhost:8000/posts/1').then(res=>{
    //   console.log(res)
    // })

    //关联查询 _embed （向下关联）, //关联的表名
    // http.get('http://localhost:8000/posts?_embed=comments').then(res=>{
    //   console.log(res)
    // })

    //关联查询 _expand (向上关联)
    // http.get('http://localhost:8000/comments?_expand=post').then(res=>{
    //   console.log(res)
    // })
  }
  useEffect(() => {
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
      title: {
          text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
  });
  }, [])
  return (
    <div>
       <Button type="primary" onClick={ajax}>按钮</Button>

       <div id="main" style={{height:'300px',width:'500px'}}></div>
    </div>
  )
}
