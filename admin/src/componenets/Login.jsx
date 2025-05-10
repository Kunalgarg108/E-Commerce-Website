import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {backendUrl} from '../App'
function Login({setToken}) {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const onSubmitHandler=async(e)=>{
    try{
      e.preventDefault();
      const response = await axios.post(backendUrl+'/api/user/adminlogin',{email:email,password:password})
      if(response.data.success){
        setToken(response.data.token)
      }
      else{
        toast.error(response.data.message);
      }
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md mx-auto'>
      <h1 className='text-2xl font-bold mb-3'>Admin Panel</h1>
      <form onSubmit={onSubmitHandler} >
        <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-600 mb-2'>
                Email
            </p>
            <input onChange={(e)=>{
              setEmail(e.target.value)
            }} value={email} type="email" placeholder='you@email.com' required className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-600 mb-2'>
                Password
            </p>
            <input onChange={(e)=>{
              setPassword(e.target.value)
            }} value={password}  type="password" placeholder='Enter your password' required className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <button type='submit' className='mt-2 w-full py-2 px-4 rounded-md text-white bg-blue-800'>Login</button>
      </form>
    </div>
    </div>

  )
}

export default Login
