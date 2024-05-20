import React from 'react';
import { RESPONSE_STATUS } from '../../../../../helpers/enums';
import Header from './Header';
import SiteLevelLedger from './SiteLevelLedger';

const getSiteLevelAmount = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flaer_platform/v1/platform/total_site_level_cashback_amount?business_partner_id=${id}`,
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

async function AccountDetails({ id }) {
  const data = await getSiteLevelAmount(id);

  return (
    <div>
      <Header data={data} />
      <SiteLevelLedger id={id} />
    </div>
  );
}

export default AccountDetails;
