import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {

  
  return (
    
    <section className='flex flex-col justify-center items-center mt-32'>
      <div className='w-5/12 h-96 border-2 border-gray-400 flex flex-col items-center'>
        <div className='text-2xl mt-5'>
          <b>SIGN IN</b>
        </div>
        <form className='flex flex-col gap-3 mt-5'>
            <label>
                Full names:
                <input className='flex border bg-gray-100 border-slate-500 p-2 md:w-80 sm:w-72' type='text' name='fullName'
                 placeholder='enter names'/>
            </label>
            <label>
                Email:
                <input className='flex border bg-gray-100 border-slate-500 p-2 md:w-80 sm:w-72' type='email' name='email'
                 placeholder='enter email'/>
            </label>
            <div className='flex flex-row gap-5'>
                <Link to='' className=' text-blue-400 underline' >Forgot password ?</Link>
                <Link to='/SignUp' className=' text-blue-400 underline' >Don't have account ?</Link>
            </div>
            <div className='mt-3'>
              <Link to='/'
              className='bg-yellow-500 p-2 border rounded-2xl mt-4 w-20'
              > SIGN IN </Link>
            </div>
        </form>
      </div>
    </section>
    
  )
}

export default SignIn