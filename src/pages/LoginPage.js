import React, { useState } from 'react'
import FormComp from '../compounds/FormComp';


function LoginPage() {
  let [loginFormData,setLoginFormData]=useState(
    {username:{type:'text',className:'username',value:''},
    password:{type:'password',className:'userpassword',value:''},
    button:{type:'submit',value:'submit'}});
   let storeData=(key,newValue)=>{
     setLoginFormData(prevVal => ({
        ...prevVal,
        [key]:{...prevVal[key],value:newValue}
     }))
   }
   
  return (
    <div className='login-body'>
        <h1>TSChat</h1>
        <FormComp formOptions={{...loginFormData}} onChange={storeData}/>
    </div>
  )
}

export default LoginPage