// import React, { Component } from 'react'
// import E from "wangeditor"
// export default class Editer extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       value:'',
//       editor:null
//     }
//   }
//   componentDidMount(){
//     var _this = this
//     if(!this.editor){
//       this.editor = new E('#editor')
//       this.editor.create()
//     }
//     this.editor.txt.html(_this.props.value)
//     this.editor.config.onchange = function(newHtml) {
//       // console.log(newHtml) // 获取最新的 html 内容
//       _this.props.toParent(newHtml) //给父组件传递数据
//     } 
//   }
//   // UNSAFE_componentWillReceiveProps(props) {
//   //   // console.log(props)
//   //   this.editor.txt.html(props.value)
//   // }
//   render() {
//     return (
//       <div>
//         <div id="editor"></div>
//       </div>
//     )
//   }
// }

import React,{useEffect,useState} from 'react'

import E from "wangeditor"


export default function Editer(props) {
  let [editor, setEditor] = useState(null)
  useEffect(() => {
    if(!editor){
      editor = new E('#editor')
      setEditor(editor)
      editor.create()
    }
    editor.txt.html(props.value)
    editor.config.onchange = function(newHtml) {
      // console.log(newHtml) // 获取最新的 html 内容
      props.toParent(newHtml) //给父组件传递数据
    } 
    
    // console.log(props.value)
  }, [props.value])
  return (
    <div>
      <div id="editor"></div>
    </div>
  )
}
