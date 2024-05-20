import React from 'react';
import { RESPONSE_STATUS } from '../../../../../helpers/enums';

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

    // console.log('response: ', response);

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

  console.log('data: ', data);

  return <div>AccountDetails</div>;
}

export default AccountDetails;
