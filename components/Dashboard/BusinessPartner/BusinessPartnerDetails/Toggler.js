import Link from 'next/link';
import React from 'react';
import { BUSINESS_PARTNER_MENU } from '../../../../helpers/enums';

function Toggler({ url, id }) {
  return (
    <div
      className={`flex border-b-gray-400 bg-lightBlue justify-center text-sm sm:text-base w-full gap-0 h-14 shadow-md overflow-hidden`}
    >
      {BUSINESS_PARTNER_MENU?.map((item) => {
        return (
          <div key={item?.id} className='w-full'>
            <Link href={`${item?.link}?id=${id}`}>
              <button
                className={` truncate px-2 w-full text-center h-full border-r border-r-gray-400 inline-block capitalize min-w-fit ${
                  url === item?.link && `bg-darkBlue text-white font-semibold`
                }`}
              >
                {item?.name}
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Toggler;
