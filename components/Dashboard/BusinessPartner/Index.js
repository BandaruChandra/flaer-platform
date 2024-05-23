import React from 'react';
import {
  NEXT_PUBLIC_API_ENDPOINT,
  RESPONSE_STATUS,
} from '../../../helpers/enums';
import BusinessPartnersList from './BusinessPartnersList';

const getBusinessPartners = async () => {
  try {
    const response = await fetch(
      `${NEXT_PUBLIC_API_ENDPOINT}/flaer_platform/v1/platform/get_business_partners`,
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

async function BusinessPartner() {
  const data = await getBusinessPartners();

  return <BusinessPartnersList data={data?.data} />;
}

export default BusinessPartner;
