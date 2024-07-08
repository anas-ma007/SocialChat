import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

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