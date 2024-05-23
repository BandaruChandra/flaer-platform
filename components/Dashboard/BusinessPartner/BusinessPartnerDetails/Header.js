import React from 'react';
import { numberToInr } from '../../../../helpers/MathHelpers';

function Header({ heading, account, amount, showAllThree }) {
  return (
    <div className='rounded-md grid grid-cols-3 gap-4 my-10'>
      <div className='col-span-1'>
        <Amount
          heading={heading}
          amount={showAllThree ? account?.current_amount : amount}
        />
      </div>

      {showAllThree && (
        <div className='grid grid-cols-2 col-span-2 items-between lg:items-center'>
          <Amount heading={'Total Credited'} amount={account?.total_credit} />
          <Amount heading={'Total Debited'} amount={account?.total_debit} />
        </div>
      )}
    </div>
  );
}

const Amount = ({ heading, amount }) => {
  return (
    <div className='col-span-1'>
      <p className='mb-1'> {heading} </p>
      <h1
        className={`text-3xl font-bold ${
          heading.includes('Debited') ? 'text-ur' : 'text-offGreen'
        }`}
      >
        <span className='text-2xl'>
          {heading.includes('Total')
            ? heading.includes('Debited')
              ? '- '
              : '+ '
            : ''}
          ₹{' '}
        </span>
        {amount ? numberToInr(amount) : '0.00'}
      </h1>
    </div>
  );
};

export default Header;
