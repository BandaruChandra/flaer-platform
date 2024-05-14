import { FaChevronRight } from 'react-icons/fa6';
import { FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';

function Pagination({ pagesList, currPage, href }) {
  return pagesList?.length > 1 ? (
    <div className='mt-6 mb-10 flex justify-center gap-6 text-darkBlue'>
      <div
        className={`${
          currPage - 1 === 0
            ? 'select-none pointer-events-none cursor-default '
            : ''
        }`}
      >
        <Link
          aria-disabled={currPage - 1 === 0}
          tabIndex={currPage - 1 === 0 ? -1 : undefined}
          href={`${href}page=${currPage - 1}`}
        >
          <button
            className={` ${
              currPage - 1 === 0
                ? 'cursor-default text-gray-300'
                : 'hover:bg-darkBlue hover:text-white'
            } bg-solidGray min-w-10 max-w-10 min-h-10 max-h-10 rounded-full font-semibold grid place-items-center`}
          >
            <FaChevronLeft />
          </button>
        </Link>
      </div>

      <div className='flex justify-center gap-3 max-w-full overflow-auto'>
        {pagesList?.map((page) => {
          return (
            <div key={page}>
              <Link href={`${href}page=${page}`}>
                <button
                  className={`${
                    currPage === page
                      ? 'bg-darkBlue text-white cursor-default'
                      : 'bg-solidGray'
                  } min-w-10 max-w-10 h-10 rounded-full font-semibold grid place-items-center transition-all duration-300`}
                >
                  {page}
                </button>
              </Link>
            </div>
          );
        })}
      </div>

      <div
        className={`${
          currPage >= pagesList?.length
            ? 'select-none pointer-events-none cursor-default '
            : ''
        }`}
      >
        <Link
          aria-disabled={currPage >= pagesList?.length}
          tabIndex={currPage >= pagesList?.length ? -1 : undefined}
          href={`${href}page=${currPage + 1}`}
        >
          <button
            className={` ${
              currPage >= pagesList?.length
                ? 'cursor-default text-gray-300'
                : 'hover:bg-darkBlue hover:text-white'
            } bg-solidGray min-w-10 max-w-10 min-h-10 max-h-10  rounded-full font-semibold grid place-items-center`}
          >
            <FaChevronRight />
          </button>
        </Link>
      </div>
    </div>
  ) : (
    ''
  );
}

export default Pagination;
