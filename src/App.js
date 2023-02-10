import './App.css';
import React,{Component,useState} from 'react';

const generateUsers = ()=>{
  return [{id:1, name:'john'},
          {id:2, name:'mark'},
          {id:3, name:'bob'},
          {id:4, name:'samanta'},
          {id:5, name:'eli'},
          {id:6, name:'sam'},
          {id:7, name:'nelly'},
          {id:8, name:'karlos'},
          {id:9, name:'aurora'},
          {id:10,name:'dorota'},
  ];
};

export default class App extends Component{
  constructor (props){
    super(props);
    this.state = { users:[],showUserlist: false};
  }
  handleToggle = () =>{
    setTimeout(()=>{
      this.setState({users: generateUsers()});
    },1000);
    this.setState(prevState => ({
      showUserlist: !prevState.showUserlist}));
  }
  handleRemoveItem = () => {
    const users = this.state.users;
    if (users.length > 0) {
      const id = Math.floor(Math.random()* users.length);
      this.setState({ users: users.filter((_, ind) => ind !==id)});
    }
  };
  
  componentDidUpdate(prevState){
    if(prevState.users !== this.state.users){
      document.title = `${this.state.users.length} users left`;
    }
  } 
  render(){
    console.log("render");
    return(
    <div
     style={{
      textAlign:'center'
    }}>
     <button onClick={this.handleToggle}>click</button>
     <button onClick={this.handleRemoveItem}>Remove</button>
     {this.state.showUserlist && this.state.users.length >0 ? (<>{this.state.users.map((item)=>{
     return <h1 key={item.id}>{item.name}</h1>;
     })}</>
     ):(<ChildComponent/>)}
    </div>
    )
};
}

class ChildComponent extends Component{
  constructor(props){
    super(props);
  };
  componentWillUnmount () {
    console.log("unmounting");
  }
 
  render() {
    return (
      <h1>Unmount</h1>
    );
  }
}