import React,{useState} from 'react'
import db from './firebase'
function Todo({todo}) {
     
// const[isCompleted,setIsCompleted]=useState(false)
// const handleDoneClick=()=>{
    
//   setIsCompleted(
//       todo[todo.index].isCompleted =true
//   );

    return (
        <div>
             <li style={{ textDecoration:todo.isCompleted ? 'line-through':''}}>{todo.todo}</li>
   <button onClick={(e)=>db.collection('todos').doc(todo.id).delete()}>delete me</button>
   <button>done</button>
        </div>
    )
}

export default Todo
