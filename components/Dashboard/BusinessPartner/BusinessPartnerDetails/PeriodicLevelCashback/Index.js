import React from 'react';
import { RESPONSE_STATUS } from '../../../../../helpers/enums';
import Header from '../Header';
import PeriodicCashback from './PeriodicCashback';

const getPeriodicLevelAmount = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flaer_platform/v1/platform/total_periodic_cashback_amount?business_partner_id=${id}`,
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

async function PeriodicLevelCashback({ id }) {
  const data = await getPeriodicLevelAmount(id);

  return (
    <div>
      <Header
        amount={data?.total_periodic_cashback_amount}
        heading={'Periodic Cashback'}
      />

      <div className='mt-6'>
        <h4 className='mb-4 font-semibold text-2xl'> Periodic Ledger </h4>
        <PeriodicCashback id={id} />
      </div>
    </div>
  );
}

export default PeriodicLevelCashback;
