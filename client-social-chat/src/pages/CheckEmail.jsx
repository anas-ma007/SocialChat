import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BACKEND_URL } from '../utils/constants'
import toast from 'react-hot-toast'
import { FaUserSecret } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";


const CheckEmail = () => {
  const [data, setData] = useState({
    email: ""
  })
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    const URL = `${BACKEND_URL}/api/email`
    try {
      const response = await axios.post(URL, data)
      toast.success(response?.data?.message)
      if (response?.data?.success) {
        setData({
          email: "",
        })
        navigate("/password", {
          state : response?.data
        })
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }


  return (
    <div className="p-2 pt-0  ">
      <div className='bg-slate-100 w-full max-w-sm md:max-w-md rounded overflow-hidden p-4 mt-3 mx-auto'>

        <div className='m-auto w-fit mb-3 '>
          <FaRegUserCircle  size={80}/>
        </div>
        <p className='text-xl text-slate-800 font-medium font-serif'>Welcome to Social Chat..!</p>
        <form className='mt-2' action="" onSubmit={handleSubmit}>
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

          <button className='bg-primary text-white font-semibold text-lg hover:bg-secondary px-4 py-2 w-full max-w-sm md:max-w-md rounded mt-2 tracking-wider'>
            Let's go
          </button>
        </form>
        <p className='my-3 text-center'>Dont have an account ? <Link to={"/register"} className='hover:underline hover:text-primary font-semibold'>Register</Link> </p>
      </div>
    </div>
  )
}

export default CheckEmail