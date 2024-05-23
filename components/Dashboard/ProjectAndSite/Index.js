import {
  NEXT_PUBLIC_API_ENDPOINT,
  RESPONSE_STATUS,
} from '../../../helpers/enums';
import Pagination from '../../Helpers/Pagination';
import ProjectTable from './ProjectTable';

// it return projects and sites included.
const getProjects = async () => {
  try {
    const response = await fetch(
      `${NEXT_PUBLIC_API_ENDPOINT}/flaer_platform/v1/platform/get_projects`,
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

    if (res.status === RESPONSE_STATUS.SUCCESS) {
      return res;
    } else {
      console.log('error: ', res);
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

async function ProjectAndSite() {
  const data = await getProjects();

  return (
    <div className='w-full'>
      <ProjectTable data={data?.data} />

      <Pagination
        pagesList={data?.meta?.total_pages}
        currPage={data?.meta?.current_page}
        // href={href}
      />
    </div>
  );
}

export default ProjectAndSite;
