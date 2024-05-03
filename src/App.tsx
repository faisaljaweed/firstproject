
import { useState } from 'react'
import './App.css'
import AutoCounter from './AutoCounter'
// import AutoComponent from './AutoComponents'
// import WelcomeMessage from './WelcomeMessage'
// import Todos from './todos'

function App() {

const [show ,setShow]=useState(true);
  return (
    <>
      <div>
       {show&& <AutoCounter/>}
       <button onClick={()=>{
        setShow(e=>!e);
       }}>Show Toggle</button>
      {/* <h1 className="text-3xl font-bold underline">
      Hello world! 
    </h1>
    <p>Muhammad Faisal Jawed x</p> */}
    {/* <WelcomeMessage isLoggedIn={true} user={{name:"Muhammad Faisal Jawed",type:"moderator"}}/> */}
     {/* <Todos/> */}
     {/* <AutoComponent/> */}
      </div>
    </>
  )
}

export default App
