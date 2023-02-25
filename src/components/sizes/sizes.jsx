import React from 'react';
import { useSelector } from 'react-redux';

import './sizes.scss';
import Size from '../size/size';
import { getSizes } from '../../store/sizes/selectors';


function Sizes(props) {
  const sizes = useSelector(getSizes);

  return (
    <ul className='sizes'>
      {sizes.map((size) => {
        return <Size
          key={size.id}
          id={size.id}
          label={size.label}
          number={size.number}
        />
      })}
    </ul>
  );
}

export default Sizes;
