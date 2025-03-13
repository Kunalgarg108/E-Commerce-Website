import Navbar from './componenets/Navbar'
import Sidebar from './componenets/Sidebar'
import {Routes , Route} from 'react-router-dom'
function App() {

  return (
     <div className='bg-gray-100 min-h-screen'>
      <>
        <Navbar />
        <hr />
        <div className='flex w-full'>
             <Sidebar />
             <div className='w-[82%] mx-auto ml-[max(5vw,25px)] my-6 text-gray-600 text-base'>
                
             </div>
        </div>
      </>
     </div>
  )
}

export default App
