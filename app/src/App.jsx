import { useState } from 'react'
import './App.css'
// import CounterApp from './CounterApp'
import Event1 from './Event1'
import Condition from './Condition'
import DarkMode from './DarkMode'
import List from './List'
import Forms from './Forms'

function App(){
   const products=[{id:1,brand:"vivo",price:25000,category:"mobiles"},
    {id:2,brand:"oppo",price:30000,category:"mobiles"},
    {id:3,brand:"motorola",price:45000,category:"mobiles"},
    {id:4,brand:"iphone16",price:50000,category:"mobiles"},
    {id:5,brand:"iphone17",price:85000,category:"mobiles"},
    ]
  
  return (
    <div className='List'>
      {/* { <Event1/> }
      { <Condition/> }
      { <DarkMode/> } */}
      {products.map((product)=>
      <List key={product.id} brand={product.brand}
       price={product.price} category={product.category}/>)}
      
    </div>
  )
}

export default App;