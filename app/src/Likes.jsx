import { useState } from "react";

const Likes=()=>{
    let [name,setname]=useState("lavanya")
    let [age,setage]=useState(19)
    let [salary,setsalary]=useState("30000")
    function increment(){
        setname("Divya")
        setage(20)
        setbranch(30000)
        console.log(count)
    }
    return(
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{salary}</h1>
            <button onClick={increment}>
                change
            </button>
            <button onClick={increment}>
                change
            </button>
            <button onClick={()=>setage(26)}>
            age Change
            </button>

    </div>
    )
}
export default Likes;
