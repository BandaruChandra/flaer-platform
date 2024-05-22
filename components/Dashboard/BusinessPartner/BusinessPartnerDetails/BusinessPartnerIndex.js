import React from 'react';
import PartnerUsers from './PartnerUsers';
import { BUSINESS_PARTNER_ROUTES } from '../../../../helpers/routes';
import Tabs from './Tabs';
import AccountDetails from './AccountDetails/Index';
import SiteLevelCashback from './SiteLevelCashback/Index';
import OrderLevelDiscount from './OrderLevelDiscount/Index';
import PeriodicLevelCashback from './PeriodicLevelCashback/Index';
import LoyaltyAccount from './LoyaltyAccount/Index';
import MembershipDiscount from './MembershipDiscount/Index';
import Orders from './Orders/Index';
import Quotation from './Quotation/Index';

function BusinessPartnerDetails({ url, id }) {
  return (
    <section className='mt-10 mb-40'>
      <h4 className='font-semibold text-4xl text-center mb-10 mt-10'>
        Business Partner
      </h4>

      <div>
        <Tabs url={url} id={id} />
      </div>

      <div className='px-4 border rounded-b-md min-h-[80vh] shadow-md'>
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
        ) : url === BUSINESS_PARTNER_ROUTES.LOYALTY_ACCOUNT ? (
          <LoyaltyAccount id={id} />
        ) : url === BUSINESS_PARTNER_ROUTES.MEMBERSHIP_DISCOUNT ? (
          <MembershipDiscount id={id} />
        ) : url === BUSINESS_PARTNER_ROUTES.ORDERS ? (
          <Orders id={id} />
        ) : url === BUSINESS_PARTNER_ROUTES.QUOTATION ? (
          <Quotation id={id} />
        ) : (
          ''
        )}
      </div>
    </section>
  );
}

export default BusinessPartnerDetails;
