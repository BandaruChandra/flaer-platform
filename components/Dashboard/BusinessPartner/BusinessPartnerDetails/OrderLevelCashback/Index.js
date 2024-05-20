import React from 'react';
import { RESPONSE_STATUS } from '../../../../../helpers/enums';
import Header from './Header';
import OrderLevelLedger from './OrderLevelLedger';

const getOrderLevelAmount = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flaer_platform/v1/platform/total_order_level_discounts?business_partner_id=${id}`,
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
  const data = await getOrderLevelAmount(id);

  return (
    <div>
      <Header data={data} />
      <OrderLevelLedger id={id} />
    </div>
  );
}

export default AccountDetails;
