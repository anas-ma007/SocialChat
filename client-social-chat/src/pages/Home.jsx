import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { BACKEND_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { logout, setUser } from '../redux/userSlice'
import SiderBar from '../components/SiderBar'
import logo from "../assets/Logo crop.jpeg"

const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const user = useSelector(state => state.user)

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
    } catch (error) {
      console.log("Error in Home fetchUser details", error);
    }
  }

  useEffect(() => {
    fetchUserDetails()
  }, [])

  const basePath = location.pathname === "/"

  return (
    <div className='grid lg:grid-cols-[320px,1fr] h-screen max-h-screen' >
      <section className={`bg-white ${!basePath && "hidden"} lg:block`}>
        <SiderBar />
      </section>
      {/* message component  */}
      <section className={`${basePath && "hidden"}`}>
        <Outlet />
        <div className='flex justify-center items-center flex-col'>
          <div>
            <img src={logo} width={200} alt="logo" />
          </div>
          <p className=''>Select user to send message</p>
        </div>
      </section>

    </div>
  )
}

export default Home