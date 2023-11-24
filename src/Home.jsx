import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import SingleProduct from './SingleProduct'

const Home = ({cart, setCart}) => {
  

  let [products,setProducts]= useState([])
 

 useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products`)
  .then((res)=>{
      setProducts(res.data)
    
  })
  .catch((err)=>{
      console.log("Data not fetch");

  })
},[])

  return (
    <div >
      <SingleProduct products={products} cart ={cart} setCart={setCart} key={products.id}></SingleProduct>
      
    </div>
  )
}

export default Home
