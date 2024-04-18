import React from 'react'

const SignIn = () => {
  return (
    <>
    <section className='flex flex-col gap-5 justify-center items-center mt-30'>
        <div className='text-2xl'><b>SIGN IN</b></div>
        <form className='flex flex-col gap-3'>
            <label>
                Full names:
                <input className='flex border border-slate-500 p-2 md:w-80 sm:w-72' type='text' name='fullName'
                 placeholder='enter names'/>
            </label>
            <label>
                Email:
                <input className='flex border border-slate-500 p-2 md:w-80 sm:w-72' type='email' name='email'
                 placeholder='enter email'/>
            </label>
            <div className='flex flex-row gap-5'>
                <button className=' text-blue-400 underline' >Forgot password ?</button>
                <button className=' text-blue-400 underline' >Don't have account ?</button>
            </div>
            <button type='submit'
            className='bg-yellow-500 p-2 border rounded-2xl mt-4 w-32'
            > SIGN IN </button>

        </form>
    </section>
    </>
  )
}

export default SignIn