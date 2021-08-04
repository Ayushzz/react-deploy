import React from 'react'
import {TodoItem} from './TodoItem.js';

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="text-center my-3">Todos List</h3>
            {props.todos.length === 0? "No Todod to display":
             props.todos.map((todo)=>{
              return (
                
               <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
              
              
               )
             })
             }
        </div>
    )
}
//<TodoItem todo={props.todos[0]}/>