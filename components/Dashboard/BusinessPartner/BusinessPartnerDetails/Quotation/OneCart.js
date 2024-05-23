import React from 'react';
import CartLineItemsTable from './CartLineItemsTable';
import CartAttributesTable from './CartAttributesTable';
import { numberToInr } from '../../../../../helpers/MathHelpers';

function OneCart({ currCart }) {
  return (
    <div className='mt-6'>
      <div className='flex gap-20 mb-6'>
        <Summary currCart={currCart} />

        <div className='w-full'>
          <HomeOwnerAndBusinessPartner
            home_owner_details={currCart?.home_owner_details}
            business_partner_details={currCart?.business_partner_details}
          />

          <SiteDetails data={currCart?.site_details} />
        </div>
      </div>
      <CartAttributes data={currCart?.cart_attributes} />
      <CartLineItemsTable data={currCart?.cart_line_items} />
    </div>
  );
}

function Summary({ currCart }) {
  let notNeeded = [
    'home_owner_details',
    'site_details',
    'business_partner_details',
    'cart_attributes',
    'cart_line_items',
    'payment_details',
    'shipping_address',
    'bill_address',
  ];

  return (
    <div className='mb-10'>
      <h4 className='font-semibold mb-2 text-xl'> Summary </h4>
      <div className='border rounded-md max-w-fit shadow-xl'>
        {Object.keys(currCart)?.map((item, ind) => {
          if (notNeeded.includes(item)) return;

          return (
            <div
              key={ind}
              className='flex gap-4 px-6 py-2 border-b even:bg-lightBlue'
            >
              <p className='w-36 capitalize'>{item?.split('_')?.join(' ')}</p>

              {item === 'status' || item === 'id' ? (
                <p className='capitalize'> {currCart?.[item]}</p>
              ) : (
                <p className='font-medium truncate min-w-fit'>
                  <span className='text-sm'>₹</span> {currCart?.[item]}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const HomeOwnerAndBusinessPartner = ({
  home_owner_details,
  business_partner_details,
}) => {
  return (
    <section className='w-full flex gap-20 mt-8 '>
      <div className='text-darkBlue2 col-span-1'>
        <p> Home Owner Name </p>
        <h1 className='text-xl font-semibold'>
          {home_owner_details?.home_owner_name}
        </h1>
      </div>

      <div className='text-darkBlue2 col-span-1'>
        <p> Partner Name </p>
        <h1 className='text-xl font-semibold'>
          {business_partner_details?.business_partner_name}
        </h1>
      </div>
    </section>
  );
};

const SiteDetails = ({ data }) => {
  return (
    <div className='mt-16'>
      <h4 className='font-semibold mb-2 text-xl text-gray-400'>
        {' '}
        Site Details{' '}
      </h4>

      <section className='flex gap-10 bg-lightBluep-4 max-w-fit rounded-md '>
        {Object.keys(data)?.map((item, ind) => {
          return (
            <div key={ind} className='text-darkBlue2 col-span-1'>
              <p className='capitalize'>
                {' '}
                {item?.includes('_') ? item?.split('_').join(' ') : item}{' '}
              </p>
              <h1 className='text-xl font-semibold'>{data[item]}</h1>
            </div>
          );
        })}
      </section>
    </div>
  );
};

const CartAttributes = ({ data }) => {
  return (
    <div className=''>
      <h4 className={`mt-4 mb-4 font-semibold text-2xl capitalize`}>
        Cart Attributes
      </h4>

      <section className='grid grid-cols-4 gap-4 mt-4 mb-20 '>
        {data?.map((item, ind) => {
          return (
            <div key={ind} className='text-darkBlue2 col-span-1'>
              <p> {item?.description} </p>
              <h1 className='text-3xl font-bold'>
                <span className='text-2xl'> ₹ </span>
                {item?.attribute_amount
                  ? numberToInr(item?.attribute_amount)
                  : '0.00'}
              </h1>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default OneCart;
