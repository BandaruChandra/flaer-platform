import BusinessPartnerIndex from '../../../../../components/Dashboard/BusinessPartner/BusinessPartnerDetails/BusinessPartnerIndex';

// export async function generateStaticParams() {
//   return [
//     { sub_type: '' },
//     { sub_type: 'users-list' },
//     { sub_type: 'recharge' },
//     { sub_type: 'account-details' },
//     { sub_type: 'site-level-cashback' },
//     { sub_type: 'order-level-discount' },
//     { sub_type: 'membership-discount' },
//     { sub_type: 'periodic-cashback' },
//     { sub_type: 'loyalty-account' },
//     { sub_type: 'orders' },
//     { sub_type: 'quotation' },
//   ];
// }

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
