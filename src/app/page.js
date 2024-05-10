// pages/index.js

import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <div> Home Page </div>

      <Link href={`/qrcode`}> QR Page </Link>
    </div>
  );
};

export default HomePage;
