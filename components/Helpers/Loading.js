import Image from 'next/image';
import loadingGif from '../../public/loading.gif';

const Loading = () => {
  return (
    <div className=' flex flex-col items-center justify-center h-72 lg:h-[70vh] '>
      <Image
        src={loadingGif}
        unoptimized
        alt={'loading image'}
        width={100}
        height={100}
      />
      <h1 className='text-imageGray'> Loading... </h1>
    </div>
  );
};

export default Loading;
