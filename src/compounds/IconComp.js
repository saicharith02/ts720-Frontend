import React from 'react'

const IconComp = ({type,className,value,onChange,placeholder}) => {
  return (
    
    <div className='form-option'>
    {
       value ==="submit" ? (
        <input type='submit' value={value}/>
       ):(
        <input type={type} className={className} placeholder={placeholder} value={value} onChange={onChange}/>
       )
    }
      
    </div>
  )
}

export default IconComp