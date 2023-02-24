import React from 'react'
import { Link } from 'react-router-dom'

import './product-card.scss'

function ProductCard(props) {
  const {
    id,
    name,
    colors
  } = props;

  return (
    <Link className='product' to={`/product/${ id }`}>
      <img src={colors[0].images[0]} alt={name} className='product__img' />
      <h3>{name}</h3>
    </Link>
  );
}

export default ProductCard
