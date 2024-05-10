'use client';
import Link from 'next/link';
import { DASHBOARD_MENU_LIST, S3_BASE_URL } from '../../helpers/enums';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { DASHBOARD_ROUTES } from '../../helpers/routes';

function SideMenu() {
  const path = usePathname();

  return (
    <article className='bg-white overflow-hidden sticky top-0 left-0 pt-10 pl-10 pr-6 border-r h-[100vh]'>
      <div className='col-span-1 h-12'>
        <Link
          href={DASHBOARD_ROUTES.ACTIVE_MEMBERSHIPS_LIST}
          onClick={() => {
            setSideBarOpen(false);
          }}
        >
          <Image
            src={`${S3_BASE_URL}/homepage_assets/logo.svg`}
            width={183}
            height={21}
            alt={'Main Logo'}
            className='w-[183px] h-[21px]'
          />
        </Link>
      </div>

      {DASHBOARD_MENU_LIST?.map((item, ind) => {
        return (
          <div className='w-full' key={ind}>
            <Link href={`${item.link}`}>
              <button
                className={`${
                  item.link === path
                    ? 'bg-[#ECEFF8] text-darkBlue font-medium'
                    : ''
                }  border-b rounded-lg border-white flex items-center gap-3 pr-4 h-14 min-w-fit w-full hover:text-darkBlue text-base`}
              >
                <p
                  className={`${
                    item.link === path ? 'bg-darkBlue' : 'bg-white'
                  } h-full w-1`}
                ></p>

                <p className='text-2xl pl-2'> {item.icon} </p>
                <p> {item.name} </p>
              </button>
            </Link>
          </div>
        );
      })}
    </article>
  );
}

export default SideMenu;
