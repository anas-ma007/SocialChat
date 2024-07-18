import  { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { BACKEND_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { logout, setUser } from '../redux/userSlice'
import SiderBar from '../components/SiderBar'

const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const user = useSelector(state => state.user)
  console.log(user, "user from home page use selector");

  const fetchUserDetails = async () => {
    try {
      const URL = `${BACKEND_URL}/api/user-details`

      const response = await axios({
        url: URL,
        withCredentials: true
      })

      dispatch(setUser(response?.data?.data))

      if (response?.data?.logout) {
        dispatch(logout())
        navigate("/email")
      }
      console.log(response?.data?.data, "login user details in home page get user details method");

    } catch (error) {
      console.log("Error in Home fetchUser details", error);
    }
  }

  useEffect(() => {
    fetchUserDetails()
  }, [])

  return (
    <div className='grid grid-cols-[320px,1fr] h-screen max-h-screen' >
      <section className='bg-white'>
        <SiderBar/>
      </section>
      {/* message component  */}
      <section>
        <Outlet />
      </section>
    </div>
  )
}

export default Home