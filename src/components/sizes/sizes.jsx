import React from 'react';
import { useSelector } from 'react-redux';

import './sizes.scss';
import Size from '../size/size';
import { getSizes } from '../../store/sizes/selectors';


function Sizes(props) {
  const sizes = useSelector(getSizes);

  return (
    <div className='sizes'>
      <h3 className='sizes__title'>Размеры</h3>
      <ul className='sizes__list'>
        {sizes.map((size) => {
          return <Size
            key={size.id}
            id={size.id}
            label={size.label}
            number={size.number}
          />
        })}
      </ul>
    </div>
  );
}

export default Sizes;
