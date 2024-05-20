import React from 'react';
import PartnerUsers from './PartnerUsers';
import { BUSINESS_PARTNER_ROUTES } from '../../../../helpers/routes';
import Toggler from './Toggler';
import AccountDetails from './AccountDetails/Index';
import SiteLevelCashback from './SiteLevelCashback/Index';
import OrderLevelCashback from './OrderLevelCashback/Index';

function BusinessPartnerDetails({ url, id }) {
  return (
    <section className='min-h-[80vh] mt-10'>
      <div className='mt-20 mb-12'>
        <Toggler url={url} id={id} />
      </div>

      <div>
        {url === BUSINESS_PARTNER_ROUTES.USERS_LIST ? (
          <PartnerUsers id={id} />
        ) : url === BUSINESS_PARTNER_ROUTES.ACCOUNT_DETAILS ? (
          <AccountDetails id={id} />
        ) : url === BUSINESS_PARTNER_ROUTES.SITE_LEVEL_CASHBACK ? (
          <SiteLevelCashback id={id} />
        ) : url === BUSINESS_PARTNER_ROUTES.ORDER_LEVEL_CASHBACK ? (
          <OrderLevelCashback id={id} />
        ) : (
          ''
        )}
      </div>
    </section>
  );
}

export default BusinessPartnerDetails;
