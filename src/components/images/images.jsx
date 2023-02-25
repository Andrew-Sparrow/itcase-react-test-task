import React, { useState } from 'react';

import './images.scss';


function Images({ images }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0)

  function handleClickImg(evt) {
    setActiveImgIndex(+evt.target.id)
  }

  return (
    <div>
      <ul className='images'>
        {(images.length !== 0)
          ? images.map((imgPath, index) =>
            <li className='images__point' key={index}>
              <img
                id={index}
                className={`images__item ${activeImgIndex === index ? 'images__item--active' : ''}`}
                src={imgPath}
                alt='Продукт'
                key={index}
                onClick={handleClickImg}
              />
            </li>) : ''}
      </ul>
      {(images.length !== 0) ?
        <img
          className='images__picture'
          src={images[activeImgIndex]}
          alt="продукт"
        />
        : ''}
    </div>
  );
}

export default Images;
