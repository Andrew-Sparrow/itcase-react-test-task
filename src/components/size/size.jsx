import React from 'react';

import './size.scss';

function Size(props) {
  const {
    id,
    label,
    number
  } = props;

  return (
    <li className='size size--active' id={id}>
      <p className='size__label '>{label}</p>
      <p className="size__number">{number}</p>
    </li>
  );
}

export default Size;
