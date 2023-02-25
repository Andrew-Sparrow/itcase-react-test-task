import React from 'react';

import { COLORS } from './consts.js'
import './color.scss'

function Color(props) {
  const {
    id,
    name
  } = props;

  return (
    <li className='color' id={id}>
      <div className='color__box' style={{ backgroundColor: `${COLORS[name]}` }} ></div>
      <p className="color__name">{name}</p>
    </li>
  );
}

export default Color;
