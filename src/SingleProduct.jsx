import React from 'react'
import style from "./Cart.module.css"
const SingleProduct = ({products ,cart, setCart}) => {
    // console.log(products);
    console.log(cart);

       
  return (
    <div className={style.cardContainer}>
       {products?.map((product)=>{
        return (
            <div className={style.cardDiv} key={product.id}>
                <img src={product.image} alt={product.title} className={style.img}/>
                <ul className={style.singlrCard }>
                    <li><h3>Name :{ product.title}</h3></li>
                    <li><h3>Price: RS { product.price}</h3></li>
                    <li><h3>Ratings :{ product.rating.rate} ({product.rating.count})</h3></li> 
                    <br />
                    {cart.includes(product)?(  <li><button className={style.btn} onClick={()=>{
                        setCart(cart.filter((c)=> c.id!==product.id)) 
                    }}>Remove from Cart</button></li>)
                    :(<li><button className={style.btn} onClick={()=>{
                        setCart([...cart ,product ])}}>Add to Cart</button></li>)}
                </ul>
            </div>
        )
      })}
    </div>
  )
}

export default SingleProduct
