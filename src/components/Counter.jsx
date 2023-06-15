import { useState } from "react";


const Counter = () => {
    //hooks helps us allow us to right lesss code
    //doesnt reload page
    // const[var , function] = useState
    let [count , setCount] = useState(5);
  return (
    <>
    <h1 style={{color:"#FFF"}}>Counter value - {count}</h1>
    <button onClick={() => setCount(count = 5)}>Reset counter</button>
    <button onClick={() => (count>9 ? count : setCount(count+1) )}>increase counter</button>
    <button onClick={() => (count<1 ? count : setCount(count-1))}>decrease counter</button>
    </>
  )
}

export default Counter