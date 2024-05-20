import React from 'react';
import { numberToInr } from '../../../../../helpers/MathHelpers';
import { RESPONSE_STATUS } from '../../../../../helpers/enums';

const getAccountLedger = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flaer_platform/v1/platform/get_account_ledger_details?business_partner_id=${id}`,
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

const AccountLedger = async ({ id }) => {
  const data = await getAccountLedger(id);

  return (
    <table className='min-w-full rounded-md  mt-10'>
      <thead className='capitalise font-normal bg-lightBlue'>
        <tr>
          <th scope='col' className='py-3 font-medium pl-4 text-start truncate'>
            Id
          </th>
          <th scope='col' className='py-3 font-medium pl-4 text-start'>
            Trans. Date
          </th>

          <th scope='col' className='py-3 font-medium pl-4 text-start'>
            Amount
          </th>

          <th scope='col' className='py-3 font-medium pl-4 text-start'>
            Reference Type
          </th>

          <th scope='col' className='py-3 font-medium pl-4 text-start'>
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.data?.map((item) => {
          return <LedgerRow key={item.id} item={item} />;
        })}
      </tbody>
    </table>
  );
};

const LedgerRow = ({ item }) => {
  return (
    <tr key={item.id} className={`border-b text-gray-700 odd:bg-white`}>
      <td className='py-4 pl-4 min-w-28'>{item.id}</td>
      <td className='py-4 pl-4 min-w-[200px] lg:min-w-[300px]'>
        {item?.transaction_date}
      </td>

      <td className='py-4 pl-4'>
        <div
          className={`${
            item.ledger_type === 'credit' ? 'text-[#338600]' : 'text-[#FF0000]'
          } font-medium flex items-center gap-1 `}
        >
          <span className='text-xl'>
            {item.ledger_type === 'credit' ? '+' : '-'}
          </span>
          <p className='flex items-center'>
            <span className='text-sm'> ₹ </span>
            {numberToInr(item?.amount || 0)}
          </p>
        </div>
      </td>

      <td className='py-4 pl-4 min-w-28'>{item.ledger_reference_type}</td>

      <td className='py-4 pl-4 min-w-[200px] lg:min-w-[300px]'>
        {item?.description}
      </td>
    </tr>
  );
};

export default AccountLedger;
