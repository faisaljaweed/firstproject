import { useState } from "react";

// type todostypes={
//     text:string;
//     id:number
// }


const Todos=()=>{
    const [todo,setTodos]=useState([
        {   
           text:"todo 1",
           id:1,
       },
        {   
           text:"todo 2",
           id:2,
       },
        {   
           text:"todo 3",
           id:3,
       },
       {   
        text:"todo 4",
        id:4,
    },
     {   
        text:"todo 5",
        id:5,
    },
     {   
        text:"todo 6",
        id:6,
    },
       
       ]);
    //    const deleteItem=(itemId:number)=>{
    //     setTodos(todo.filter(itemEl=>{
    //         return itemEl.id!==itemId
    //     }))
    //    }
    const deleteItem=(itemId:number)=>{
        setTodos(todo.filter(itemEL=>{
            return itemEL.id!==itemId;
        }))
    }
    return(
        <ul>
            {todo.map((todoItem)=>{
                return(<li onClick={()=>{deleteItem(todoItem.id)}} key={todoItem.id}>
                    {todoItem.text}
                </li>)
            })}
        </ul>
    );
}
export default Todos;