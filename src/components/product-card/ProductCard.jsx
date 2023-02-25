import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './product-card.scss'
import { getProduct, getIsProductLoaded } from '../../store/product-card/selectors';
import LoadingScreen from '../loading-screen/LoadingScreen';
import { fetchProduct } from '../../store/api-actions';


function ProductCard(props) {
  const { id } = useParams();
  const isProductLoaded = useSelector(getIsProductLoaded);
  const dispatch = useDispatch();

  dispatch(fetchProduct(+id));

  const product = useSelector(getProduct);

  if (!isProductLoaded) {
    return (
      <LoadingScreen />
    );
  }

  console.log(product);

  return (
    <div className='product-card'>
      <h1>{product.name}</h1>
      
    </div>
  );
}

export default ProductCard
