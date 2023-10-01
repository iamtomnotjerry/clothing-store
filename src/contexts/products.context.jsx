import { createContext, useState } from "react";

import PRODUCTS from '../shop-data.js'

export const ProductsContext= createContext({
  products: [],

});

export const ProductsProdiver= ({children}) => {
  const [products, setProducts] = useState([])
  const value = {products};
  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  )
}