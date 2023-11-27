import React, { useState } from 'react';
import LeftMenuBar from './LeftMenuBar';
import RightMenuBar from './RightMenuBar';

const Container = () => {
  const [number, setNumber] = useState(1);

  

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
      <div className="grid grid-cols-3 w-3/5 h-2/3 shadow-xl rounded-xl p-5 bg-white">
        <div className=''>
          <LeftMenuBar number={number} />
        </div>
        <div className=' col-span-2 '>
          <RightMenuBar number={number} setNumber={setNumber} />
        </div>
      </div>
    </div>
  )
}

export default Container