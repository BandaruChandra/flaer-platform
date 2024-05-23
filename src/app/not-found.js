import Link from 'next/link';
import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { DASHBOARD_ROUTES } from '../../helpers/routes';

function Index() {
  return (
    <div className='h-[80vh] flex flex-col gap-6 justify-center items-center'>
      <h1> The page you are looking for is not found. </h1>

      <Link href={DASHBOARD_ROUTES.ACTIVE_MEMBERSHIPS_LIST}>
        <button className='border border-[#1E2A59] text-[#1E2A59] hover:bg-[#1E2A59] hover:scale-105 px-6 py-2 hover:text-white rounded-md transition-all duration-all flex justify-center items-center gap-2'>
          <p>
            <IoMdArrowRoundBack size={20} />
          </p>
          <p>Back Home</p>
        </button>
      </Link>
    </div>
  );
}

export default Index;
