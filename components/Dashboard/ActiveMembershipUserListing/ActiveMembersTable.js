const ActiveMembershipTable = ({ data }) => {
  return (
    <table className='min-w-full overflow-hidden'>
      <thead className='capitalise font-normal bg-lightBlue pr-4 h-16 '>
        <tr>
          <th scope='col' className='font-medium pl-4 text-start truncate'>
            ID
          </th>
          <th scope='col' className='font-medium pl-4 text-start'>
            Name
          </th>
          <th scope='col' className='font-medium pl-4 text-start'>
            Phone Number
          </th>

          <th scope='col' className='font-medium pl-4 text-start'>
            Email
          </th>
          <th scope='col' className='font-medium pl-4 text-start'>
            Memb. Type
          </th>
          <th scope='col' className='font-medium pl-4 text-start'>
            Memb. Code
          </th>
          <th scope='col' className='font-medium pl-4 text-start'>
            Memb. Cycle
          </th>
          <th scope='col' className='font-medium pl-4 text-start'>
            Total Memb. Discount
          </th>
          <th scope='col' className='font-medium pl-4 text-start'>
            Start Date
          </th>
          <th scope='col' className='font-medium pl-4 text-start'>
            End Date
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.data?.map((item) => {
          return <RowContainer key={item.id} item={item} />;
        })}
      </tbody>
    </table>
  );
};

const RowContainer = ({ item }) => {
  return (
    <tr
      key={item.id}
      className={`border-b text-gray-700 even:bg-gray-100 odd:bg-white h-16`}
    >
      <td className='pl-4'>{item.business_partner?.id}</td>
      <td className='pl-4'>{item.business_partner?.name}</td>
      <td className='pl-4'>{item.business_partner?.phone_number}</td>
      <td className='pl-4'>{item.business_partner?.email || '--'}</td>
      <td className='pl-4'>{item.flaer_membership?.name}</td>
      <td className='pl-4'>{item.flaer_membership?.membership_code}</td>
      <td className='pl-4'>{item.flaer_membership?.membership_cycle}</td>
      <td className='pl-4'>
        {item.flaer_membership?.total_membership_discount}
      </td>
      <td className='pl-4 min-w-fit truncate'>{item.start_date}</td>
      <td className='pl-4 pr-4 min-w-fit truncate'>{item.end_date}</td>
    </tr>
  );
};

export default ActiveMembershipTable;
