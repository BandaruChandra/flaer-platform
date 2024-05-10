import DashboardIndex from '../../../../components/Dashboard/DashboardIndex';

function page({ params }) {
  return (
    <div className='text-red-500'>
      <DashboardIndex type={params?.type} />
    </div>
  );
}

export default page;
