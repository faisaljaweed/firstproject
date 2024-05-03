import { useEffect, useState } from "react";
type Post={
    id:number,
    title:string,
    userId:number,
    body:string,
}
const AutoComponents=()=>{

    const[post,setPost]=useState<Post[]>([]);
    const getPost=async()=>{
        const res=await fetch('https://jsonplaceholder.typicode.com/posts');
        const josnRes=await res.json();
        setPost(josnRes);
        console.log(josnRes);
    }
    useEffect(()=>{
        getPost();
    },[])

    const deleteItem=(itemId:number)=>{
        setPost(post.filter(itemEl=>itemEl.id!==itemId));
    }
return(
    <div>
        {post.map(item=>{
            return(
                <div key={item.id}>
                    <h2>{item.id}</h2>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <button onClick={()=>deleteItem(item.id)} >Show me</button>
                </div>
            );
        })}
    </div>
);
}
export default AutoComponents;