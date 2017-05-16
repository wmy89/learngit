import React, {
  Component
} from 'react'

class App extends Component{
  constructor(props){
    super(props);
    this.state={list:[{title:"点我重新编辑"}],title:''};
  }
  addHandle(e){
    let list = this.state.list;
    list = list.concat([{title:this.state.title}]);
    this.setState({list:list,title:''});
  }
  changeHandle(e){
    this.setState({title:e.target.value});
  }
  delHandle(index){
    console.log(index)
    let list = this.state.list;
    list.splice(index,1);
    this.setState();
  }
  changeItem(item,e){
    item.title = e.target.value;
    this.setState();
  }
  blurHandle(item){
    item.edit = !item.edit;
    this.setState();
  }
  toEdit(item){
    item.edit=!item.edit;
    console.log(this.refs.txtedit)
    this.setState();
  }
  render(){
    return (
      <div>
        <div>
          <input type="text" value={this.state.title} onKeyDown={(e)=>{e.keyCode==13?this.addHandle(e):undefined}} placeholder="请输入待办事项" onChange={this.changeHandle.bind(this)}/>
          <button onClick={this.addHandle.bind(this)}>添加</button>
        </div>
        <div className="preview">{this.state.title}</div>
        <div className="list">
          {
            this.state.list.map((item,index)=>{
              return (
                  <a key={index}>
                    {item.edit?<input type="text" onKeyDown={(e)=>{e.keyCode==13?this.toEdit(item):undefined}} onBlur={this.blurHandle.bind(this,item)} onChange={this.changeItem.bind(this,item)} value={item.title}/>:<span onClick={this.toEdit.bind(this,item)}>{item.title}</span>}
                    <button onClick={this.delHandle.bind(this,index)}>已完成</button>
                  </a>
                )
            })
          }
        </div>
      </div>
    );
  }
}


export default App
