import Link from 'next/link';
import React from 'react';
import { BUSINESS_PARTNER_ROUTES } from '../../helpers/routes';

function Home() {
  return (
    <div className='min-h-[80vh] grid place-items-center'>
      <h1 className='text-4xl font-semibold'> Home Page </h1>

      <Link href={`${BUSINESS_PARTNER_ROUTES.RECHARGE}?id=2&page=1`}>
        <p className='text-blue-400'> Dashboard </p>
      </Link>
    </div>
  );
}

export default Home;
