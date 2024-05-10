'use client';
// components/QRCode.js
import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import QRCode from 'qrcode';
import QrImage from './QRImage';
import Image from 'next/image';
import Link from 'next/link';

const QRCodeComponent = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [shareImgUrl, setShareImgUrl] = useState('');
  const [contact, setContact] = useState({
    phone: '',
    userName: '',
    amount: 0,
  });
  const qrRef = useRef(null);

  const generateQR = (e) => {
    e.preventDefault();

    // if (!contact.userName || !contact?.phone || !contact.amount) return;

    let payment_string = `upi://pay?pa=FLAER@icici&pn=FLAER HOMES PRIVATE LIMITED&tr=EZY202405051641309847&am=${
      contact?.amount || 0
    }.0&cu=INR&mc=5411`;

    try {
      QRCode.toDataURL(payment_string).then((val) => setImageUrl(val));
    } catch (error) {
      console.log(error);
    }
  };

  const handleShareQRCode = () => {
    const qrElement = qrRef.current;

    html2canvas(qrElement, {
      x: 0,
      y: 0,
      width: 350,
      height: 500,
    }).then((canvas) => {
      const url = canvas.toDataURL(imageUrl);
      setShareImgUrl(url);

      // const downloadLink = document.createElement('a');
      // downloadLink.href = url;
      // downloadLink.download = 'qr-code.png';
      // document.body.appendChild(downloadLink);
      // downloadLink.click();
      // document.body.removeChild(downloadLink);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setContact((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className='lg:p-10 grid place-items-center' onSubmit={generateQR}>
      <div className='w-[300px] mt-10'>
        <input
          className='focus:outline-none w-[100%] h-10 lg:h-14 pl-4 mb-4 border border-borderGray rounded-md'
          placeholder={'Enter Amount'}
          name={'amount'}
          type='number'
          value={contact?.amount}
          onChange={handleInputChange}
          minLength={10}
          maxLength={10}
          required
        />

        <input
          className='focus:outline-none w-[100%] h-10 lg:h-14 pl-4 mb-4 border border-borderGray rounded-md'
          placeholder={'Enter Mobile Number'}
          name={'phone'}
          type='number'
          value={contact?.phone}
          onChange={handleInputChange}
          minLength={10}
          maxLength={10}
          // required
        />

        <input
          className='focus:outline-none w-[100%] h-10 lg:h-14 pl-4 mb-4 border border-borderGray rounded-md'
          placeholder={'Enter Name'}
          name={'userName'}
          value={contact?.userName}
          onChange={handleInputChange}
          minLength={3}
          // required
        />
      </div>

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
        <div className='absolute bottom-4 left-5'>
          <p className='text-xs text-pGray'>
            Flaer Homes © Copyright 2024, Inc. All rights reserved
          </p>
        </div>
      </div>

      <div>
        <div className='flex gap-10 mt-6 mb-10'>
          <button
            className='px-4 py-2 bg-blue-600 text-white rounded-md'
            type='submit'
          >
            Generate QR
          </button>

          <Link href={shareImgUrl}>
            <button
              className='px-4 py-2 bg-blue-600 text-white rounded-md'
              type='submit'
            >
              Download QR
            </button>
          </Link>

          {/* <Link
            href={`https://api.whatsapp.com/send?phone=918977539314&text=${Blob.toString(
              shareImgUrl
            )}`}
          >
            <button className='px-4 py-2 bg-blue-600 text-white rounded-md'>
              Share QR Code
            </button>
          </Link> */}
        </div>

        {/* {imageUrl && <Image src={shareImgUrl} alt='QR Code' wid />} */}
      </div>
    </form>
  );
};

export default QRCodeComponent;
