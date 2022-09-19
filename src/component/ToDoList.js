
import React,{useState} from 'react'

function ToDoList({setGetValue,showToDo,setShowToDo}) {
  const [todo,setTODO]= useState("")

 
  const checkValue= (event)=>{
    setTODO(event.target.value)
  }
 const addTodo=(event)=>{
  event.preventDefault();
  setGetValue(todo)
  setShowToDo([...showToDo,{
    text:todo


  }])
  setTODO("")
 }
    return (
     
        <>
        <h1 className="text-center">To-Do List</h1>
        <div className="bg-dark text-white">
    <div className="card-body"> 
  
<div className="input-group mb-3">
  <input type="text" className="form-control"  placeholder="Add TO-Do"  aria-label="Recipient's username"  value={todo} onChange={checkValue} aria-describedby="basic-addon2"/>
  
  <div className="input-group-append">
    <button className="btn btn-success" type="button" onClick={addTodo}>ADD</button>
  </div>
</div>
        </div>
        </div>
</>
    )
}

export default ToDoList