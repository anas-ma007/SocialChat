import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const App = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const emailIdUserData = location?.state?.data || {}
  useEffect(() => {
    if (!emailIdUserData?.name) {
      navigate("/email")
    }
  }, [])


  return (
    <>
      <Toaster />
      <main className=' '>
        <Outlet />
      </main>
    </>
  )
}

export default App