const CartLineItemsTable = ({ data }) => {
  return (
    <>
      <h4 className={`mt-12 mb-4 font-semibold text-2xl capitalize`}>
        cart Line items
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
              SKU Name
            </th>
            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              MRP
            </th>
            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              Quantity
            </th>
            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              Total amount
            </th>

            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              Discount Amount
            </th>

            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              Cashback Amount
            </th>

            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              Taxable Amount
            </th>
            <th scope='col' className='font-medium capitalize pl-4 text-start'>
              Final Amount
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
      <td className='pl-4'>{item?.product_sku_details?.sku_name}</td>
      <td className='pl-4'>
        <p>
          <span className='text-sm'>₹</span> {item?.mrp}
        </p>
      </td>
      <td className='pl-4'>{item?.quantity}</td>

      <td className='pl-4'>
        <p>
          <span className='text-sm'>₹</span> {item?.total_amount}
        </p>
      </td>
      <td className='pl-4'>
        <p>
          <span className='text-sm'>₹</span> {item?.discount_amount}
        </p>
      </td>
      <td className='pl-4'>
        <p>
          <span className='text-sm'>₹</span> {item?.cashback_amount}
        </p>
      </td>
      <td className='pl-4'>
        <p>
          <span className='text-sm'>₹</span> {item?.taxable_amount}
        </p>
      </td>
      <td className='pl-4'>
        <p>
          <span className='text-sm'>₹</span> {item?.final_amount}
        </p>
      </td>
    </tr>
  );
};

export default CartLineItemsTable;
