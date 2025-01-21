import React from 'react'
import IconComp from './IconComp';

function FormComp({formOptions,onChange}) {
  return (
    <div>
       <form>
          {Object.keys(formOptions).map(key =>{
            let {type,className,value}=formOptions[key]
            return(
            <IconComp type={type} className={className} value={value} onChange={e=>{onChange(key,e.target.value)}}/>
            )
           })}
           
       </form>
      
    </div>
  )
}

export default FormComp