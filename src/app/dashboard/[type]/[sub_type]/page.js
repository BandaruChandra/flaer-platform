import BusinessPartnerIndex from '../../../../../components/Dashboard/BusinessPartner/BusinessPartnerDetails/BusinessPartnerIndex';

function page({ params, searchParams }) {
  let url = `/dashboard/${params?.type}/${params.sub_type}`;

  return (
    <div>
      <h1 className='text-center text-3xl mt-10 font-medium text-darkBlue2'></h1>
      <BusinessPartnerIndex
        url={url}
        id={searchParams?.id}
        page={searchParams?.page}
      />
    </div>
  );
}

export default page;
