import Link from 'next/link';
import { BUSINESS_PARTNER_ROUTES } from '../../../helpers/routes';

const PartnerRow = ({ data, lastElement }) => {
  return (
    <div
      className={`grid grid-cols-7 h-14 text-gray-700 items-center font-medium ${
        !lastElement ? 'border-b' : ''
      } `}
    >
      <div className='pl-4 text-start col-span-1'>{data?.id}</div>
      <div className='pl-4 text-start col-span-1'>{data?.name}</div>
      <div className='pl-4 text-start col-span-1'>{data?.email}</div>
      <div className='pl-4 text-start col-span-1'>{data?.phone_number}</div>
      <div className='pl-4 text-start col-span-1'>
        <RadioButton status={data?.is_verfied} />
      </div>
      <div className='pl-4 text-start col-span-1'>
        <RadioButton status={data?.is_active} />
      </div>
      <div className='text-start col-span-1'>
        <Link
          href={{
            pathname: BUSINESS_PARTNER_ROUTES.USERS_LIST,
            query: { id: data?.id },
          }}
        >
          <button className='bg-darkBlue text-white h-9 rounded-md hover:scale-105 duration-100 transition-all px-6'>
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

const RadioButton = ({ status }) => {
  return (
    <div className='w-36'>
      <input
        type={'checkbox'}
        checked={status}
        className='w-6 h-6 border-2 rounded-lg'
        // onChange={(e) => {
        //     handleOnChange(index, role, e.target.checked);
        // }}
      />
    </div>
  );
};

export default PartnerRow;
