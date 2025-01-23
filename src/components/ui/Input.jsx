import React from 'react'

function Input({placeholder,className,type,children, onClick}) {
  return (
    <div className={`relative flex items-center ${className}`}>
          
         <input
              type={type}
                placeholder={placeholder}
              className={`p-3 w-80 rounded-lg bg-[#3C364C] focus:outline focus:outline-[#A297CE] ${className}`}
              
              required
            ></input>
            {children && <div className="absolute  text-gray-500 right-6 top-8 text-xl" onClick={onClick}>{children}</div>}
    </div>
  )
}

export default Input