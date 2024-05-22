'use client';
// components/QRCode.js
import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import QRCode from 'qrcode';
import QrImage from './QRImage';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { MAX_UPI, MIN_UPI } from '../../../../../../helpers/enums';
import {
  inrToNumber,
  numberToInr,
} from '../../../../../../helpers/MathHelpers';

const ShareQRCode = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const [rechargeAmount, setRechargeAmount] = useState();

  const qrRef = useRef(null);

  const generateQR = (e) => {
    e.preventDefault();

    if (rechargeAmount < MIN_UPI)
      return toast.error('Minimum Recharge Amount is ' + MIN_UPI);

    let payment_string = `upi://pay?pa=FLAER@icici&pn=FLAER HOMES PRIVATE LIMITED&tr=EZY202405051641309847&am=${
      rechargeAmount || 0
    }.0&cu=INR&mc=5411`;

    try {
      QRCode.toDataURL(payment_string).then((val) => setImageUrl(val));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDownload = () => {
    const qrElement = qrRef.current;

    html2canvas(qrElement, {
      x: 0,
      y: 0,
      width: 350,
      height: 500,
    }).then((canvas) => {
      const url = canvas.toDataURL(imageUrl);

      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = 'qr-code.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  };

  const handleInputChange = (e) => {
    let val = inrToNumber(e.target.value);

    if (val > MAX_UPI) {
      return toast.error(`Amount cannot be more than ${MAX_UPI}`);
    }

    let inr = numberToInr(val);
    setRechargeAmount(inr);
  };

  return (
    <form className='lg:p-10 flex gap-24' onSubmit={generateQR}>
      <div className='w-[300px]'>
        <p className='text-[#7C7986] text-sm mb-1 pl-1'>
          Note: Minimum Recharge amount is ₹1,000 & Maximum is ₹99,999.
        </p>

        <div className='relative'>
          <span className='font-semibold absolute text-lg top-4 left-3 '>
            ₹
          </span>
          <input
            className='focus:outline-none text-lg w-[100%] h-10 lg:h-14 pl-6 mb-4 border border-borderGray rounded-md font-semibold'
            placeholder={'Enter Amount'}
            name={'amount'}
            type='text'
            value={rechargeAmount}
            onChange={handleInputChange}
            min={MIN_UPI}
            required
          />
        </div>

        <button
          className={`px-4 py-2 text-white  rounded-md ${
            parseInt(rechargeAmount) > MIN_UPI ? 'bg-darkBlue' : 'bg-pGray'
          } `}
          type='submit'
          disabled={parseInt(rechargeAmount) < MIN_UPI}
        >
          Generate QR
        </button>
      </div>

      <section>
        <div
          ref={qrRef}
          style={{ display: 'inline-block', position: 'relative' }}
          className='min-w-fit grid place-items-center w-[350px] h-[500px] text-center border rounded-lg'
        >
          <div className='grid place-items-center mt-6'>
            <Image
              src={`https://flaer-website-assets.s3.ap-south-1.amazonaws.com/homepage_assets/logo.svg`}
              width={183}
              height={21}
              alt={'Main Logo'}
            />
          </div>
          <div className='pt-6 text-center grid place-items-center'>
            <QrImage imgSrc={imageUrl} />
          </div>
          <div className='absolute bottom-4 left-8'>
            <p className='text-xs text-center text-pGray'>
              Flaer Homes © Copyright 2024, Inc. All rights reserved
            </p>
          </div>
        </div>
        <div>
          <div className='flex justify-center gap-10 mt-6 mb-10'>
            <button
              onClick={handleDownload}
              className='px-4 py-2 bg-darkBlue text-white rounded-md hover:scale-105 transition-all duration-100 '
            >
              Download QR
            </button>
          </div>
        </div>
      </section>
    </form>
  );
};

export default ShareQRCode;
