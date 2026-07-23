import React, { useState } from 'react'

const Event1 = ()=> {
    const [name,setname]=useState("")
    return(
        <div>
            <label>username</label>
            <input type='text'value={name}onChange={(e)=>setname(e.target.value)}/>
            <p>{name}</p>
        </div>
    )
}
export default Event1;