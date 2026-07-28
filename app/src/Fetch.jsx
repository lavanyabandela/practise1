
// import React, { useEffect, useState } from 'react'

// const Fetch = () => {(
//     const [data,setdata]=useState([])
//     const [loading,setloading]=useState(true)

//     useEffect(()=>{
//         // const [data,setdata]=useState([])
//         // const [loading,setloading]=useState(true)
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((res)=>res.json())
//         .then((data)=>setdata(data))
//         console.log(data)
//         setloading(false)
//     })
//         .catch((err)=>console.log("something is wrong in api"))
//            seterror("something is wrong in api")
// })

// const addproduct=()=>{
//     const product={
//         "userId":1,
//         "id": 101,
//         "title": "We are using post method to create the data",
//         "body": " {
//     "userId": 1,
//     "id": 1,
//     "title": "We are using post method to create the data",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  
//     }
//     fetch("https://jsonplaceholder.typicode.com/posts",{
//         method:"POST",
//         headers:{'Content-Type': 'application/json'},
//         body:JSON.stringify(product)
//     }).then((res)=>res.json)
//     .then((data)=>setdata((prev)=>[...prev,data]))
// }
    
//     if (loading){
//         return (
//             <p>Loading.....</p>
//         )
//     }

//     if(error){
//   return 
//   }
//     <div>
//         <h1>post lists:</h1>
//         {
//             data.map((posts)=>{
//             return (<div key={posts.id}>
//                 <h1>{posts.userId}</h1>
//                 <h1>{posts.title}</h1>
//             </div>)

//             })
//         }
//         <button onClick></button>

//     </div>
//   )
// }

// export default Fetch

// import React, { useEffect, useState } from 'react'

// const Fetch = () => {
//     const [data,setdata]=useState([])
//     const [loading,setloading]=useState(true)
//     const [error,seterror]=useState(null)
//     useEffect(()=>{
//         fetch('https://fakestoreapi.com/products')
//         .then((res)=>res.json())
//         .then((data)=>{setdata(data) 
//             console.log(data)
//             setloading(false)
//         })
//         .catch((err)=>{console.log("something is worng in Api")
//             seterror("Somthing is wrong in api")
//         })
//     },[])

//     const addproducts=()=>{
//         const product={
//             "userId": 1,
//             "id": 101,
//             "title": "We are using post method to create the data",
//             "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//         }
//         fetch("https://jsonplaceholder.typicode.com/posts",{
//             method:'POST',
//             headers:{'Content-Type':'application/json'},
//             body:JSON.stringify(product)
//         }).then((res)=>res.json())
//         .then((data)=>setdata((prev)=>[...prev,data]))
//     }

//     if (loading){
//         return (
//             <p>Loading......</p>
//         )
//     }

//     if (error){
//         return (
//             <p>{error}</p>
//         )
//     }
//   return (
//     <div>
//         <h1>Post lists: </h1>
//         {
//             data.map((p)=>{
//                return<div key={p.id}> 
//                <img  src={p.image}/>
//                 <h1>{p.title}</h1> 
//                 <h1>{p.price}</h1>
//                 <h1>{p.category}</h1>
//                 <h1>_________________</h1>
//                 </div>
//             })
//         }

//         <button onClick={addproducts}>ADD</button>
//     </div>
//   )
// }

// export default Fetch


// import React, { useEffect, useState } from 'react'

// const Fetch = () => {
//     const [data,setdata]=useState([])
//     const [loading,setloading]=useState()
//     const [error,seterror]=useState(null)
//     useEffect(()=>{
//         fetch('https://fakestoreapi.com/products')
//         .then((res)=>res.json())
//         .then((data)=>{setdata(data) 
//             console.log(data)
//              setloading(false)
            
//         })
//         .catch((err)=>{console.log("something is worng in Api")
//             seterror("something is wrong in api")
//         })
//     },[])

//     const addproducts=()=>{
//         const product={
//     "userId": 1,
//     "id": 101,
//     "title": "We are using post method to craete the data",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   }
//   fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body:JSON.stringify(product)
//   }).then((res)=>res.json())
//   .then((data)=>setdata((prev)=>[...prev,data]))
//     }
//     if(loading){
//        return(
//         <p>Loading.......</p>
//        )
//     }

//     if(error){
//       return(
//         <p>{error}</p>
//       )
//     }

//   return (
//     <div  className="new">
//         <h1 className="head">Post lists: </h1>
//         {
//             data.map((p)=>{
//                return<div key={p.id}> 
//                <img className="image"src={p.image}/>
//                 <h1 className="title">{p.title}</h1> 
//                 <h1 className="price">{p.price}</h1>
//                 <h1 className="category">{p.category}</h1>
//                 {/* <h1>_________________</h1> */}
//                 <button className="add">add to cart</button><br/><br/>
//                 <button className="buy">Buy Now</button>
//                 </div>
//             })
//         }
//         <button onClick={addproducts}>add</button>
//     </div>
//   )
// }

// export default Fetch
// import React, { useEffect, useState } from "react";

// const Fetch = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setError("Something went wrong in API");
//         setLoading(false);
//       });
//   }, []);

//   const addProducts = () => {
//     const product = {
//       id: data.length + 1,
//       title: "New Product",
//       price: 99.99,
//       category: "electronics",
//       image: "https://via.placeholder.com/150",
//     };

//     setData((prev) => [...prev, product]);
//   };

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   if (error) {
//     return <h2>{error}</h2>;
//   }

//   return (
//     <>
//       <h1 className="head">Product List</h1>

//       <div className="new">
//         {data.map((p) => (
//           <div key={p.id}>
//             <img
//               className="image"
//               src={p.image}
//               alt={p.title}
//             />

//             <h3 className="title">{p.title}</h3>

//             <h2 className="price">${p.price}</h2>

//             <p className="category">{p.category}</p>

//             <button className="add">Add to Cart</button>

//             <br />
//             <br />

//             <button className="buy">Buy Now</button>
//           </div>
//         ))}
//       </div>

//       <div style={{ textAlign: "center", margin: "20px" }}>
//         <button className="add" onClick={addProducts}>
//           Add Product
//         </button>
//       </div>
//     </>
//   );
// };

// export default Fetch;


import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong in API");
        setLoading(false);
      });
  }, []);

  const addProducts = () => {
    const product = {
      id: data.length + 1,
      title: "New Product",
      price: 99.99,
      category: "electronics",
      image: "https://via.placeholder.com/150",
    };

    setData((prev) => [...prev, product]);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h1 className="head">Product List</h1>

      <div className="new">
        {data.map((p) => (
          <div key={p.id}>
            <img
              className="image"
              src={p.image}
              alt={p.title}
            />

            <h3 className="title">{p.title}</h3>

            <h2 className="price">${p.price}</h2>

            <p className="category">{p.category}</p>

            <button className="add">Add to Cart</button>

            <br />
            <br />

            <button className="buy">Buy Now</button>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", margin: "20px" }}>
        <button className="add" onClick={addProducts}>
          Add Product
        </button>
      </div>
    </>
  );
};

export default Fetch;