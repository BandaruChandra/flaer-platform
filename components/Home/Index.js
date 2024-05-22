import Link from 'next/link';
import React from 'react';
import { DASHBOARD_ROUTES } from '../../helpers/routes';

function Home() {
  return (
    <div className='min-h-[80vh] grid place-items-center'>
      <h1 className='text-4xl font-semibold'> Home Page </h1>

      <Link href={DASHBOARD_ROUTES.ACTIVE_MEMBERSHIPS_LIST}>
        <p className=''> Dashboard </p>
      </Link>
    </div>
  );
}

export default Home;
