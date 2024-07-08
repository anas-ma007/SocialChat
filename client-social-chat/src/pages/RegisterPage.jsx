import React, { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import uploadFile from '../helpers/uploadFile';
import { BACKEND_URL } from '../utils/constants';
import axios from 'axios';
import toast from 'react-hot-toast';

const RegisterPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profile_pic: ""
  })

  const [uploadPhoto, setUploadPhoto] = useState("")

  const handleUploadPhoto = async (e) => {
    let file = e.target.files[0]
    const uploadPhoto = await uploadFile(file)
    // console.log(uploadPhoto, "upload photo in handleUploadPhoto methd");
    setUploadPhoto(file)
  }


  const handleOnChange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const handleClearPhoto = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setUploadPhoto(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    const URL = `${BACKEND_URL}/api/register`
    try {
      const response = await axios.post(URL, data)
      console.log(response, "reponse in user register success ");
      
      toast.success(response?.data?.message)
      if (response?.data?.success) {
        setData({
          name: "",
          email: "",
          password: "",
          profile_pic: ""
        })
      }

    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }


  return (
    <div className="p-2 pt-0  ">
      <div className='bg-slate-100 w-full max-w-sm md:max-w-md rounded overflow-hidden p-4 mt-3 mx-auto'>
        <p className='text-xl text-slate-800 font-extrabold font-serif'>Welcome to Social Chat..!</p>

        <form className='mt-5' action="" onSubmit={handleSubmit}>
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

          <div className='py-2 flex flex-col gap-2'>
            <label className='font-semibold' htmlFor="profile_pic"> Photo :

              <div className='h-14 bg-slate-200 flex justify-center items-center border hover:border-primary cursor-pointer'>
                <p className='ml-2 text-sm max-w-[300px] text-ellipsis line-clamp-1 '>
                  {
                    uploadPhoto?.name ? (uploadPhoto?.name) : ("Upload Profile photo")
                  }
                </p>
                {
                  uploadPhoto?.name && (
                    <button className='ml-2 mr-auto text-2xl font-extrabold  hover:text-red-600' onClick={handleClearPhoto}>
                      <IoCloseCircleOutline />
                    </button>
                  )
                }
              </div>
            </label>
            <input
              className='bg-slate-200 px-5 py-1 rounded shadow-2xl focus:bg-slate-300 focus:outline-primary'
              type='file'
              id='profile_pic'
              name='profile_pic'
              hidden
              required
              onChange={handleUploadPhoto}
            />
          </div>

          <button className='bg-primary text-white font-semibold text-lg hover:bg-secondary px-4 py-2 w-full max-w-sm md:max-w-md rounded mt-2 tracking-wider'>
            Register
          </button>

        </form>

        <p className='my-3 text-center'>Aleardy have an account ? <Link to={"/email"} className='hover:underline hover:text-primary font-semibold'>Login</Link> </p>
      </div>

    </div>


  )
}

export default RegisterPage




