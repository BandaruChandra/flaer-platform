import React from 'react';
import { DASHBOARD_ROUTES } from '../../helpers/routes';
import ActiveMembershipList from './ActiveMembershipUserListing/Index';
import PartnerAndPartnerUserListing from './PartnerAndPartnerUserListing/Index';
import AccountRecharge from './AccountRecharge/Index';
import BusinessPartner from './BusinessPartner/Index';
import ProjectAndSite from './ProjectAndSite/Index';
import Logout from './Logout/Index';
import CashbackLevels from './CashbacksLevels/Index';
import OrderLevelDiscount from './OrderLevelDiscount/Index';

function DashboardIndex({ url }) {
  return (
    <div className='min-h-[80vh] mt-10'>
      {url === DASHBOARD_ROUTES.ACTIVE_MEMBERSHIPS_LIST ? (
        <ActiveMembershipList />
      ) : url === DASHBOARD_ROUTES.PARTNERS_AND_PARTNER_USERS_LIST ? (
        <PartnerAndPartnerUserListing />
      ) : url === DASHBOARD_ROUTES.ACCOUNT_RECHARGE ? (
        <AccountRecharge />
      ) : url === DASHBOARD_ROUTES.UPDATE_BUSINESS_PARTNER ? (
        <BusinessPartner />
      ) : url === DASHBOARD_ROUTES.PROJECT_AND_SITE ? (
        <ProjectAndSite />
      ) : url === DASHBOARD_ROUTES.LOGOUT ? (
        <Logout />
      ) : url === DASHBOARD_ROUTES.CASHBACKS_LEVELS ? (
        <CashbackLevels />
      ) : url === DASHBOARD_ROUTES.ORDER_LEVEL_DISCOUNTS ? (
        <OrderLevelDiscount />
      ) : (
        ''
      )}
    </div>
  );
}
export default DashboardIndex;
