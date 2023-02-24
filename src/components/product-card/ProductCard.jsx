import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getProduct, getIsProductLoaded } from '../../store/product-card/selectors';
import LoadingScreen from '../loading-screen/LoadingScreen';


function ProductCard(props) {
  const { id } = useParams();
  const product = useSelector(getProduct);
  const isProductLoaded = useSelector(getIsProductLoaded);
  const dispatch = useDispatch();

  dispatch(getProduct(id));

  if (!isProductLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}

export default ProductCard
