import React from 'react';
import { numberToInr } from '../../../../../helpers/MathHelpers';

function Header({ data }) {
  return (
    <div>
      <div className='font-medium flex items-center gap-3 text-xl'>
        <p className=''> Periodic Cashback : </p>
        <p className='font-semibold text-offGreen mt-1'>
          <span className='text-lg'>₹ </span>
          {numberToInr(data?.total_periodic_cashback_amount) || 0}
        </p>
      </div>
    </div>
  );
}

export default Header;
