import React from 'react';
import CartLineItemsTable from './CartLineItemsTable';
import CartAttributesTable from './CartAttributesTable';

function OneCart({ currCart }) {
  return (
    <div className='mt-6'>
      <div className='flex gap-20 mb-6'>
        <Summary currCart={currCart} />

        <div className='w-full'>
          <HomeOwnerAndSite
            home_owner_details={currCart?.home_owner_details}
            address={currCart?.shipping_address}
            site_details={currCart?.site_details}
          />

          <BusinessPartner
            data={currCart?.business_partner_details}
            address={currCart?.bill_address}
          />
        </div>
      </div>
      <CartLineItemsTable data={currCart?.cart_line_items} />
      <CartAttributesTable data={currCart?.cart_attributes} />
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
      <div className='border rounded-md max-w-fit '>
        {Object.keys(currCart)?.map((item, ind) => {
          if (notNeeded.includes(item)) return;

          return (
            <div key={ind} className='flex gap-4 px-4 py-1.5 border-b'>
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

const BusinessPartner = ({ data, address }) => {
  return (
    <div className=''>
      <h4 className={`mb-2 font-semibold text-xl capitalize`}>
        Business Partner Details
      </h4>

      <table className='min-w-full border rounded-md shadow-lg shadow-light-blue mb-10'>
        <thead className='capitalise font-normal bg-lightBlue pr-4 h-14 '>
          <tr>
            <th
              scope='col'
              className='font-medium capitalize pl-4 text-start truncate'
            >
              Id
            </th>

            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              Name
            </th>
            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              Bill Address
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={`border-b text-gray-700 h-14`}>
            <td className='pl-4'>{data?.id}</td>
            <td className='pl-4'>{data?.business_partner_name}</td>
            <td className='pl-4'>{address}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const HomeOwnerAndSite = ({ home_owner_details, address, site_details }) => {
  return (
    <section className='w-full'>
      <h4 className={`mb-2 font-semibold text-xl capitalize`}>
        Home Owner Details
      </h4>
      <table className='min-w-full border rounded-md shadow-lg shadow-light-blue mb-10'>
        <thead className='capitalise font-normal bg-lightBlue pr-4 h-14 '>
          <tr>
            <th
              scope='col'
              className='font-medium capitalize pl-4 text-start truncate'
            >
              Id
            </th>

            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              Name
            </th>
            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              Shipping Address
            </th>
            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              flat number
            </th>

            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              Block
            </th>

            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              Floor
            </th>

            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              site type
            </th>
          </tr>
        </thead>
        <tbody>
          <RowContainer
            home_owner_details={home_owner_details}
            address={address}
            site_details={site_details}
          />
        </tbody>
      </table>
    </section>
  );
};

const RowContainer = ({ home_owner_details, address, site_details }) => {
  return (
    <tr className={`border-b text-gray-700 h-14`}>
      <td className='pl-4'>{home_owner_details?.id}</td>
      <td className='pl-4'>{home_owner_details?.home_owner_name}</td>
      <td className='pl-4'>{address}</td>
      <td className='pl-4'>{site_details?.flat_number}</td>
      <td className='pl-4'>{site_details?.block}</td>
      <td className='pl-4'>{site_details?.floor_number}</td>
      <td className='pl-4'>{site_details?.site_type}</td>
    </tr>
  );
};

export default OneCart;
