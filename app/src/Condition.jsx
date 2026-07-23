import React from 'react'

const Condition=()=>{
    const age=18
    // if(age>=18){
    //     return(<h1>age is greater than 18</h1>)
    // }else{
    //     return(<h1>age is lesser than 18</h1>)
    // }
    // return(
    //     <div>
    //         <h1>
    //             {age>=18? "age is greater than 18": "age is less than 18"}
    //         </h1>
    //     </div>
    // )

    return(
        <div>
            <h1>
                {age>=18 &&"age is greater than 18"}
            </h1>
        </div>
    )
}
export default Condition