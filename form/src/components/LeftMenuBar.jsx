import React from 'react'
import { leftBackground } from '../assets'

const LeftMenuBar = ({number}) => {
  return (
    <div className='relative h-full z-0'>
    <img src={leftBackground} alt="bg" className='h-full absolute top-0 left-0 -z-10' />
    <div className='font-ubuntu text-white'>
      <div className='flex w-full pl-6 pt-5 gap-2'>
        <div className='flex items-center justify-center'>
          <p className={`flex rounded-full border-[1px] border-white py-1 px-2 text-[10px] ${number==1 && 'bg-blue-200 text-slate-800'}`}>1</p>
        </div>
        <div className='uppercase'>
          <p className='text-[8px] text-gray-300 tracking-wide'>step 1</p>
          <p className='tracking-wider text-[10px] font-semibold'>your info</p>
        </div>
      </div>


      <div className='flex w-full pl-6 pt-5 gap-2'>
        <div className='flex items-center justify-center'>
          <p className={`flex rounded-full border-[1px] border-white py-1 px-2 text-[10px] ${number==2 && 'bg-blue-200 text-slate-800'}`}>2</p>
        </div>
        <div className='uppercase'>
          <p className='text-[8px] text-gray-300 tracking-wide'>step 2</p>
          <p className='tracking-wider text-[10px] font-semibold'>select plan</p>
        </div>
      </div>


      <div className='flex w-full pl-6 pt-5 gap-2'>
        <div className='flex items-center justify-center'>
          <p className={`flex rounded-full border-[1px] border-white py-1 px-2 text-[10px] ${number==3 && 'bg-blue-200 text-slate-800'}`}>3</p>
        </div>
        <div className='uppercase'>
          <p className='text-[8px] text-gray-300 tracking-wide'>step 3</p>
          <p className='tracking-wider text-[10px] font-semibold'>add-ons</p>
        </div>
      </div>


      <div className='flex w-full pl-6 pt-5 gap-2'>
        <div className='flex items-center justify-center'>
          <p className={`flex rounded-full border-[1px] border-white py-1 px-2 text-[10px] ${number==4 && 'bg-blue-200 text-slate-800'}`}>4</p>
        </div>
        <div className='uppercase'>
          <p className='text-[8px] text-gray-300 tracking-wide'>step 4</p>
          <p className='tracking-wider text-[10px] font-semibold'>summary</p>
        </div>
      </div>

    </div>

  </div>
  )
}

export default LeftMenuBar