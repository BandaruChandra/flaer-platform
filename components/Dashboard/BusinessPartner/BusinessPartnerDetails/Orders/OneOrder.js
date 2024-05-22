import React from 'react';
import OrderLineItemsTable from './OrderLineItemsTable';

function OneOrder({ currOrder }) {
  return (
    <div>
      <div className='flex gap-20 mb-6'>
        <BillingDetails
          business_partner_details={currOrder?.business_partner_details}
          address={currOrder?.bill_address}
        />
        <ShippingDetails
          home_owner_details={currOrder?.home_owner_details}
          address={currOrder?.shipping_address}
        />
      </div>

      <OrderLineItemsTable data={currOrder?.order_line_items} />

      <div className='flex gap-10 mb-20'>
        <TopLevelData currOrder={currOrder} />
        <PaymentDetails payment_details={currOrder?.payment_details?.[0]} />
        <OrderAttributes order_attributes={currOrder?.order_attributes?.[0]} />
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

function TopLevelData({ currOrder }) {
  let notNeeded = [
    'home_owner_details',
    'site_details',
    'business_partner_details',
    'order_attributes',
    'order_line_items',
    'payment_details',
    'shipping_address',
    'bill_address',
  ];

  return (
    <div className='bg-lightBlue rounded-md p-4 max-w-fit'>
      <h1 className='font-semibold mb-1 border-b-2 border-b-darkBlue2 max-w-fit'>
        Top Level Data
      </h1>
      {Object.keys(currOrder)?.map((item, ind) => {
        if (notNeeded.includes(item)) return;

        return (
          <div key={ind} className='flex gap-4 font-medium  px-2 py-1.5'>
            <p className='w-36 capitalize'>{item?.split('_')?.join(' ')}</p>:
            <p className=''> {currOrder?.[item]}</p>
          </div>
        );
      })}
    </div>
  );
}

const PaymentDetails = ({ payment_details }) => {
  return (
    <div className='bg-lightBlue rounded-md p-4 max-w-fit'>
      <h1 className='font-semibold mb-1 border-b-2 border-b-darkBlue2 max-w-fit'>
        Payment Details
      </h1>

      {Object.keys(payment_details)?.map((item, ind) => {
        return (
          <div
            key={ind}
            className='flex gap-4 font-medium even:bg-lightBlue px-2 py-1.5'
          >
            <p className='w-36 capitalize'>{item?.split('_')?.join(' ')}</p>:
            <p className=''> {payment_details?.[item]}</p>
          </div>
        );
      })}
    </div>
  );
};

const OrderAttributes = ({ order_attributes }) => {
  return (
    <div className='bg-lightBlue rounded-md p-4 max-w-fit'>
      <h1 className='font-semibold mb-1 border-b-2 border-b-darkBlue2 max-w-fit'>
        Order Attributes
      </h1>

      {Object.keys(order_attributes)?.map((item, ind) => {
        return (
          <div
            key={ind}
            className='flex gap-4 font-medium even:bg-lightBlue px-2 py-1.5'
          >
            <p className='w-36 capitalize'>{item?.split('_')?.join(' ')}</p>:
            <p className=''> {order_attributes?.[item]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default OneOrder;
