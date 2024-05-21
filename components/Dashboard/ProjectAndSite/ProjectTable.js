'use client';

import { useState } from 'react';
import SiteTable from './SiteTable';
import { IoMdArrowRoundBack } from 'react-icons/io';

const ProjectTable = ({ data }) => {
  const [currProject, setCurrProject] = useState();

  const handleOnClick = (data) => {
    setCurrProject(data);
  };

  return (
    <>
      <button
        className={` ${
          currProject ? 'block' : 'hidden'
        } border mb-4 border-darkBlue text-darkBlue hover:bg-darkBlue hover:scale-105 hover:text-white rounded-full p-2 transition-all duration-all flex justify-center items-center gap-2 mt-6`}
        onClick={() => {
          setCurrProject();
        }}
      >
        <p>
          <IoMdArrowRoundBack size={28} />
        </p>
      </button>
      <h4 className='mb-4 font-semibold text-2xl'>
        {' '}
        {currProject ? 'Sites' : 'Projects'}{' '}
      </h4>

      {currProject ? (
        <SiteTable currProject={currProject} />
      ) : (
        <table className='min-w-full overflow-hidden border rounded-md shadow-lg shadow-light-blue mb-20 '>
          <thead className='capitalise font-normal bg-lightBlue pr-4 h-16 '>
            <tr>
              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start truncate'
              >
                ID
              </th>
              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start'
              >
                project name
              </th>
              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start'
              >
                project code
              </th>

              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start'
              >
                address
              </th>
              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start'
              >
                project type
              </th>
              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start'
              >
                latitude
              </th>
              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start'
              >
                longitude
              </th>
              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start'
              >
                Sites
              </th>
              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start'
              >
                cities
              </th>
              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start'
              >
                cluster
              </th>
              <th
                scope='col'
                className='font-medium capitalize pl-4 text-start'
              >
                territory
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => {
              return (
                <RowContainer
                  key={item.id}
                  item={item}
                  handleOnClick={handleOnClick}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

const RowContainer = ({ item, handleOnClick }) => {
  return (
    <tr
      className={`border-b text-gray-700 hover:bg-blue-100 cursor-pointer h-16`}
      onClick={() => handleOnClick(item)}
    >
      <td className='pl-4'>{item?.id}</td>
      <td className='pl-4'>{item?.project_name}</td>
      <td className='pl-4'>{item?.project_code}</td>
      <td className='pl-4'>{item?.address}</td>
      <td className='pl-4'>{item?.project_type}</td>
      <td className='pl-4'>{item?.latitude}</td>
      <td className='pl-4'>{item?.longitude}</td>
      <td className='pl-4'>{item?.sites?.length}</td>
      <td className='pl-4'>{item?.cities}</td>
      <td className='pl-4 min-w-fit truncate'>{item?.cluster}</td>
      <td className='pl-4 pr-4 min-w-fit truncate'>{item?.territory}</td>
    </tr>
  );
};

export default ProjectTable;
