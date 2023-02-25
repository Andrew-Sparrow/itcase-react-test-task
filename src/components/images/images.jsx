import React from 'react';

import './images.scss';


function Images({product}) {
  return (
    <div>
      <ul className='images'>
        {(product.colors.length && product.colors[0].images.length)
          && product.colors[0].images.map((imgPath, index) =>
            <li className='images__point' key={index}>
              <img
                className='images__item images__item--active'
                src={imgPath}
                alt='Продукт'
                key={index}
              />
            </li>)}
      </ul>
      <img
        className='images__picture'
        src={product.colors[0].images[0]}
        alt="продукт"
      />
    </div>
  );
}

export default Images;
