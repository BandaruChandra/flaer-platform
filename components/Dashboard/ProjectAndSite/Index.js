import React from 'react';
import ProjectTable from './ProjectTable';
import SiteTable from './SiteTable';
import site_data from '../../../data/site_listing.json';
import project_data from '../../../data/project_listing.json';
import { DASHBOARD_ROUTES } from '../../../helpers/routes';

function ProjectAndSite() {
  let href = `${DASHBOARD_ROUTES.PROJECT_AND_SITE}?`;

  return (
    <div className='w-full'>
      <div className=''>
        <SiteTable data={site_data} />
        <ProjectTable data={project_data} />
      </div>

      {/* <Pagination
        pagesList={data?.meta?.total_pages}
        currPage={data?.meta?.current_page}
        href={href}
      /> */}
    </div>
  );
}

export default ProjectAndSite;
