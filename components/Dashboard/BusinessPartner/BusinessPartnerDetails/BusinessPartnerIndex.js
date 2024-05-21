import React from 'react';
import PartnerUsers from './PartnerUsers';
import { BUSINESS_PARTNER_ROUTES } from '../../../../helpers/routes';
import Toggler from './Toggler';
import AccountDetails from './AccountDetails/Index';
import SiteLevelCashback from './SiteLevelCashback/Index';
import OrderLevelDiscount from './OrderLevelDiscount/Index';
import PeriodicLevelCashback from './PeriodicLevelCashback/Index';
import LoyaltyPoints from './LoyaltyPoints/Index';
import MembershipDiscount from './MembershipDiscount/Index';

function BusinessPartnerDetails({ url, id }) {
  return (
    <section className='min-h-[80vh] mt-10 mb-40 border rounded-md shadow-md '>
      <div className='mb-12'>
        <Toggler url={url} id={id} />
      </div>

      <div className='px-4'>
        {url === BUSINESS_PARTNER_ROUTES.USERS_LIST ? (
          <PartnerUsers id={id} />
        ) : url === BUSINESS_PARTNER_ROUTES.ACCOUNT_DETAILS ? (
          <AccountDetails id={id} />
        ) : url === BUSINESS_PARTNER_ROUTES.SITE_LEVEL_CASHBACK ? (
          <SiteLevelCashback id={id} />
        ) : url === BUSINESS_PARTNER_ROUTES.ORDER_LEVEL_DISCOUNT ? (
          <OrderLevelDiscount id={id} />
        ) : url === BUSINESS_PARTNER_ROUTES.PERIODIC_LEVEL_CASHBACK ? (
          <PeriodicLevelCashback id={id} />
        ) : url === BUSINESS_PARTNER_ROUTES.LOYALTY_POINTS ? (
          <LoyaltyPoints id={id} />
        ) : url === BUSINESS_PARTNER_ROUTES.MEMBERSHIP_DISCOUNT ? (
          <MembershipDiscount id={id} />
        ) : (
          ''
        )}
      </div>
    </section>
  );
}

export default BusinessPartnerDetails;
