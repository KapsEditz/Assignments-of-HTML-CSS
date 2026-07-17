import React, {useState} from "react"
import A from './A'
export default function About(){
    const [num,setNum]=useState(1)
    const name ="Say my Name - Heisenberg!"
    function add()
    {
        setNum(num+1)
    }
    function min()
    {
        setNum(num-1)
    }
    function mul()
    {
        setNum(num*2000)
    }
    function div()
    {
        setNum(num/2)
    }
    function reset()
    {
        setNum(0)
    }

    return(
        <>
        <h1>{num}</h1>
        <button onClick={add}>+</button>
        <button onClick={min}>-</button>
        <button onClick={mul}>*</button>
        <button onClick={div}>/</button>
        <button onClick={reset}>RESET</button>

        <A send={name}/>

        </>
    )
}
