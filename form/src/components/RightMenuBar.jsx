import React, {useState} from 'react';
import PersonalInfo from './PersonalInfo'; 
import Plan from "./Plan";
import AddOn from "./AddOn";
import Summary from "./Summary";
import Fin from './Fin';


const RightMenuBar = ({number, setNumber}) => {

  const [personalForm, setPersonalForm] = useState({
    name:'',
    email:'',
    phone:''
  })

  const [isMonthly, setIsMonthly] = useState(true)
  const [plan, setPlan] = useState('');
  const [price, setPrice] = useState('')

  const [addOns, setAddOns] = useState({
    service:false,
    storage:false,
    profile:false
  })


  return (
    <div className='h-full flex flex-col justify-between pr-14 pt-6 font-ubuntu'>
      <div className='h-full'>
        {number==1 && <PersonalInfo setNumber={setNumber} personalForm={personalForm} setPersonalForm={setPersonalForm} />}
        {number==2 && <Plan {...{ setNumber, plan, setPlan,isMonthly, setIsMonthly, setPrice }} />}
        {number==3 && <AddOn {...{setNumber, addOns, setAddOns}} />}
        {number==4 && <Summary {...{setNumber, plan, isMonthly, price, addOns}} />}
        {number==5 && <Fin /> }
      </div>
      
    </div>
  )
}

export default RightMenuBar