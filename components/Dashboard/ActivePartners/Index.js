import ActivePartnersTable from './ActivePartnersTable';
import Pagination from '../../Helpers/Pagination';
import { DASHBOARD_ROUTES } from '../../../helpers/routes';
import { RESPONSE_STATUS } from '../../../helpers/enums';

const getActiveMembers = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flaer_platform/v1/platform/get_flaer_membership_active_partners`,
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

    if (res?.status === RESPONSE_STATUS.SUCCESS) {
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

async function ActivePartners() {
  let href = `${DASHBOARD_ROUTES.ACTIVE_MEMBERSHIPS_LIST}?`;

  let data = await getActiveMembers();

  return (
    <div className='w-full'>
      <ActivePartnersTable data={data?.data} />

      <Pagination
        pagesList={data?.meta?.total_pages}
        currPage={data?.meta?.current_page}
        href={href}
      />
    </div>
  );
}

export default ActivePartners;
