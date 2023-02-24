import React from 'react'
import { useSelector } from 'react-redux'

import { AppRoute } from '../../const'
import { getProducts, getIsProductsLoaded } from '../../store/products/selectors'
import LoadingScreen from '../loading-screen/LoadingScreen.jsx'


export default function App() {
  const products = useSelector(getProducts);
  const isProductsLoaded = useSelector(getIsProductsLoaded);

  if (!isProductsLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{products}</p>
      </header>
    </div>
  )
}
