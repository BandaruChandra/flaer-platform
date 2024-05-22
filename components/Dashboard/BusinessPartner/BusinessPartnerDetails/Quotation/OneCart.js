import React from 'react';
import CartLineItemsTable from './CartLineItemsTable';

function OneCart({ currCart }) {
  return (
    <div>
      <div className='flex gap-20 mb-6'>
        <BillingDetails
          business_partner_details={currCart?.business_partner_details}
          address={currCart?.bill_address}
        />
        <ShippingDetails
          home_owner_details={currCart?.home_owner_details}
          address={currCart?.shipping_address}
        />
        <SiteDetails site_details={currCart?.site_details} />
      </div>

      <CartLineItemsTable data={currCart?.cart_line_items} />

      <div className='flex gap-10 mb-20'>
        <TopLevelData currCart={currCart} />
        {/* <PaymentDetails payment_details={currCart?.payment_details?.[0]} /> */}
        <CartAttributes cart_attributes={currCart?.cart_attributes?.[0]} />
      </div>
    </div>
  );
}

const BillingDetails = ({ business_partner_details, address }) => {
  return (
    <div className='bg-lightBlue rounded-md p-4'>
      <div className='flex gap-2'>
        <p className='w-44'> Business Partner Id </p> :
        <p> {business_partner_details?.id} </p>
      </div>
      <div className='flex gap-2'>
        <p className='w-44'> Business Partner Name </p> :
        <p>{business_partner_details?.business_partner_name}</p>
      </div>
      <div className='flex gap-2'>
        <p className='w-44'> Billing Address </p> :<p>{address}</p>
      </div>
    </div>
  );
};

const ShippingDetails = ({ home_owner_details, address }) => {
  return (
    <div className='bg-lightBlue rounded-md p-4'>
      <div className='flex gap-2'>
        <p className='w-44'> Home Owner Id </p> :
        <p> {home_owner_details?.id} </p>
      </div>
      <div className='flex gap-2'>
        <p className='w-44'> Home Owner Name </p> :
        <p>{home_owner_details?.home_owner_name}</p>
      </div>

      <div className='flex gap-2'>
        <p className='w-44'> Shipping Address </p> :<p>{address}</p>
      </div>
    </div>
  );
};

function TopLevelData({ currCart }) {
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
    <div className='bg-lightBlue rounded-md p-4 max-w-fit'>
      <h1 className='font-semibold mb-1 border-b-2 border-b-darkBlue2 max-w-fit'>
        Top Level Data
      </h1>
      {Object.keys(currCart)?.map((item, ind) => {
        if (notNeeded.includes(item)) return;

        return (
          <div key={ind} className='flex gap-4 font-medium  px-2 py-1.5'>
            <p className='w-36 capitalize'>{item?.split('_')?.join(' ')}</p>:
            <p className=''> {currCart?.[item]}</p>
          </div>
        );
      })}
    </div>
  );
}

const SiteDetails = ({ site_details }) => {
  return (
    <div className='bg-lightBlue rounded-md p-4 max-w-fit'>
      <h1 className='font-semibold mb-1 border-b-2 border-b-darkBlue2 max-w-fit'>
        Site Details
      </h1>

      <div>
        {Object.keys(site_details)?.map((item, ind) => {
          return (
            <div key={ind} className='flex gap-4 even:bg-lightBlue'>
              <p className='w-36 capitalize'>{item?.split('_')?.join(' ')}</p>:
              <p className=''> {site_details?.[item]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CartAttributes = ({ cart_attributes }) => {
  return Object.keys(cart_attributes || {})?.length ? (
    <div className='bg-lightBlue rounded-md p-4 max-w-fit'>
      <h1 className='font-semibold mb-1 border-b-2 border-b-darkBlue2 max-w-fit'>
        Cart Attributes
      </h1>

      {Object.keys(cart_attributes)?.map((item, ind) => {
        return (
          <div
            key={ind}
            className='flex gap-4 font-medium even:bg-lightBlue px-2 py-1.5'
          >
            <p className='w-36 capitalize'>{item?.split('_')?.join(' ')}</p>:
            <p className=''> {cart_attributes?.[item]}</p>
          </div>
        );
      })}
    </div>
  ) : (
    ''
  );
};

export default OneCart;
