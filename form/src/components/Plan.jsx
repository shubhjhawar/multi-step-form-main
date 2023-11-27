import React,{useState} from 'react';
import { arcade, advanced, pro } from '../assets';

const plans = [
  {
    name: 'arcade',
    month: 9,
    year: 90,
  },
  {
    name: 'advanced',
    month: 12,
    year: 120,
  },
  {
    name: 'pro',
    month: 15,
    year: 150,
  },
];


const Plan = ({setNumber, plan, setPlan, isMonthly, setIsMonthly, setPrice}) => {

  const handlebutton = (direction) => {
   if(direction === 'left')
   {
    setNumber(1)
   } else if(direction === 'right') {
    setNumber(3)
   }
  }

  const toggle = () => {
    if(isMonthly)
    {
      setIsMonthly(false)
      
    } else{
      setIsMonthly(true)
    }
  }

  const handleplan = (type) => {
    setPlan(type)

    const selectedPlan = plans.find(plan => plan.name === type);
    if (selectedPlan) {
      setPrice(isMonthly ? selectedPlan.month : selectedPlan.year);
    } 
  }

  return (
    <div className='h-full flex flex-col justify-between'>
        <div className='flex w-full flex-col gap-1 font-ubuntu mb-2'>
            <div className='font-extrabold text-2xl tracking-wide text-blue-900'>Select Your Plan</div>
            <div className='text-md tracking-wide text-zinc-400 font-light'>you have the option of monthly or yearly billing</div>
        </div>
        <div className='w-full h-full'>
          <div className="grid grid-cols-3 w-full text-[12px] gap-2 mb-2">
            <div onClick={()=>handleplan('arcade')} className={`flex flex-col justify-between  border-[1px] border-gray-400 hover:bg-indigo-100 hover:border-indigo-700 hover:cursor-pointer rounded-xl p-2 ${plan==='arcade' && 'bg-indigo-100 border-indigo-700'}`}>
              <img src={arcade} alt="arcade" className='w-6 h-6'/>
              <div className='mt-10'>
                <p className='text-indigo-700 font-semibold text-[14px]'>Arcade</p>
                {isMonthly ? (
                  <p className='text-gray-500 font-semibold'>$9/mo</p>
                ) : (
                <div>
                  <p className='text-gray-500 font-semibold'>$90/yr</p>
                  <p className='text-indigo-900 font-semibold '>2 months free</p>
                </div>

                )}
              </div>
            </div>
            
            <div onClick={()=>handleplan('advanced')} className={`flex flex-col justify-between  border-[1px] border-gray-400 hover:bg-indigo-100 hover:border-indigo-700 hover:cursor-pointer rounded-xl p-2 ${plan==='advanced' && 'bg-indigo-100 border-indigo-700'}`}>
              <img src={advanced} alt="advanced" className='w-6 h-6'/>
              <div className='mt-10'>
                <p className='text-indigo-700 font-semibold text-[14px]'>Advanced</p>
                {isMonthly ? (
                <p className='text-gray-500 font-semibold'>$12/mo</p>
                ) : (
                <div>
                  <p className='text-gray-500 font-semibold'>$120/yr</p>
                  <p className='text-indigo-900 font-semibold '>2 months free</p>
                </div>

                )}
              </div>
            </div>

            <div onClick={()=>handleplan('pro')} className={`flex flex-col justify-between  border-[1px] border-gray-400 hover:bg-indigo-100 hover:border-indigo-700 hover:cursor-pointer rounded-xl p-2 ${plan==='pro' && 'bg-indigo-100 border-indigo-700'}`}>
              <img src={pro} alt="pro" className='w-6 h-6'/>
              <div className='mt-10'>
                <p className='text-indigo-700 font-semibold text-[14px]'>Pro</p>
                {isMonthly ? (
                  <p className='text-gray-500 font-semibold'>$15/mo</p>
                ) : (
                <div>
                  <p className='text-gray-500 font-semibold'>$150/yr</p>
                  <p className='text-indigo-900 font-semibold'>2 months free</p>
                </div>

                )}
              </div>
            </div>
          </div>

          <div className='w-full bg-gray-200 flex justify-center rounded-lg gap-5 text-[14px] p-2'>
            <p className={`${isMonthly ? 'text-indigo-900 ' : 'text-zinc-500'}`}>Monthly</p>
            <div className='bg-indigo-900 rounded-full w-[40px] relative flex items-center cursor-pointer' onClick={toggle}>
              <div className={`bg-white w-[15px] h-4/5 rounded-full m-1 transition-transform transform ${isMonthly ? '' : 'translate-x-full'}`}></div>
            </div>
            <p className={`${!isMonthly ? 'text-indigo-900 ' : 'text-zinc-500'}`}>Yearly</p>
          </div>
        </div>
        <div className='flex w-full justify-between'>
            <button onClick={()=>handlebutton('left')} className='text-gray-400 font-light tracking-wide'>Go back</button>
            <button onClick={()=>handlebutton('right')} className='text-white bg-indigo-900 hover:bg-purple-600 transition-hover ease-in-out duration-300 rounded-md py-3 px-5'>Next Step</button>
        </div>
    </div>
  )
}

export default Plan