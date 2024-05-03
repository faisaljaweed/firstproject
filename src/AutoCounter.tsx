import { useEffect, useState } from "react";

const AutoCounter=()=>{
    const [counter,setCounter]=useState(10);
    const Increament=()=>{
       const timer =setInterval(()=>{
            setCounter((counterval)=>{
                return counterval +1;
            }
        ),
        console.log("update")
        },1000);
        return timer;
        // setCounter(counter+1)
    }
    const Decrement=()=>{
        setCounter(counter-1)
    }
    const Reset=()=>{
        setCounter(0);
    }
useEffect(()=>{
 const timer=   Increament();
 return ()=>{
    clearInterval(timer);
 }
},[])
    return(
        <div>
            <h2>Counter Application</h2>
            <h1>{counter}</h1>
            <button onClick={Increament}>Increament Counter</button>
            <button onClick={Decrement}>Decreament Counter</button>
            <button onClick={Reset}>Reset Counter</button>
        </div>
    );
}
export default AutoCounter;