import BusinessPartnerLayout from '../../../../../components/Dashboard/BusinessPartner/BusinessPartnerDetails/BusinessPartnerLayout';

function page({ params, searchParams }) {
  let url = `/dashboard/${params?.type}/${params.sub_type}`;

  return (
    <div>
      <h1 className='text-center text-3xl mt-10 font-medium text-darkBlue2'></h1>
      <BusinessPartnerLayout url={url} id={searchParams?.id} />
    </div>
  );
}

export default page;
