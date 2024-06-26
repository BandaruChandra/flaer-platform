'use client';

import { useState } from 'react';
import Button from '../../../../Helpers/Button';
import ShareQRCode from './QRCode/ShareQRCode';
import RechargeLedger from './RechargeLedger';

const Recharge = ({ id, page }) => {
  const [newRecharge, setNewRecharge] = useState(false);

  const handleOnClick = () => {
    setNewRecharge((prev) => !prev);
  };

  return (
    <div>
      <div className='mt-12 flex justify-between items-center mb-6'>
        <h4 className=' font-semibold text-2xl'>
          {!newRecharge ? 'Recharge Ledger' : 'New Recharge'}
        </h4>

        <Button
          text={newRecharge ? 'Recharge Ledger' : 'New Recharge'}
          handleOnClick={handleOnClick}
          newRecharge={newRecharge}
        />
      </div>

      {newRecharge ? (
        <ShareQRCode id={id} />
      ) : (
        <RechargeLedger id={id} page={page} />
      )}
    </div>
  );
};

export default Recharge;
