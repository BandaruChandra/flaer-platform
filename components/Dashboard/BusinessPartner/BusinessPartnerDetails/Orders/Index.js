import {
  NEXT_PUBLIC_API_ENDPOINT,
  RESPONSE_STATUS,
} from '../../../../../helpers/enums';
import OrderTable from './OrderTable';

const getOrders = async (id) => {
  try {
    const response = await fetch(
      `${NEXT_PUBLIC_API_ENDPOINT}/flaer_platform/v1/platform/get_orders?by_business_partner=1=${id}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );

    //VWA
    let res = await response.json();

    if (res?.status === RESPONSE_STATUS.SUCCESS) {
      return res;
    } else {
      console.log('error: ', res);
      return;
    }
  } catch (error) {
    console.error(error);
    return;
  }
};

async function Orders({ id }) {
  const data = await getOrders(id);

  return (
    <div>
      <OrderTable data={data?.data} />
    </div>
  );
}

export default Orders;
