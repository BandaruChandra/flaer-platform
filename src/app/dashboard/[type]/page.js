import DashboardIndex from '../../../../components/Dashboard/DashboardIndex';
import { DASHBOARD_MENU_LIST } from '../../../../helpers/enums';

// export async function generateStaticParams() {
//   return [
//     // { type: [] },
//     { type: 'active-members-list' },
//     { type: 'account-recharge' },
//     { type: 'projects-and-sites' },
//     { type: 'business-partner' },
//     { type: 'logout' },
//   ];
// }

function page({ params }) {
  let url = `/dashboard/${params?.type}`;

  let currRoute = DASHBOARD_MENU_LIST?.filter((item) => item?.link === url);

  return (
    <div>
      <h1 className='text-center text-3xl mt-10 font-medium text-darkBlue2'>
        {currRoute?.[0]?.name}
      </h1>
      <DashboardIndex url={url} />
    </div>
  );
}

export default page;
