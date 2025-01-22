import React from 'react'
import IconComp from './IconComp';

function FormComp({formOptions,onChange}) {
  return (
    <div className='login-container'> 
       <form>
          {Object.keys(formOptions).map(key =>{
            let {type,className,value}=formOptions[key]
            const placeholder=`${key}`;
            return(
            <IconComp key={key} type={type} className={className} value={value || ''} onChange={e=>{onChange(key,e.target.value)}} placeholder={placeholder}/>
            )
           })}
           
       </form>
      
    </div>
  )
}

export default FormComp