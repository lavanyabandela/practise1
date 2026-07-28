
import React, { useEffect, useState} from "react";

const Timer = () =>{
    const [sec,setsec]=useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setsec((prev)=>prev+1)
        },1000)
    })
    return(
        <div>
            <h1>{sec}</h1>
        </div>
    )
}
export default Timer