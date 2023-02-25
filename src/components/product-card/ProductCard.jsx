import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import './product-card.scss'
import { getProduct, getIsProductLoaded } from '../../store/product-card/selectors'
import LoadingScreen from '../loading-screen/LoadingScreen'
import { fetchProduct } from '../../store/api-actions'


function ProductCard(props) {
  const { id } = useParams()
  const isProductLoaded = useSelector(getIsProductLoaded)
  const dispatch = useDispatch()

  const [activeColorId, setActiveColorId] = useState(1)

  dispatch(fetchProduct(+id))

  const product = useSelector(getProduct);

  if (!isProductLoaded) {
    return (
      <LoadingScreen />
    );
  }

  console.log(product);

  return (
    <div className='product-card'>
      <section className='left'>
        <ul className='images'>
          {(product.colors.length && product.colors[0].images.length)
            && product.colors[0].images.map((imgPath, index) =>
              <img
                className='images__item images__item--active'
                src={imgPath}
                alt='Продукт'
                key={index}
              />)}
        </ul>
        <img src={product.colors[0].images[0]} alt="продукт" className='images__picture'/>
      </section>
      <section className='right'>
        <h1 className='product-card__title'>{product.name}</h1>
      </section>

    </div>
  );
}

export default ProductCard
