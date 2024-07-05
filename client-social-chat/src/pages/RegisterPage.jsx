import React, { useState } from 'react'

const RegisterPage = () => {
  // const [data, setData] = useState([])
  // console.log(data, "Data log");
  return (

    <div className="p-2 pt-0">
      <div className='bg-slate-100 w-full max-w-sm rounded overflow-hidden p-4 mt-2'>
        <p className='text-xl text-slate-800 font-extrabold font-serif'>Welcome to Social Chat..!</p>

        <form action="">
          <div className='py-2 '>
            <label className='font-semibold' htmlFor="name"> Name : </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Enter your name'
              className='bg-slate-200 px-5 py-1 rounded shadow-2xl focus:bg-slate-300 focus:outline-primary'
            />
          </div>
        </form>
      </div>

    </div>


  )
}

export default RegisterPage