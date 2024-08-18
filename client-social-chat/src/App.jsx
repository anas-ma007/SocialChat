import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

const App = () => {
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