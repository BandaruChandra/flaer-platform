import React from 'react';
import { numberToInr } from '../../../../../helpers/MathHelpers';
import { RESPONSE_STATUS } from '../../../../../helpers/enums';

const getSiteLevelLedger = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flaer_platform/v1/platform/listing_site_level_cashbacks?business_partner_id=${id}`,
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

const SiteLevelLedger = async ({ id }) => {
  const data = await getSiteLevelLedger(id);

  return (
    <table className='min-w-full rounded-md  mt-10'>
      <thead className='capitalise font-normal bg-lightBlue'>
        <tr>
          <th scope='col' className='py-3 font-medium pl-4 text-start'>
            Order Id
          </th>
          <th scope='col' className='py-3 font-medium pl-4 text-start'>
            Attr. Name
          </th>

          <th scope='col' className='py-3 font-medium pl-4 text-start'>
            Attr. Amount
          </th>
          <th scope='col' className='py-3 font-medium pl-4 text-start'>
            Attr. Type
          </th>
          <th scope='col' className='py-3 font-medium pl-4 text-start'>
            Attr. Txn. Type
          </th>

          <th scope='col' className='py-3 font-medium pl-4 text-start'>
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.data?.map((item) => {
          if (item?.order_attributes?.length < 1) return;

          return (
            <LedgerRow
              key={item.id}
              order_attribute={item?.order_attributes?.[0]}
            />
          );
        })}
      </tbody>
    </table>
  );
};

const LedgerRow = ({ order_attribute }) => {
  console.log('order_attribute: ', order_attribute);

  return (
    <tr className={`border-b text-gray-700 odd:bg-white`}>
      <td className='py-4 pl-4 min-w-28'>{order_attribute?.order_id}</td>
      <td className='py-4 pl-4 min-w-[200px] lg:min-w-[300px]'>
        {order_attribute?.attribute_name}
      </td>

      <td className='py-4 pl-4'>
        <div
          className={`${
            order_attribute?.attribute_amount === 'credit'
              ? 'text-[#338600]'
              : 'text-[#FF0000]'
          } font-medium flex items-center gap-1 `}
        >
          <span className='text-xl'>
            {order_attribute?.attribute_amount === 'credit' ? '+' : '-'}
          </span>
          <p className='flex items-center'>
            <span className='text-sm'> ₹ </span>
            {numberToInr(order_attribute?.attribute_amount || 0)}
          </p>
        </div>
      </td>

      <td className='py-4 pl-4 min-w-28'>{order_attribute?.attr_type}</td>
      <td className='py-4 pl-4 min-w-28'>{order_attribute?.attr_txn_type}</td>

      <td className='py-4 pl-4 min-w-[200px] lg:min-w-[300px]'>
        {order_attribute?.description}
      </td>
    </tr>
  );
};

export default SiteLevelLedger;
