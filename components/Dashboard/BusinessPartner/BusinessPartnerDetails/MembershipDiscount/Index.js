import React from 'react';
import Header from '../Header';
import MembershipLedger from './MembershipLedger';

const getMembershipAmount = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flaer_platform/v1/platform/total_membership_discounts?business_partner_id=${id}`,
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

    if (res) {
      return res;
    } else {
      console.log('error: ', res);
      return;
    }
  } catch (error) {
    console.error(error);
    return;
  }
};

async function MembershipDiscount({ id }) {
  const data = await getMembershipAmount(id);

  return (
    <div>
      <Header
        heading={'Membership Discount'}
        amount={data?.total_membership_discount_amount}
      />

      <div className='mt-6'>
        <h4 className='mb-4 font-semibold text-2xl'> Membership Ledger </h4>
        <MembershipLedger id={id} />
      </div>
    </div>
  );
}

export default MembershipDiscount;
