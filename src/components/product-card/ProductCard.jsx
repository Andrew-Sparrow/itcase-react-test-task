import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './product-card.scss';
import { getProduct, getIsProductLoaded } from '../../store/product-card/selectors';
import LoadingScreen from '../loading-screen/LoadingScreen';
import { fetchProduct } from '../../store/api-actions';
import Colors from '../colors/colors';
import Sizes from '../sizes/sizes';
import Description from '../description/description';
import Images from '../images/images';


function ProductCard(props) {
  const { id } = useParams()
  const isProductLoaded = useSelector(getIsProductLoaded)
  const dispatch = useDispatch()

  const [activeColorId, setActiveColorId] = useState(1)

  function handleChangeColorId(id) {
    setActiveColorId(id)
  }

  dispatch(fetchProduct(+id))

  const product = useSelector(getProduct)
  // console.log(product);

  if (!isProductLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <form className='product-card'>
      <section className='left'>
        <Images product={product} />
      </section>
      <section className='right'>
        <h1 className='product-card__title'>{product.name}</h1>
        <div className='price'>
          <h3 className='price__title'>Цена</h3>
          <p className='price__number'>
            {product.colors.find((color) => color.id === +activeColorId).price}
          </p>
        </div>

        <Description description={product.colors[0].description} />
        <Colors colors={product.colors} handleChangeColorId={handleChangeColorId} />
        <Sizes colorSizes={product.colors[0].sizes} />
      </section>
    </form>
  );
}

export default ProductCard;
