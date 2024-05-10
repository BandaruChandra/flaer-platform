import DashboardIndex from '../../../../components/Dashboard/DashboardIndex';

function page({ params }) {
  console.log('params: ', params);

  return (
    <div className='text-black'>
      <DashboardIndex type={params?.type} />
    </div>
  );
}

export default page;
