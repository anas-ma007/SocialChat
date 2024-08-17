import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
// import { useEffect } from 'react';

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