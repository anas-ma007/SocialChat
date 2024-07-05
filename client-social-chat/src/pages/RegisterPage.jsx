import React, { useState } from 'react'

const RegisterPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profile_pic: ""
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  console.log(data, "Data log");
  return (

    <div className="p-2 pt-0">
      <div className='bg-slate-100 w-full max-w-sm rounded overflow-hidden p-4 mt-2'>
        <p className='text-xl text-slate-800 font-extrabold font-serif'>Welcome to Social Chat..!</p>

        <form action="">
          <div className='py-2 flex flex-col gap-2'>
            <label className='font-semibold' htmlFor="name"> Name : </label>
            <input
              className='bg-slate-200 px-5 py-1 rounded shadow-2xl focus:bg-slate-300 focus:outline-primary'
              type='text'
              id='name'
              name='name'
              placeholder='Enter your name'
              value={data.name}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className='py-2 flex flex-col gap-2'>
            <label className='font-semibold' htmlFor="email"> Email : </label>
            <input
              className='bg-slate-200 px-5 py-1 rounded shadow-2xl focus:bg-slate-300 focus:outline-primary'
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              value={data.email}
              onChange={handleOnChange}
              required
            />
          </div>


          <div className='py-2 flex flex-col gap-2'>
            <label className='font-semibold' htmlFor="password"> Password : </label>
            <input
              className='bg-slate-200 px-5 py-1 rounded shadow-2xl focus:bg-slate-300 focus:outline-primary'
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password'
              value={data.password}
              onChange={handleOnChange}
              required
            />
          </div>


        </form>
      </div>

    </div>


  )
}

export default RegisterPage