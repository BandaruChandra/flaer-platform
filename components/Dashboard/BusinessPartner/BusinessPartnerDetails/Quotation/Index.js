import { RESPONSE_STATUS } from '../../../../../helpers/enums';
import CartTable from './CartTable';

const getCarts = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/flaer_platform/v1/platform/get_carts?by_business_partner=1=${id}`,
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

async function Quotation({ id }) {
  const data = await getCarts(id);

  return (
    <div>
      <CartTable data={data?.data} />
    </div>
  );
}

export default Quotation;
