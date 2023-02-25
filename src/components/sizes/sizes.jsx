import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import './sizes.scss';
import { getSizes } from '../../store/sizes/selectors';


function Sizes(props) {
  const sizes = useSelector(getSizes);
  const [sizeItem, setSizeItem] = useState();


  return (
    <div className='sizes'>
      <h3 className='sizes__title'>Размеры</h3>
      <select
        className='sizes__select'
        value={sizeItem}
        onChange={e => setSizeItem(e.target.value)}
      >
        {sizes.map((size) => {
          return <option
            value={size.id}
            key={size.id}
          >
            {`${ size.label } - ${ size.number }`}
          </option>
        })}
      </select>
    </div>
  );
}

export default Sizes;
