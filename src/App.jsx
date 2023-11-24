import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Cart from "./Cart"
import { useState } from "react"

const App =()=>{

  let [cart, setCart] = useState([])

    return (
        <div>
          <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={
            <Home cart={cart} setCart={setCart}/>}></Route>
            <Route path="/cart" element={
            <Cart cart={cart} setCart={setCart}/>}> </Route>
          </Routes>

          </BrowserRouter>
        </div>
    )
}

export default App