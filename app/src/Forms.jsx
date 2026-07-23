
import React from 'react'

const Forms = () => {
    const [name,setname] = useState("")
    const [userName,setUserName]=usestate()
    const Handling=(event)=>{
        setname(event.target.value)
        console.log(name)
    }

    const Handling2=(event)=>{
        setUserName(name)
        event.preventdefault()
    }
        // setUserName(name)
    }
    return(
        <form onSubmit={Handling2}>
        <div  className='Forms'>
            <div className='Inputflied'>
                <h1>Hello,{userName}</h1>
                <input type='text'className='InputField' placeholder='enter a name' onChange={Handling}></input>
                <br>
                </br>
                <button className='button'type='submit'>Submit</button>
            </div>
        </div>
    )


export default Forms