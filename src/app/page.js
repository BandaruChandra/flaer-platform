// pages/index.js
import QRCodeComponent from '../../components/Home/ShareQRCode';

const HomePage = () => {
  const qrData =
    'upi://pay?pa=FLAER@icici&pn=FLAER HOMES PRIVATE LIMITED&tr=EZY202405051641309847&am=4.0&cu=INR&mc=5411';

  return (
    <div>
      <QRCodeComponent data={qrData} />
    </div>
  );
};

export default HomePage;
