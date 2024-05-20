import Link from 'next/link';
import React from 'react';
import { BUSINESS_PARTNER_MENU } from '../../../../helpers/enums';

function Toggler({ url, id }) {
  return (
    <div className=''>
      <div
        className={`flex border justify-center text-sm sm:text-base max-w-fit gap-0 h-10`}
      >
        {BUSINESS_PARTNER_MENU?.map((item) => {
          return (
            <div key={item?.id}>
              <Link href={`${item?.link}?id=${id}`}>
                <button
                  className={`px-4 h-full border-r inline-block capitalize lg:px-4 min-w-fit ${
                    url === item?.link && `bg-darkBlue text-white`
                  }`}
                >
                  {item?.name}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Toggler;
