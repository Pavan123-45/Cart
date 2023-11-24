import React from 'react'
import style from "./Cart.module.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div >
      <ul className={style.nav}>
        <li ><Link to={"/"} className={style.list}>Home</Link></li>
        <li ><Link to={"cart"} className={style.list} >Cart</Link></li>
      </ul>
    </div>
  )
}

export default Header
