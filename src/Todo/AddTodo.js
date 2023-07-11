import React from "react";
import { toast } from "react-toastify";
class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleOnchange = (event) =>{
        this.setState({
            title: event.target.value
        })
    }
    handleAdd = () =>{
        if(!this.state.title){
            toast.error("Not Error")
            return;
        }
       let todo = {
        id: Math.floor(Math.random() * 10000),
        title: this.state.title 
       }
       this.props.AddNewTodo(todo);
       this.setState({
        title:''
       })
    }
  render() {
    let {title} = this.state
    return (
      <div className="add-todo">
        <input type="text" value={title} onChange={(event) => this.handleOnchange(event)}/>
        <button type="button" onClick={() => this.handleAdd()}>add</button>
      </div>
    );
  }
}
export default AddTodo;
