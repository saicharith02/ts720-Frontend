import React from 'react'

const IconComp = ({type,className,value,onChange}) => {
  return (
    
    <div>
    {
       value ==="submit" ? (
        <input type='submit'/>
       ):(
        <input type={type} className={className} value={value} onChange={onChange}/>
       )
    }
      
    </div>
  )
}

export default IconComp