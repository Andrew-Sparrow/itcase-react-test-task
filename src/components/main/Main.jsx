import React from 'react'
import { useSelector } from 'react-redux'

import { getProducts, getIsProductsLoaded } from '../../store/products/selectors'
import LoadingScreen from '../loading-screen/LoadingScreen.jsx'
import MainEmpty from '../main-empty/MainEmpty';
import ProductCard from '../product-card/ProductCard';



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
      {products.length === 0
        ? <MainEmpty />
        : products.map((product) => {
          return <ProductCard key={product.id} {...product} />
        })}
    </div>
  )
}
