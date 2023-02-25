import React from 'react';

import Color from '../color/color';
import './colors.scss';

function Colors({ colors }) {
  return (
    <div className='colors'>
      <h3 className='colors__title'>Цвета</h3>
      <ul className='colors__list'>
        {colors.map((color) => {
          return <Color
            key={color.id}
            id={color.id}
            name={color.name}
          />
        })}
      </ul>
    </div>
  );
}

export default Colors;
