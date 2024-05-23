'use client';

import React, { useEffect, useState } from 'react';
import { numberToInr } from '../../../../../helpers/MathHelpers';
import { RESPONSE_STATUS } from '../../../../../helpers/enums';
import Pagination from '../../../../Helpers/Pagination';
import { toast } from 'react-toastify';

const RechargeLedger = ({ id, page }) => {
  const [data, setData] = useState();
  const [pagesList, setPagesList] = useState([]);

  let href = `/dashboard/business-partner/recharge?id=${id}&`;

  useEffect(() => {
    getRechargeLedger(id, page);

    console.log('coming hrerereer', id, page);
  }, [id, page]);

  const getRechargeLedger = async (id, page) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flaer_platform/v1/platform/get_all_recharges?by_business_partner=${id}&page=${page}`,
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

        let pList = [];
        for (let i = 1; i <= res?.meta?.total_pages; i++) {
          pList.push(i);
        }

        console.log('res: ', res);

        setPagesList(pList);
      } else {
        console.log('error: ', res);
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  async function checkStatus(recharge_id) {
    try {
      let body = { account_recharge_id: recharge_id };

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
    <div className='max-w-[100vw] lg:min-w-full overflow-x-auto'>
      <table className='rounded-md min-w-full'>
        <thead className='capitalise font-normal h-14 bg-lightBlue'>
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
      <Pagination pagesList={pagesList} currPage={Number(page)} href={href} />
    </div>
  );
};

const LedgerRow = ({ item, checkStatus }) => {
  return (
    <tr className={`border-b capitalize text-sm text-gray-700 odd:bg-white`}>
      <td className='py-4 pl-4 min-w-28'>{item?.id}</td>
      <td className='py-4 pl-4'>
        <p className='flex items-center'>
          <span className='text-sm'> ₹ </span>
          {numberToInr(item?.recharge_amount || 0)}
        </p>
      </td>

      <td className='py-4 pl-4'>{item?.payment_mode}</td>
      <td className='py-4 pl-4'>{}</td>
      <td className='py-4 pl-4'>{item?.completed_at}</td>
      <td className='py-4 pl-4'>{item?.transaction_id}</td>
      <td className='py-4 pl-4'>{item?.utr_number}</td>
      <td className='py-4 pl-4 text-base font-medium'>{item?.status}</td>
      <td className='py-4 pl-4'>
        {item?.status === RESPONSE_STATUS.PENDING ||
        item?.status === RESPONSE_STATUS.INITIATED ? (
          <button
            className='bg-darkBlue font-medium hover:scale-105 px-6 py-2 text-white rounded-md transition-all duration-all'
            onClick={() => {
              checkStatus(item?.id);
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
