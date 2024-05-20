import React from 'react';
import { numberToInr } from '../../../../../helpers/MathHelpers';

function Header({ data }) {
  return (
    <div>
      <div className='font-medium flex items-center gap-3 text-xl'>
        <p className=''> Acc. Balance : </p>
        <p className='font-semibold mt-1 text-offGreen'>
          <span className='text-lg'>₹ </span>
          {numberToInr(data?.account_amount)}
        </p>
      </div>
    </div>
  );
}

export default Header;
