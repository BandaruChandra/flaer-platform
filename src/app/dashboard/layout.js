import SideMenu from '../../../components/Dashboard/SideMenu';

function DashBoardLayout({ children }) {
  return (
    <div className='flex pr-[5vw] relative'>
      <div className='min-w-fit hidden lg:block'>
        <SideMenu />
      </div>

      <div className='border-r'></div>
      <div className='w-full ml-8 2xl:ml-16'> {children}</div>
    </div>
  );
}

export default DashBoardLayout;
