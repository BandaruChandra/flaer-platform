import React from 'react';
import { RESPONSE_STATUS } from '../../../../helpers/enums';

const getBusinessPartnerUsers = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flaer_platform/v1/platform/1/get_business_partner_users`,
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

async function PartnerUsers({ id }) {
  const data = await getBusinessPartnerUsers(id);

  return (
    <section>
      <h4 className='mb-4 mt-12 font-semibold text-2xl'>
        Business Partner Users
      </h4>
      <div className='border rounded-md'>
        <div className='min-w-full overflow-hidden'>
          <div className='grid grid-cols-7 capitalise font-medium bg-lightBlue pr-4 min-h-14 items-center'>
            <div className='pl-4 col-span-1 text-start truncate'>Id</div>
            <div className='pl-4 col-span-1 text-start'>Name</div>
            <div className='pl-4 col-span-1 text-start'>Email</div>
            <div className='pl-4 col-span-1 text-start'>Phone Number</div>
            <div className='pl-4 col-span-1 text-start'>Is Verified</div>
            <div className='pl-4 col-span-1 text-start'>Is Active</div>
            <div className='pl-4 col-span-1 text-start'>Roles</div>
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
    </section>
  );
}

const PartnerRow = ({ data, lastElement }) => {
  return (
    <div
      className={`grid grid-cols-7 min-h-14 py-2 text-gray-700 items-center font-medium ${
        !lastElement ? 'border-b' : ''
      }`}
    >
      <div className='pl-4 text-start col-span-1'>{data?.id}</div>
      <div className='pl-4 text-start col-span-1'>{data?.name}</div>
      <div className='pl-4 text-start col-span-1'>{data?.email}</div>
      <div className='pl-4 text-start col-span-1'>{data?.phone_number}</div>
      <div className='pl-4 text-start col-span-1'>
        <RadioButton status={data?.is_verfied} />
      </div>
      <div className='pl-4 text-start col-span-1'>
        <RadioButton status={data?.is_active} />
      </div>
      <div className='text-start col-span-1'>
        {data?.roles?.map((item, ind) => {
          return (
            <p key={ind}>
              {' '}
              {ind + 1}. {item}{' '}
            </p>
          );
        })}
      </div>
    </div>
  );
};

const RadioButton = ({ status }) => {
  return (
    <div className='w-36'>
      <input
        type={'checkbox'}
        defaultChecked={status}
        className='w-6 h-6 border-2 rounded-lg'
      />
    </div>
  );
};

export default PartnerUsers;
