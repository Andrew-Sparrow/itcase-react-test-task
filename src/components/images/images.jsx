import React from 'react';

import './images.scss';


function Images({ images }) {
  return (
    <div>
      <ul className='images'>
        {(images.length !== 0)
          ? images.map((imgPath, index) =>
            <li className='images__point' key={index}>
              <img
                className='images__item images__item--active'
                src={imgPath}
                alt='Продукт'
                key={index}
              />
            </li>) : ''}
      </ul>
      {(images.length !== 0) ?
        <img
          className='images__picture'
          src={images[0]}
          alt="продукт"
        />
        : ''}
    </div>
  );
}

export default Images;
