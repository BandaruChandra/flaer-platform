import Link from 'next/link';
import React from 'react';
import { BUSINESS_PARTNER_MENU } from '../../../../helpers/enums';

function Tabs({ url, id }) {
  return (
    <div
      className={`flex gap-2 justify-center text-sm sm:text-base w-full h-14`}
    >
      {BUSINESS_PARTNER_MENU?.map((item) => {
        return (
          <div key={item?.id} className='w-full'>
            <Link href={`${item?.link}?id=${id}`}>
              <button
                className={`border border-gray-300 truncate px-2 w-full text-center h-full inline-block capitalize min-w-fit rounded-t-lg ${
                  url === item?.link
                    ? `bg-darkBlue text-white font-semibold`
                    : 'bg-lightBlue'
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

export default Tabs;
