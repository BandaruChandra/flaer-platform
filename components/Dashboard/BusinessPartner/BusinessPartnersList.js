'use client';
import Link from 'next/link';
import { BUSINESS_PARTNER_ROUTES } from '../../../helpers/routes';
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { LuSearch } from 'react-icons/lu';

const BusinessPartnersList = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [fuseData, setFuseData] = useState([]);

  const optionsFuse = {
    includeScore: false,
    keys: ['name', 'phone_number', 'email', 'roles'],
  };

  const fuse = new Fuse(fuseData, optionsFuse);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
      setFuseData(data);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // useEffect(() => {
  //   if (!data?.length) return;

  //   let results = [];
  //   if (searchQuery?.length !== 0) {
  //     results = fuse.search(searchQuery);
  //     results = results.map((item) => item.item);

  //     // results = filterData(results);
  //   } else {
  //     results = data;
  //   }

  //   if (results?.length) {
  //     setFilteredData([...results]);
  //   } else {
  //     setFilteredData([]);
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchQuery, data, fuseData]);

  const handleInputChange = (e) => {
    let value = '';
    if (e.target.value) {
      value = e.target.value;
    }
    setSearchQuery(value);
  };

  return (
    <div>
      <div className='pb-0 w-96 mb-10 relative'>
        <input
          className='focus:outline-none w-full h-12 px-4 border border-borderGray rounded'
          placeholder={'Search Partners'}
          type={'text'}
          name={'search'}
          value={searchQuery || ''}
          onChange={handleInputChange}
        />

        <p className='absolute right-2 top-3.5 font-semibold'>
          <LuSearch size={24} />
        </p>
      </div>

      <div className='min-w-full overflow-hidden border rounded-lg'>
        <div className='grid grid-cols-7 capitalise font-medium bg-lightBlue pr-4 h-14 items-center'>
          <div className='pl-4 col-span-1 text-start truncate'>Id</div>
          <div className='pl-4 col-span-1 text-start'>Name</div>
          <div className='pl-4 col-span-1 text-start'>Email</div>
          <div className='pl-4 col-span-1 text-start'>Phone Number</div>
          <div className='pl-4 col-span-1 text-start'>Is Verified</div>
          <div className='pl-4 col-span-1 text-start'>Is Active</div>
          <div className='pl-4 col-span-1 text-start'>Details</div>
        </div>

        {filteredData?.map((item, ind) => {
          return (
            <PartnerRow
              key={ind}
              data={item}
              lastElement={ind === data?.data?.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
};

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
        defaultChecked={status}
        className='w-6 h-6 border-2 rounded-lg'
        // onChange={(e) => {
        //     handleOnChange(index, role, e.target.checked);
        // }}
      />
    </div>
  );
};

export default BusinessPartnersList;
