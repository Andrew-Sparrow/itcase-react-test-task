import React from 'react';
import { useSelector } from 'react-redux';

import { getSizes } from '../../services/api';
import './sizes.scss';
import Size from '../size/size';


function Sizes(props) {
  const sizes = useSelector(getSizes);

  return (
    <ul className='colors'>
      {sizes.map((size) => {
        return <Size
          key={size.id}
          id={size.id}
          name={size.label}
          number={size.number}
        />
      })}
    </ul>
  );
}

export default Sizes;
