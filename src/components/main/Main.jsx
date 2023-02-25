import React from 'react'
import { useSelector } from 'react-redux'

import './main.scss'
import { getProducts, getIsProductsLoaded } from '../../store/products/selectors'
import LoadingScreen from '../loading-screen/LoadingScreen.jsx'
import MainEmpty from '../main-empty/MainEmpty';
import Product from '../product/Product';
import { getIsSizesLoaded } from '../../store/sizes/selectors'



export default function Main() {
  const products = useSelector(getProducts);
  const isProductsLoaded = useSelector(getIsProductsLoaded);
  const isSizesLoaded = useSelector(getIsSizesLoaded);

  if (!isProductsLoaded && !isSizesLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="main">
      {products.length === 0
        ? <MainEmpty />
        : products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
    </div>
  )
}
