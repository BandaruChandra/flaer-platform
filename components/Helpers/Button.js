import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

function Button({ handleOnClick, text, newRecharge }) {
  return (
    <button
      className='bg-darkBlue font-medium hover:scale-105 h-10 flex items-center text-white rounded-md transition-all duration-all'
      onClick={handleOnClick}
    >
      {newRecharge && (
        <p className='bg-black bg-opacity-30 h-full w-10 grid place-items-center rounded-l-md '>
          <IoArrowBack size={19} />
        </p>
      )}

      <p className='px-2'>{text}</p>

      {!newRecharge && (
        <p className='bg-black bg-opacity-30 h-full w-10 grid place-items-center rounded-r-md '>
          <IoArrowForward size={19} />
        </p>
      )}
    </button>
  );
}

export default Button;
