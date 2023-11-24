import React, { useEffect, useState } from 'react'
import style from "./Cart.module.css"
import { useNavigate } from 'react-router-dom'
// import SingleProduct from './SingleProduct'

const Cart = ({ cart ,setCart}) => {
 let [totalPrice,setTotalPrice] = useState([])
 useEffect(()=>{
   setTotalPrice(cart.reduce((acc,cur)=> acc + Number(cur.price),0))
 },[cart])
  console.log(cart);
  let nav=useNavigate();
  if(totalPrice===0){
   setTimeout(()=>{
    nav("/")
   },5000)
  }
  return (
    <div>
      <span className={style.myCart}>My Cart</span> <br /> <br />
      <span className={style.myCart}>Total : { totalPrice}</span>
     
     <div className={style.cardContainer}>
        {
          cart?.map((product)=>{
            return (
             
              <div className={style.cardDiv} key={product.id}>
                <img src={product.image} alt={product.title} className={style.img}/>
                <ul className={style.singlrCard }>
                    <li><h3>Name :{ product.title}</h3></li>
                    <li><h3>Price: RS { product.price}</h3></li>
                    <li><h3>Ratings :{ product.rating.rate} ({product.rating.count})</h3></li>
                    
                
                    {cart.includes(product)?(  <li><button className={style.btn} key={product.id} onClick={()=>{
                        setCart(cart.filter((c)=> c.id!==product.id)) 
                    }}>Remove from Cart</button></li>)
                    :(<li><button className={style.btn} key={product.id} onClick={()=>{
                        setCart([cart ,product ])}}>Add to Cart</button></li>)}
                </ul>
            </div>
            
            )
          })
        }  
        
        </div>
    </div>
  )
}

export default Cart
