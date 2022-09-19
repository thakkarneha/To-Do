import React,{useState} from 'react'

import ToDoList from './component/ToDoList'
 import ShowToDo from './component/ShowToDo'

function App() {
  const[getValue,setGetValue]=useState("")
  const[showToDo,setShowToDo]=useState([])
  return (
    <>
<ToDoList setGetValue={setGetValue} showToDo={showToDo} setShowToDo={setShowToDo}/>
<ShowToDo showToDo={showToDo} setShowToDo={setShowToDo}/>
    </>
  );
}

export default App;
