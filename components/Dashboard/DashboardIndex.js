import React from 'react';
import { DASHBOARD_ROUTES } from '../../helpers/routes';
import ActivePartners from './ActivePartners/Index';
import BusinessPartner from './BusinessPartner/Index';
import ProjectAndSite from './ProjectAndSite/Index';
import Logout from './Logout/Index';
import CashbackLevels from './CashbacksLevels/Index';
import OrderLevelDiscount from './OrderLevelDiscount/Index';

function DashboardIndex({ url }) {
  return (
    <div className='min-h-[80vh] my-10'>
      {url === DASHBOARD_ROUTES.ACTIVE_MEMBERSHIPS_LIST ? (
        <ActivePartners />
      ) : url === DASHBOARD_ROUTES.BUSINESS_PARTNERS ? (
        <BusinessPartner />
      ) : url === DASHBOARD_ROUTES.PROJECTS_AND_SITES ? (
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
