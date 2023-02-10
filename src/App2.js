import React,{Component} from 'react';

export default class Array extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  handleAddItem = () => {
    const items = this.state.items;
    const age = Math.floor(Math.random()*(60 - 10 + 1)) + 10;
    this.setState({ items: [...items, 'User '+ age ] });
  };
 
  handleRemoveItem = () => {
    const items = this.state.items;
    if (items.length > 0) {
      const id = Math.floor(Math.random()* items.length);
      this.setState({ items: items.filter((_, ind) => ind !==id)});
    }
  };
  handleUpdateItem=()=>{
    const age= this.state.age;
    this.setState({age :Math.floor(Math.random()*(60 - 10 + 1)) + 10})
  }

  render() {
    const items = this.state.items;
    return (
      <div className="wrapper" 
       style={{
        textAlign:'center'
      }}>
        <div>
          List: {items.length} total items.
        </div>
        <button onClick={this.handleAddItem}> Add</button>
        <button onClick={this.handleRemoveItem}>Remove</button>
        <button onClick={this.handleUpdateItem}>Update</button>
        <ul>
          {items.map((item, id) => <li key={id}>{item}</li>)}
        </ul>
      </div>
    )
  }
}