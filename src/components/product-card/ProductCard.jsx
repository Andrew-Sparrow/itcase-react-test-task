import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function ProductCard(props) {
  const { id } = useParams();

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}

export default ProductCard
