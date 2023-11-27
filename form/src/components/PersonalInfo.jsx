import React, {useState} from 'react'

const PersonalInfo = ({setNumber, personalForm, setPersonalForm}) => {

    const [isError, setIsError] = useState(false);

    const handleChange = (event, field) => {
        setPersonalForm((prevForm) => ({
          ...prevForm,
          [field]: event.target.value,
        }));
      };

    
      const handleNextItem = () => {
       if(personalForm.name && personalForm.email && personalForm.phone)
       {
        setNumber(2)
       } else {
        setIsError(true)
       }
      }

  return (
    <div className='h-full flex flex-col justify-between'>
        <div className='flex w-full flex-col gap-1 font-ubuntu mb-2'>
            <div className='font-extrabold text-2xl tracking-wide text-blue-900'>Personal Info</div>
            <div className='text-sm tracking-wide text-zinc-400 font-light'>please provide your name, email address, and phone number</div>
        </div>
        <div className='w-full h-full'>
            <div className='flex flex-col my-2'>
                <div className='w-full flex justify-between text-[12px] items-center'>
                    <p className="text-blue-900">Name</p>
                    {personalForm.name==='' && isError &&
                    <p className="text-red-500 font-semibold tracking-tight text-[10px]">This field is required</p>
                    
                    }
                </div>
                <div>
                <input
                    type="text"
                    id="nameInput"
                    value={personalForm.name}
                    onChange={(e) => handleChange(e, 'name')}
                    placeholder='e.g. Stephen King'
                    className='w-full p-1 mt-1 border-[1px] border-gray-400 rounded-lg px-2 tracking-tight font-medium'
                />
                </div>
            </div>

            <div className='flex flex-col my-2'>
                <div className='w-full flex justify-between text-[12px]'>
                    <p className="text-blue-900">Email</p>
                    {personalForm.email==='' && isError &&
                    <p className="text-red-500 font-semibold tracking-tight text-[10px]">This field is required</p>
                    
                    }
                </div>
                <div>
                <input
                    type="text"
                    id="nameInput"
                    value={personalForm.email}
                    onChange={(e) => handleChange(e, 'email')}
                    placeholder='e.g. stephenking@lorem.com'
                    className='w-full p-1 mt-1 border-[1px] border-gray-400 rounded-lg px-2 tracking-tight font-medium'
                />
                </div>
            </div>

            <div className='flex flex-col my-2'>
                <div className='w-full flex justify-between text-[12px] items-center'>
                    <p className="text-blue-900">Phone number</p>
                    {personalForm.phone==='' && isError &&
                    <p className="text-red-500 font-semibold tracking-tight text-[10px]">This field is required</p>
                    
                    }
                </div>
                <div>
                <input
                    type="text"
                    id="nameInput"
                    value={personalForm.phone}
                    onChange={(e) => handleChange(e, 'phone')}
                    placeholder='e.g. +1 234 567 890'
                    className='w-full p-1 mt-1 border-[1px] border-gray-400 rounded-lg px-2 tracking-tight font-medium'
                />
                </div>
            </div>
        </div>
        <div className='flex w-full justify-end'>
            <button onClick={handleNextItem} className='text-white bg-indigo-900 hover:bg-purple-600 transition-hover ease-in-out duration-300 rounded-md py-3 px-5'>Next Step</button>
        </div>
    </div>
  )
}

export default PersonalInfo