
import React, {useState} from 'react'
const List =({brand,price,category})=> {
    
    return(
        <div className="List">
            <h1>{brand}</h1>
            <h1>{price}</h1>
            <h1>{category}</h1>
            <br/>
           

          

        </div>


    )
}

export default List