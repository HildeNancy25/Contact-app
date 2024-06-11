import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {

   return (

    <section className='flex flex-col justify-center items-center mt-32'>
      <div className='md:w-5/12 sm:w-80 h-96 border-2 border-gray-400 flex flex-col items-center'>
        <div className='text-2xl mt-5'>
          <b>SIGN IN</b>
        </div>
        <form  className='flex flex-col gap-3 mt-5'>
          <label>
            Email:
            <input className='flex border bg-gray-100 border-slate-500 p-2 md:w-80 sm:w-72' type='email' name='email'
              placeholder='Enter your email'  />
          </label>
          <label>
            Password:
            <input className='flex border bg-gray-100 border-slate-500 p-2 md:w-80 sm:w-72' type='password' name='password'
              placeholder='Enter password'  />
          </label>
          <div className='flex flex-row gap-5'>
            <Link to='/Sign-up' className=' text-blue-400 underline' >Don't have account ?</Link>
          </div>
          <Link to='/home' className='mt-3 bg-yellow-500 p-2 border rounded-2xl w-20'><button> SIGN IN </button>
            {/* <Link to='/'
              className='bg-yellow-500 p-2 border rounded-2xl mt-4 w-20'
            >
              {loading && '...'}
              {!loading && 'SIGN IN'}
            </Link> */}
          </Link>
        </form>
        {/* <ResponseMessage type={response.type} content={respond.content} /> */}
      </div>
    </section>

  )
}

export default SignIn