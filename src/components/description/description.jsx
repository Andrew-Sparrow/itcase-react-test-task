import React from 'react';

import './description.scss';

function Description(props) {
  const { description } = props;

  return (
    <p className='description'>
      {description}
    </p>
  );
}

export default Description;
