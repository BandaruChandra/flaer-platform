import React from 'react';
import PartnerRow from './PartnerRow.js';
import { RESPONSE_STATUS } from '../../../helpers/enums';

const getBusinessPartners = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flaer_platform/v1/platform/get_business_partners`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );

    //VWA
    let res = await response.json();

    if (res.status === RESPONSE_STATUS.SUCCESS) {
      return res;
    } else {
      console.log('error: ', res);
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

async function BusinessPartner() {
  const data = await getBusinessPartners();

  return (
    <div>
      <div className='min-w-full overflow-hidden border rounded-lg'>
        <div className='grid grid-cols-7 capitalise font-medium bg-lightBlue pr-4 h-16 items-center'>
          <div className='pl-4 col-span-1 text-start truncate'>Id</div>
          <div className='pl-4 col-span-1 text-start'>Name</div>
          <div className='pl-4 col-span-1 text-start'>Email</div>
          <div className='pl-4 col-span-1 text-start'>Phone Number</div>
          <div className='pl-4 col-span-1 text-start'>Is Verified</div>
          <div className='pl-4 col-span-1 text-start'>Is Active</div>
          <div className='pl-4 col-span-1 text-start'>Details</div>
        </div>

        {data?.data?.map((item, ind) => {
          return (
            <PartnerRow
              key={ind}
              data={item}
              lastElement={ind === data?.data?.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BusinessPartner;
