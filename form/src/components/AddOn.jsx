import React from 'react'

const AddOn = ({setNumber, addOns, setAddOns}) => {
  const handlebutton = (direction) => {
    if(direction === 'left')
    {
     setNumber(2)
    } else if(direction === 'right') {
     setNumber(4)
    }
   }

   const handleCheckboxChange = (addon) => {
    setAddOns((prevAddOns) => ({
      ...prevAddOns,
      [addon]: !prevAddOns[addon],
    }));
  };


  return (
    <div className='h-full flex flex-col justify-between'>
      <div className='flex w-full flex-col gap-1 font-ubuntu mb-2'>
          <div className='font-extrabold text-2xl tracking-wide text-blue-900'>Pick Add-Ons</div>
          <div className='text-md tracking-wide text-zinc-400 font-light'>Add-ons help enhance your gaming experience.</div>
      </div>
      <div className='w-full h-full'>
          <div className={`w-full flex justify-between hover:bg-indigo-50 py-2 px-5 my-3  border-[1px] border-gray-400 hover:border-purple-900 rounded-lg ${addOns.storage && 'bg-indigo-50'}`}> 
            <div className="flex w-fit items-center justify-center">
              <input
                type='checkbox'
                checked={addOns.storage}
                onChange={() => handleCheckboxChange('storage')}
                className='w-5 h-5'
              ></input>
            </div>
            <div className='w-3/4 font-sans'>
              <p className='text-[15px] font-medium text-indigo-800 mb-[2px]'>Larger Storage</p>
              <p className='text-[12px] font-medium tracking-tight text-gray-400'>Extra 1TB of cloid save</p>
            </div>
            <div className='flex items-center justify-center'>
              <p className='text-[15px] text-purple-400 font-semibold tracking-wide'>+$20/yr</p>
            </div>
          </div>
          
          <div className={`w-full flex justify-between hover:bg-indigo-50 py-2 px-5 my-3  border-[1px] border-gray-400 hover:border-purple-900 rounded-lg ${addOns.service && 'bg-indigo-50'}`}>          
            <div className="flex w-fit items-center justify-center">
              <input
                type='checkbox'
                checked={addOns.profile}
                onChange={() => handleCheckboxChange('profile')}
                className='w-5 h-5'
              ></input>
            </div>
            <div className='w-3/4 font-sans'>
              <p className='text-[15px] font-medium text-indigo-800 mb-[2px]'>Customizable profile</p>
              <p className='text-[12px] font-medium tracking-tight text-gray-400'>custom theme on your profile</p>
            </div>
            <div className='flex items-center justify-center'>
              <p className='text-[15px] text-purple-400 font-semibold tracking-wide'>+$20/yr</p>
            </div>
          </div>



          <div className={`w-full flex justify-between hover:bg-indigo-50 py-2 px-5 my-3  border-[1px] border-gray-400 hover:border-purple-900 rounded-lg ${addOns.profile && 'bg-indigo-50'}`}>
            <div className="flex w-fit items-center justify-center">
              <input
                type='checkbox'
                checked={addOns.service}
                onChange={() => handleCheckboxChange('service')}
                className='w-5 h-5'
              ></input>
            </div>
            <div className='w-3/4 font-sans'>
              <p className='text-[15px] font-medium text-indigo-800 mb-[2px]'>Online Service</p>
              <p className='text-[12px] font-medium tracking-tight text-gray-400'>Access to multiplayer games</p>
            </div>
            <div className='flex items-center justify-center'>
              <p className='text-[15px] text-purple-400 font-semibold tracking-wide'>+$10/yr</p>
            </div>
          </div>



      </div>
      <div className='flex w-full justify-between'>
          <button onClick={()=>handlebutton('left')} className='text-gray-400 font-light tracking-wide'>Go back</button>
          <button onClick={()=>handlebutton('right')} className='text-white bg-indigo-900 hover:bg-purple-600 transition-hover ease-in-out duration-300 rounded-md py-3 px-5'>Next Step</button>
      </div>
    </div>
  )
}

export default AddOn