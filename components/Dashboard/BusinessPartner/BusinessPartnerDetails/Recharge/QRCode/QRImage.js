import Image from 'next/image';

function QrImage({ imageUrl }) {
  return (
    <div>
      {imageUrl ? (
        <div>
          <p className='min-w-fit truncate pb-2'>
            Scan using any upi app to pay.
          </p>
          <div className='w-[300px] h-[270px] pt-6 mx-auto px-5'>
            <Image
              src={imageUrl}
              alt={'qr code'}
              className='object-cover'
              width={269}
              height={269}
            />
          </div>
          {/* <p className='min-w-fit truncate pt-6'>Pay using this QRCode</p> */}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default QrImage;
