'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DASHBOARD_ROUTES } from '../../helpers/routes';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(DASHBOARD_ROUTES.BUSINESS_PARTNERS);
  }, [router]);

  return null; // Or you can return a loading spinner or a message
};

export default HomePage;
