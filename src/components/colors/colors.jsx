import React from 'react';

import Color from '../color/color';
import './colors.scss';

function Colors({ colors }) {
  return (
    <ul className='colors'>
      {colors.map((color) => {
        return <Color
          key={color.id}
          id={color.id}
          name={color.name}
        />
      })}
    </ul>
  );
}

export default Colors;
