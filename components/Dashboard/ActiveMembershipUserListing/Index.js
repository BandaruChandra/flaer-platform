import React from 'react';
import ActiveMembershipTable from './ActiveMembersTable';
import data from '../../../data/active_membership.json';
import Pagination from '../../Helpers/Pagination';
import { DASHBOARD_ROUTES } from '../../../helpers/routes';

function ActiveMembershipList() {
  let href = `${DASHBOARD_ROUTES.ACTIVE_MEMBERSHIPS_LIST}?`;

  return (
    <div className='w-full'>
      <div className='border rounded-md shadow-lg shadow-light-blue mb-20 '>
        <ActiveMembershipTable data={data} />
      </div>

      <Pagination
        pagesList={data?.meta?.total_pages}
        currPage={data?.meta?.current_page}
        href={href}
      />
    </div>
  );
}

export default ActiveMembershipList;
