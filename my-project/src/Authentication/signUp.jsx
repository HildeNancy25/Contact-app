import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
    <section className='flex flex-col justify-center items-center mt-32'>
        <div className='w-5/12 h-full border-2 border-gray-400 flex flex-col items-center'>
            <div className='text-2xl'>
                <b>SIGN UP</b>
            </div>
            <form className='flex flex-col gap-3'>
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
                <label>
                    Password:
                    <input className='flex border bg-gray-100 border-slate-500 p-2 md:w-80 sm:w-72' type='password' name='email'
                    placeholder='enter password'/>
                </label>
                <label>
                    Confirm password:
                    <input className='flex border bg-gray-100 border-slate-500 p-2 md:w-80 sm:w-72' type='password' name='email'
                    placeholder='re-enter password'/>
                </label>
                <div >
                    <Link to ="/SignIn" className=' text-blue-400 underline' >Already have account ?</Link>
                </div>
                <button type='submit'
                className='bg-yellow-500 p-2 border rounded-2xl mt-4 w-32'
                > SIGN UP </button>

            </form>
        </div>
    </section>
    </>
    )
}

export default SignUp