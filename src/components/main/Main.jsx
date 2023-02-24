import React from 'react'
import { useSelector } from 'react-redux'

import { getProducts, getIsProductsLoaded } from '../../store/products/selectors'
import LoadingScreen from '../loading-screen/LoadingScreen.jsx'



export default function Main() {
  const products = useSelector(getProducts);
  const isProductsLoaded = useSelector(getIsProductsLoaded);

  if (!isProductsLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="main">
      {products.map((product) => {
        return <p key={product.id}>{product.name}</p>
      })}
    </div>
  )
}
