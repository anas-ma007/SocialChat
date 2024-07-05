import React from 'react'
import logo from "../assets/Logo crop.jpeg"

const AuthLayouts = ({ children}) => {
  return (
    <>
      <div className='items-center flex justify-center py-3 bg-blue-950 shadow-2xl pointer-events-none' >
        <img className='shadow-2xl rounded-full' src={logo} alt="logo" width={200} height={200} />
      </div>
      {children}
    </>

  )
}

export default AuthLayouts