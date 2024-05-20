const SiteTable = ({ data }) => {
  return (
    <table className='min-w-full overflow-hidden border rounded-md shadow-lg shadow-light-blue mb-20 '>
      <thead className='capitalise font-normal bg-lightBlue pr-4 h-16 '>
        <tr>
          <th
            scope='col'
            className='font-medium capitalize pl-4 text-start truncate'
          >
            ID
          </th>
          <th scope='col' className='font-medium capitalize pl-4 text-start'>
            Flat Number
          </th>
          <th scope='col' className='font-medium capitalize pl-4 text-start'>
            Block
          </th>

          <th scope='col' className='font-medium capitalize pl-4 text-start'>
            Floor Number
          </th>
          <th scope='col' className='font-medium capitalize pl-4 text-start'>
            site type
          </th>
          <th scope='col' className='font-medium capitalize pl-4 text-start'>
            no. of flat
          </th>
          <th scope='col' className='font-medium capitalize pl-4 text-start'>
            site size
          </th>
          <th scope='col' className='font-medium capitalize pl-4 text-start'>
            address1
          </th>
          <th scope='col' className='font-medium capitalize pl-4 text-start'>
            address2
          </th>
          <th scope='col' className='font-medium capitalize pl-4 text-start'>
            city
          </th>
          <th scope='col' className='font-medium capitalize pl-4 text-start'>
            PIN Code
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
      <td className='pl-4'>{item?.id}</td>
      <td className='pl-4'>{item?.flat_number}</td>
      <td className='pl-4'>{item?.block}</td>
      <td className='pl-4'>{item?.floor_number}</td>
      <td className='pl-4'>{item?.site_type}</td>
      <td className='pl-4'>{item?.no_of_flat}</td>
      <td className='pl-4'>{item?.site_size}</td>
      <td className='pl-4'>{item?.address1}</td>
      <td className='pl-4 min-w-fit truncate'>{item?.address2}</td>
      <td className='pl-4 pr-4 min-w-fit truncate'>{item?.city}</td>
      <td className='pl-4 pr-4 min-w-fit truncate'>{item?.pin_code}</td>
    </tr>
  );
};

export default SiteTable;
