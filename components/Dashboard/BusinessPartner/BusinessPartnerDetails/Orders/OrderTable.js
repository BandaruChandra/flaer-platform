'use client';

import { useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import OneOrder from './OneOrder';
import { DELIVERY_STATUS } from '../../../../../helpers/enums';

const OrderTable = ({ data }) => {
  const [currOrder, setCurrOrder] = useState();

  const handleOnClick = (order) => {
    setCurrOrder(order);
  };

  return (
    <>
      <button
        className={` ${
          currOrder ? 'block' : 'hidden'
        } border mb-4 border-darkBlue text-darkBlue hover:bg-darkBlue hover:scale-105 hover:text-white rounded-full p-2 transition-all duration-all flex justify-center items-center gap-2 mt-6`}
        onClick={() => {
          setCurrOrder();
        }}
      >
        <p>
          <IoMdArrowRoundBack size={28} />
        </p>
      </button>

      <h4 className='mb-4 mt-6 font-semibold text-2xl'>
        {currOrder ? 'Order Details' : 'Order List'}
      </h4>

      {currOrder ? (
        <OneOrder currOrder={currOrder} />
      ) : (
        <table className='min-w-full overflow-hidden border rounded-md shadow-lg shadow-light-blue mb-20 '>
          <thead className='capitalise font-normal bg-lightBlue pr-4 h-16 '>
            <tr>
              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start truncate'
              >
                order number
              </th>

              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start'
              >
                home owner
              </th>
              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start'
              >
                business partner
              </th>
              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start'
              >
                total amount
              </th>
              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start'
              >
                final amount
              </th>

              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start'
              >
                order line items
              </th>

              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start'
              >
                shipping address
              </th>

              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start'
              >
                status
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => {
              return (
                <RowContainer
                  key={item.id}
                  item={item}
                  handleOnClick={handleOnClick}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

const RowContainer = ({ item, handleOnClick }) => {
  return (
    <tr
      className={`border-b text-gray-700 hover:bg-blue-100 cursor-pointer h-16`}
      onClick={() => handleOnClick(item)}
    >
      <td className='pl-4'>{item?.order_number}</td>
      <td className='pl-4'>{item?.home_owner_details?.home_owner_name}</td>
      <td className='pl-4'>
        {item?.business_partner_details?.business_partner_name}
      </td>

      <td className='pl-4'>
        <p>
          <span className='text-sm'>₹</span> {item?.total_amount}
        </p>
      </td>
      <td className='pl-4'>
        <p>
          <span className='text-sm'>₹</span> {item?.final_amount}
        </p>
      </td>
      <td className='pl-4'>{item?.order_line_items?.length}</td>
      <td className='pl-4 max-w-[250px]'>{item?.shipping_address}</td>
      <td className='pl-4'>
        <p
          className={`${
            item?.status === DELIVERY_STATUS.DELIVERED ? 'text-offGreen' : ''
          } w-1/2 capitalize`}
        >
          {item?.status}
        </p>
      </td>
    </tr>
  );
};

export default OrderTable;
