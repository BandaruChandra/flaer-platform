import React from 'react';
import { numberToInr } from '../../../../helpers/MathHelpers';

function Header({ heading, amount }) {
  return (
    <div className='rounded-md lg:flex items-between lg:items-center justify-between px-6 sm:px-10'>
      <div className=' grid place-items-end w-full'>
        <p> {heading} </p>
        <h1 className='text-3xl font-bold'>
          <span className='text-2xl'> ₹ </span>
          {amount ? numberToInr(amount) : '0.00'}
        </h1>
      </div>
    </div>
  );
}

export default Header;
