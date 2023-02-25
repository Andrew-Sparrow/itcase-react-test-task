import React, { useState } from 'react';

import { COLORS } from './consts.js';

import './colors.scss';

function Colors({ colors }) {
  const [color, setColor] = useState();

  return (
    <div className='colors'>
      <h3 className='colors__title'>Цвета</h3>
      <select
        className='colors__select'
        value={color}
        onChange={e => setColor(e.target.value)}
      >
        {colors.map((color) => {
          return <option
            id={color.id}
            value={color.name}
            style={{ backgroundColor: `${ COLORS[color.name] }` }}
            key={color.id}
          >
            {color.name}
          </option>
        })}
      </select>
    </div>
  );
}

export default Colors;
