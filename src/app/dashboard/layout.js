import SideMenu from '../../../components/Dashboard/SideMenu';

function DashBoardLayout({ children }) {
  return (
    <div className='flex gap-10 xl:gap-12 2xl:gap-16'>
      <div className='min-w-fit hidden lg:block'>
        <SideMenu />
      </div>
      <div className=''>{children}</div>
    </div>
  );
}

export default DashBoardLayout;
