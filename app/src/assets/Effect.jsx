
import React, { useEffect, useState } from 'react'

const Effect= () => {

    const [count,setcount]=useState(0)
    const [name,setname]=useState("")

    useEffect(()=>{
        console.log("count Increased")
    },[count])
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count+1)}>Increment</button>


        </div>
    )
}


export default Effect