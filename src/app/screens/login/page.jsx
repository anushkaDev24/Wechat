import Image from 'next/image'
import React from 'react'
import loginpic from '../../assets/img1.png'
const Page = () => {  
  return (
    <div className='bg-white'>
      <div className='flex justify-around items-center h-screen '>
        <div className='bg-[#5F9C50] ml-16 rounded-xl'><Image className='p-20 ' src={loginpic} alt='login photo' width={500} height={400}/></div>
          <div className='flex-col bg-blackk w-1/2'>
            <div className='flex justify-center text-4xl'>Login</div>
            <div className=' flex justify-center text-sm text-slate-600'>Welcome back! Please enter your details</div>
            <div className='mt-20 text-xl text-slate-800 ml-24'>E-mail:</div>
            <div className='ml-24 mr-24'><div className='bg-[#CFE2CB]'><input type="text" className='bg-[transparent] w-full h-9'/></div></div>
            <div className='mt-10 text-lg text-slate-800 ml-24'>Password:</div>
            <div className='ml-24 mr-24'><div className='bg-[#CFE2CB]'><input type="text" className='bg-[transparent] w-full h-9'/></div></div>
            <div className='text-xs text-slate-600 ml-24'>Forgot Password</div>
            <div className='flex justify-center mt-20 text-lg '><div className='w-20 h-8 items-center bg-[#5F9C50] flex justify-center text-white rounded'>Login</div></div>
            <div className='flex justify-center text-xs text-slate-600 mt-2'>Don't have an account?Signup</div>
        </div>
      </div>
    </div>
  )
}
export default Page