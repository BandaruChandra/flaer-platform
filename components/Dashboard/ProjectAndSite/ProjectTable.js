const ProjectTable = ({ data }) => {
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
            project name
          </th>
          <th scope='col' className='font-medium capitalize pl-4 text-start'>
            project code
          </th>

          <th scope='col' className='font-medium capitalize pl-4 text-start'>
            address
          </th>
          <th scope='col' className='font-medium capitalize pl-4 text-start'>
            project type
          </th>
          <th scope='col' className='font-medium capitalize pl-4 text-start'>
            latitude
          </th>
          <th scope='col' className='font-medium capitalize pl-4 text-start'>
            longitude
          </th>
          <th scope='col' className='font-medium capitalize pl-4 text-start'>
            cities
          </th>
          <th scope='col' className='font-medium capitalize pl-4 text-start'>
            cluster
          </th>
          <th scope='col' className='font-medium capitalize pl-4 text-start'>
            territory
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
      <td className='pl-4'>{item?.project_name}</td>
      <td className='pl-4'>{item?.project_code}</td>
      <td className='pl-4'>{item?.address}</td>
      <td className='pl-4'>{item?.project_type}</td>
      <td className='pl-4'>{item?.latitude}</td>
      <td className='pl-4'>{item?.longitude}</td>
      <td className='pl-4'>{item?.cities}</td>
      <td className='pl-4 min-w-fit truncate'>{item?.cluster}</td>
      <td className='pl-4 pr-4 min-w-fit truncate'>{item?.territory}</td>
    </tr>
  );
};

export default ProjectTable;
