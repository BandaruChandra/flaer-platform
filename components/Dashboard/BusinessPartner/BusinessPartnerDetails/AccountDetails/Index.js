import React from 'react';
import { RESPONSE_STATUS } from '../../../../../helpers/enums';
import Header from '../Header';
import AccountLedger from './AccountLedger';

const getAccountDetails = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flaer_platform/v1/platform/get_account_amount?business_partner_id=${id}`,
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
      return res;
    } else {
      console.log('error: ', res);
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

async function AccountDetails({ id }) {
  const data = await getAccountDetails(id);

  return (
    <div>
      <Header heading={'Account Balance'} amount={data?.account_amount} />

      <div className='mt-10'>
        <h4 className='mb-4 font-semibold text-2xl'> Account Ledger </h4>
        <AccountLedger id={id} />
      </div>
    </div>
  );
}

export default AccountDetails;
