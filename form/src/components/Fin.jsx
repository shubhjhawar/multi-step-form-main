import React from 'react';
import { thanks } from '../assets';

const Fin = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center ">
        <img src={thanks} alt="thanks" />
        <h1 className='font-indigo-900 text-xl font-bold my-2'>Thank you</h1>
        <p className='text-gray-500 text-center'>Thanks for confirming your subscripton! We hope you have fun using our platform. if you ever need support, please feel free to email us at support@loregaming.com</p>
    </div>
  )
}

export default Fin