import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BACKEND_URL } from '../utils/constants'
import toast from 'react-hot-toast'
import Avatar from '../components/Avatar'


const CheckPassword = () => {
  const [data, setData] = useState({
    password: ""
  })
  const navigate = useNavigate()
  const location = useLocation()
  const emailIdUserData = location?.state?.data || {}
  useEffect(() => {
    if (!emailIdUserData?.name) {
      navigate("/email")
    }
  }, [])

  const userName = emailIdUserData?.name?.split(" ") || []
  const userFirstName = userName[0]

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
    const URL = `${BACKEND_URL}/api/password`
    console.log(URL, "URL log");
    try {
      const response = await axios.post(URL, {
        userId: emailIdUserData?._id,
        password: data?.password
      })

      toast.success(response?.data?.message)
      if (response?.data?.success) {
        setData({
          password: "",
        })
        navigate("/")
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }


  return (
    <div className="p-2 pt-0  ">
      <div className='bg-slate-100 w-full max-w-sm md:max-w-md rounded overflow-hidden p-4 mt-3 mx-auto'>

        <div className='m-auto w-fit mb-4 mt-3 '>
          <Avatar className="pointer-events-none" name={emailIdUserData.name} width={90} height={90} imageUrl={emailIdUserData.profile_pic} />
        </div>
        <div className='text-center text-xl capitalize font-bold mb-3'>{userFirstName}</div>
        <p className='text-xl text-slate-800 font-medium font-serif'>Welcome to Social Chat..!</p>
        <form className='mt-1' action="" onSubmit={handleSubmit}>
          <div className='py-2 flex flex-col gap-2'>
            {/* <label className='font-semibold' htmlFor="password"> Password : </label> */}
            <input
              className='bg-slate-300 px-5 py-2 my-2 rounded shadow-2xl focus:bg-slate-400 focus:outline-primary'
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password'
              value={data.password}
              onChange={handleOnChange}
              required
            />
          </div>

          <button className='bg-primary text-white font-semibold text-lg hover:bg-secondary px-4 py-2 w-full max-w-sm md:max-w-md rounded mt-2 tracking-wider'>
            Let's go
          </button>
        </form>
        <p className='my-3 text-center font-semibold hover:underline'> <Link to={"/forgot-password"} className='hover:underline hover:text-primary '>Forgot Passwrod ?</Link> </p>
      </div>
    </div>
  )
}

export default CheckPassword

