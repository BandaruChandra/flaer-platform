import React from 'react';
import { RESPONSE_STATUS } from '../../../../../helpers/enums';
import Header from '../Header';
import LoyaltyLedger from './LoyaltyLedger';

const getLoyaltyAmount = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flaer_platform/v1/platform/get_loyalty_amount?business_partner_id=${id}`,
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

    if (res?.status === RESPONSE_STATUS.SUCCESS) {
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

async function LoyaltyPoints({ id }) {
  const data = await getLoyaltyAmount(id);

  return (
    <div>
      <Header heading={'Loyalty Amount'} amount={data?.loyalty_amount} />
      <div className='mt-6'>
        <h4 className='mb-4 font-semibold text-2xl'> Loyalty Ledger </h4>
        <LoyaltyLedger id={id} />
      </div>
    </div>
  );
}

export default LoyaltyPoints;
