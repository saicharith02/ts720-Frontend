import React ,{useState} from 'react'
import FormComp from '../compounds/FormComp'

export const SignUp = () => {
  let [signFormData,setSignFormData]=useState(
      {username:{type:'text',className:'username',value:''},
      password:{type:'password',className:'userpassword',value:''},
      repassword:{type:'password',className:'userpassword1',value:''},
      button:{type:'submit',value:'submit'}});
     let storeData=(key,newValue)=>{
       setSignFormData(prevVal => ({
          ...prevVal,
          [key]:{...prevVal[key],value:newValue}
       }))
     }  
  return (
    <div>
        <form>
            <FormComp formOptions={{...signFormData}} onChange={storeData}/>
        </form>
    </div>
  )
}
