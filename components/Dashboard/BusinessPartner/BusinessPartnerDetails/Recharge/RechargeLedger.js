import React from 'react';
import { numberToInr } from '../../../../../helpers/MathHelpers';
import { RESPONSE_STATUS } from '../../../../../helpers/enums';

const getRechargeLedger = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flaer_platform/v1/platform/get_all_recharges?by_business_partner=${id}`,
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

const RechargeLedger = async ({ id }) => {
  const data = await getRechargeLedger(id);

  return (
    <table className='min-w-full overflow-hidden rounded-md'>
      <thead className='capitalise font-normal bg-lightBlue'>
        <tr>
          <th
            scope='col'
            className='py-3 font-medium capitalize text-sm pl-4 text-start'
          >
            Id
          </th>
          <th
            scope='col'
            className='py-3 font-medium capitalize text-sm pl-4 text-start'
          >
            recharge amount
          </th>
          {/* 
          <th
            scope='col'
            className='py-3 font-medium capitalize text-sm pl-4 text-start'
          >
            payment aggregator
          </th> */}

          <th
            scope='col'
            className='py-3 font-medium capitalize text-sm pl-4 text-start'
          >
            mode
          </th>

          <th
            scope='col'
            className='py-3 font-medium capitalize text-sm pl-4 text-start'
          >
            initiated at
          </th>
          <th
            scope='col'
            className='py-3 font-medium capitalize text-sm pl-4 text-start'
          >
            completed at
          </th>
          <th
            scope='col'
            className='py-3 font-medium capitalize text-sm pl-4 text-start'
          >
            transaction id
          </th>
          <th
            scope='col'
            className='py-3 font-medium capitalize text-sm pl-4 text-start'
          >
            UTR number
          </th>
          <th
            scope='col'
            className='py-3 font-medium capitalize text-sm pl-4 text-start'
          >
            status
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.data?.map((item, ind) => {
          return <LedgerRow key={ind} item={item} />;
        })}
      </tbody>
    </table>
  );
};

const LedgerRow = ({ item }) => {
  return (
    <tr className={`border-b text-sm text-gray-700 odd:bg-white`}>
      <td className='py-4 pl-4 min-w-28'>{item?.id}</td>
      <td className='py-4 pl-4'>
        <p className='flex items-center'>
          <span className='text-sm'> ₹ </span>
          {numberToInr(item?.recharge_amount || 0)}
        </p>
      </td>

      {/* <td className='py-4 pl-4 '>{item?.payment_aggregator}</td> */}
      <td className='py-4 pl-4 '>{item?.payment_mode}</td>
      <td className='py-4 pl-4 '>{}</td>
      <td className='py-4 pl-4 '>{item?.completed_at}</td>
      <td className='py-4 pl-4 '>{item?.transaction_id}</td>
      <td className='py-4 pl-4 '>{item?.utr_number}</td>
      <td className='py-4 pl-4 '>{item?.status}</td>
    </tr>
  );
};

export default RechargeLedger;
