
import React, {useState} from 'react'

const DarkMode = ()=> {
    const [dark,setdark]=useState(false)
    return(
        <div style={{backgroundColor:dark?"skyblue":"white",
            color:dark?"white":"skyblue"
        }} className='card-dark'>
            
            <button onClick={()=>setdark(!dark)}>Darktheme</button>
            <h1>{dark?"Dark mode":"light mode"}</h1>
        </div>
    )
}

export default DarkMode;