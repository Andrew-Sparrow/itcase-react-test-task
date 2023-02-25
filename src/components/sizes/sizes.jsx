import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import './sizes.scss';
import { getSizes } from '../../store/sizes/selectors';


function Sizes(props) {
  const { colorSizes } = props;
  console.log(colorSizes);
  const sizes = useSelector(getSizes);
  const [sizeItemId, setSizeItemId] = useState();


  return (
    <div className='sizes'>
      <h3 className='sizes__title'>Размеры</h3>
      <select
        className='sizes__select'
        value={sizeItemId}
        onChange={e => setSizeItemId(e.target.value)}
      >
        {sizes.map((size) => {
          return <option
            value={size.id}
            key={size.id}
            disabled={!colorSizes.includes(size.id)}
          >
            {`${ size.label } - ${ size.number }`}
          </option>
        })}
      </select>
    </div>
  );
}

export default Sizes;
