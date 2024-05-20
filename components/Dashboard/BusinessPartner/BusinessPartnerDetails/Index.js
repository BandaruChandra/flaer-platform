import React from 'react';
import PartnerUsers from './PartnerUsers';
import { BUSINESS_PARTNER_ROUTES } from '../../../../helpers/routes';
import Toggler from './Toggler';
import AccountDetails from './AccountDetails/Index';

function BusinessPartnerDetails({ url, id }) {
  return (
    <section className='min-h-[80vh] mt-10'>
      <div className='mt-20'>
        <Toggler url={url} id={id} />
      </div>

      <div>
        {url === BUSINESS_PARTNER_ROUTES.USERS_LIST ? (
          <PartnerUsers id={id} />
        ) : url === BUSINESS_PARTNER_ROUTES.ACCOUNT_DETAILS ? (
          <AccountDetails id={id} />
        ) : (
          ''
        )}
      </div>
    </section>
  );
}

export default BusinessPartnerDetails;
