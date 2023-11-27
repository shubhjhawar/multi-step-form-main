import React, {useEffect, useState} from 'react'

const Summary = ({setNumber, plan, isMonthly, price, addOns}) => {

  const handlebutton = (direction) => {
    if(direction === 'left')
    {
     setNumber(3)
    } else if(direction === 'right') {
     setNumber(5)
    }
   }
   const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let calculatedTotalPrice = price;

    if (addOns.service) {
      calculatedTotalPrice += 10;
    }

    if (addOns.storage) {
      calculatedTotalPrice += 20;
    }

    if (addOns.profile) {
      calculatedTotalPrice += 20;
    }

    setTotalPrice(calculatedTotalPrice);
  }, []);

  console.log(totalPrice);

   
  return (
    <div className='h-full flex flex-col justify-between'>
      <div className='flex w-full flex-col gap-1 font-ubuntu mb-2'>
          <div className='font-extrabold text-2xl tracking-wide text-blue-900'>Finishing up</div>
          <div className='text-md tracking-wide text-zinc-400 font-light'>Double-check everything looks OK before confirming.</div>
      </div>
      <div className='w-full h-full'>
          <div className='bg-purple-100 px-2 py-3 rounded-lg shadow-md'>
            <div className='flex w-full justify-between'>
              <div className='flex gap-1 text-[14px] font-semibold text-purple-900 capitalize '>
                <div className=''>{plan}</div>
                <div>{isMonthly ? 
                  <p>(Monthly)</p> :
                  <p>(Yearly)</p>}
                </div>
              </div>
              <div className='text-[14px] font-semibold text-indigo-900 mr-2'>${price}</div>
            </div>
            <div className='text-[12px] text-gray-500 mb-1 tracking-wide cursor-pointer' onClick={()=>setNumber(2)}>
              change
            </div>
            <div className='w-full h-[1px] bg-gray-400' />
           
            {addOns.service==true && (
              <div className="w-full flex justify-between text-[12px] my-2">
                <div className='text-gray-500'>Online Service</div>
                <div className='font-light text-purple-700 mr-2'>$10</div>
              </div>
            )}
            {addOns.profile==true && (
             <div className="w-full flex justify-between text-[12px] my-2">
               <div className='text-gray-500'>Customizable Profile</div>
               <div className='font-light text-purple-700 mr-2'>$20</div>
             </div>
           )}
             {addOns.storage==true && (
              <div className="w-full flex justify-between text-[12px] my-2">
                <div className='text-gray-500'>Larger Storage</div>
                <div className='font-light text-purple-700 mr-2'>$20</div>
              </div>
            )}
          </div>
          <div className='flex w-full justify-between text-sm mt-2'>
            <div className="flex text-gray-600 ">
              <div>Total&nbsp;</div>
              <div className='flex'>( &nbsp;per&nbsp;{isMonthly ? <p>Month</p> : <p>Year</p>}&nbsp;)</div>
            </div>
            <div className='text-purple-900 font-semibold text-[16px]'>{totalPrice}</div>
          </div>
      </div>
      <div className='flex w-full justify-between'>
          <button onClick={()=>handlebutton('left')} className='text-gray-400 font-light tracking-wide'>Go back</button>
          <button onClick={()=>handlebutton('right')} className='text-white bg-indigo-900 hover:bg-purple-600 transition-hover ease-in-out duration-300 rounded-md py-3 px-5'>Confirm</button>
      </div>
    </div>
  )
}

export default Summary