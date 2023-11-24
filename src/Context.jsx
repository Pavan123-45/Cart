import React, { createContext,  useState } from 'react'

export let Cart = createContext();
const Context = ({children}) => {

    let [cart, setCart] = useState([]);
  return <Cart.Provider value= {{cart, setCart}}>{children}</Cart.Provider>
}

export default Context
