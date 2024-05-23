const CartAttributesTable = ({ data }) => {
  return (
    <>
      <h4 className={`mt-12 mb-4 font-semibold text-2xl capitalize`}>
        Cart Attributes
      </h4>
      <table className='min-w-full overflow-hidden border rounded-md shadow-lg shadow-light-blue mb-10'>
        <thead className='capitalise font-normal bg-lightBlue pr-4 h-16 '>
          <tr>
            <th
              scope='col'
              className='font-medium capitalize pl-4 text-start truncate'
            >
              Id
            </th>
            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              Attribute Name
            </th>
            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              Attribute Type
            </th>
            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              Attribute amount
            </th>
            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              Attribute txn type
            </th>
            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              description
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return <RowContainer key={item.id} item={item} />;
          })}
        </tbody>
      </table>
    </>
  );
};

const RowContainer = ({ item }) => {
  return (
    <tr className={`border-b text-gray-700 h-16`}>
      <td className='pl-4'>{item?.id}</td>
      <td className='pl-4'>{item?.attribute_name}</td>
      <td className='pl-4'>{item?.attr_type}</td>
      <td className='pl-4'>
        <p>
          <span className='text-sm'>₹</span> {item?.attribute_amount}
        </p>
      </td>
      <td className='pl-4'>{item?.attr_txn_type}</td>
      <td className='pl-4'>{item?.description}</td>
    </tr>
  );
};

export default CartAttributesTable;
