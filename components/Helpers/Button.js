import React from 'react';

function Button({ handleOnClick, text }) {
  return (
    <button
      className='bg-[#1E2A59] hover:scale-105 px-6 py-2 text-white rounded-md transition-all duration-all'
      onClick={() => {
        handleOnClick();
      }}
    >
      {text}
    </button>
  );
}

export default Button;
