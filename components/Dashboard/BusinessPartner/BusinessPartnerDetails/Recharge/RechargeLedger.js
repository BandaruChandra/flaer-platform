import React, { useEffect, useState } from 'react';
import { numberToInr } from '../../../../../helpers/MathHelpers';
import { RESPONSE_STATUS } from '../../../../../helpers/enums';

const RechargeLedger = ({ id }) => {
  const [data, setData] = useState();

  useEffect(() => {
    getRechargeLedger(id);
  }, [id]);

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
        setData(res?.data);
      } else {
        console.log('error: ', res);
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  async function checkStatus() {
    try {
      let body = { account_recharge_id: initiatedData?.id };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flaer_platform/v1/platform/upi_status_check`,

        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      );

      let res = await response.json();

      if (res?.status === RESPONSE_STATUS.SUCCESS) {
        let data = res.data;

        toast.success(
          `Payment Status for id : ${body?.account_recharge_id} is ${data?.meta_data?.upi_status_response?.status}.`
        );
      } else {
        toast.error(res?.errors?.[0]);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

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
          <th
            scope='col'
            className='py-3 font-medium capitalize text-sm pl-4 text-start'
          >
            Check Status
          </th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data?.map((item, ind) => {
            return (
              <LedgerRow key={ind} item={item} checkStatus={checkStatus} />
            );
          })}
      </tbody>
    </table>
  );
};

const LedgerRow = ({ item, checkStatus }) => {
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
      <td className='py-4 pl-4'>{item?.payment_mode}</td>
      <td className='py-4 pl-4'>{}</td>
      <td className='py-4 pl-4'>{item?.completed_at}</td>
      <td className='py-4 pl-4'>{item?.transaction_id}</td>
      <td className='py-4 pl-4'>{item?.utr_number}</td>
      <td className='py-4 pl-4'>{item?.status}</td>
      <td className='py-4 pl-4'>
        {item?.status === RESPONSE_STATUS.PENDING ||
        item?.status === RESPONSE_STATUS.INITIATED ? (
          <button
            className='bg-darkBlue font-medium hover:scale-105 px-6 py-2 text-white rounded-md transition-all duration-all'
            onClick={() => {
              checkStatus();
            }}
          >
            Check Status
          </button>
        ) : (
          ''
        )}
      </td>
    </tr>
  );
};

export default RechargeLedger;
