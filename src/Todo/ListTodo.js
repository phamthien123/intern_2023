import React from "react";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";


class ListTodo extends React.Component {
  state = {
    ListTodo: [
      { id: "todo1", title: "task1" },
      { id: "todo2", title: "task2" },
      { id: "todo3", title: "task3" },
    ],
    editTodo:{},
    checked:{}
  };

  AddNewTodo = (todo) =>{
    this.setState({
        ListTodo: [
            ...this.state.ListTodo,todo
        ]
    })
    toast.success("Add Success")
  }

  handleDelete = (todo) =>{
    let current = this.state.ListTodo;
    current = current.filter(item => item.id !== todo.id)
    this.setState({
        ListTodo: current
    }) 
    toast.error("Delete Item")
  }

handleEdit = (todo) =>{
    let {editTodo,ListTodo} = this.state;
    let isEmtyObj = Object.keys(editTodo).length === 0;
    //save
    if(isEmtyObj === false && editTodo.id === todo.id){
        //Find index of specific object using findIndex method.    
        let ListTodoCopy = [...ListTodo];
        let  objIndex = ListTodoCopy.findIndex((item => item.id === todo.id));

        //Update object's name property.
        ListTodoCopy[objIndex].title = editTodo.title

        this.setState({
            ListTodo: ListTodoCopy,
            editTodo: {}
        })
        toast.success("Edit Success")
        return;
    }
    else{
        //edit
        this.setState({
            editTodo: todo
        })
    }
   
}

handleEditTodo = (event) =>{
    let EditCopy = {...this.state.editTodo};
    EditCopy.title = event.target.value
    this.setState({
        editTodo : EditCopy
    })
}



  render() {
    let { ListTodo,editTodo } = this.state;
    // let ListTodo = this.state.ListTodo;
    let isEmtyObj = Object.keys(editTodo).length === 0;
    // let isEmtyObjCheck = Object.keys(checked).length === 0;
    return (
      <div className="list-todo-container">
         <AddTodo AddNewTodo={this.AddNewTodo}/>
        <div className="list-todo">
          {ListTodo &&
            ListTodo.length > 0 &&
            ListTodo.map((item, index) => { 
              return (
                <div className="list-child" key={item.id}>
                    {isEmtyObj === true ?
                    <>  
                     <span>{index + 1} - {item.title}</span> 
                     </>  

                  :
                  <>
                  {editTodo.id === item.id ?
                    <span>{index + 1} - <input value={editTodo.title} onChange={(event) => this.handleEditTodo(event)}/></span>
                    :
                    <span>{index + 1} - {item.title}</span>
                  }
                  
                  </>
                  
            }
                  <button onClick={() => this.handleEdit(item)}>{isEmtyObj === false && editTodo.id === item.id ?
                  'Save' : 'Edit'}</button>
                  <button onClick={() => this.handleDelete(item)}>X</button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default ListTodo;
