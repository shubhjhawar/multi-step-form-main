import React from 'react'

const Container = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div className="grid grid-cols-3 w-2/3 h-2/3 border-[1px] border-black">
        <div className=' bg-red-400'>left menu bar</div>
        <div className=' col-span-2 bg-blue-100'>right col - form</div>
      </div>
    </div>
  )
}

export default Container