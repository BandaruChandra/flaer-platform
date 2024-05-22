'use client';
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { LuSearch } from 'react-icons/lu';
import DropDown from '../../Helpers/DropDown';

let MEMBERSHIP_OPTIONS = [];

const ActivePartnersTable = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [fuseData, setFuseData] = useState([]);
  const [membFilter, setMembFilter] = useState([]);

  useEffect(() => {
    if (filteredData?.length && !membFilter?.length) {
      let list = filteredData?.map((item) => {
        return item?.flaer_membership?.name;
      });

      let withoutDuplicates = [...new Set(list)];

      MEMBERSHIP_OPTIONS = withoutDuplicates.map((item) => {
        return {
          label: item,
          value: item,
        };
      });

      setMembFilter(MEMBERSHIP_OPTIONS[0]);
    } else {
      MEMBERSHIP_OPTIONS = [];

      if (membFilter?.length) {
        setMembFilter(MEMBERSHIP_OPTIONS[0]);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredData]);

  const optionsFuse = {
    includeScore: false,
    keys: [
      'business_partner.name',
      'business_partner.phone_number',
      'business_partner.email',
    ],
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
    <>
      <div className='mb-10 flex justify-between'>
        <div className='pb-0 w-96 relative'>
          <input
            className='focus:outline-none w-full h-12 px-4 border border-borderGray rounded'
            placeholder={'Search Partners'}
            type={'text'}
            name={'search'}
            value={searchQuery || ''}
            onChange={handleInputChange}
          />

          <p className='absolute right-2 top-3.5 font-semibold '>
            <LuSearch size={24} />
          </p>
        </div>

        <DropDown
          value={membFilter}
          setValue={setMembFilter}
          options={MEMBERSHIP_OPTIONS}
          clearable
        />
      </div>

      <table className='min-w-full border rounded-md'>
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
          {filteredData?.map((item) => {
            return <RowContainer key={item.id} item={item} />;
          })}
        </tbody>
      </table>
    </>
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

export default ActivePartnersTable;
