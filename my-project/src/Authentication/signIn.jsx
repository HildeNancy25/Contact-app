import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {

  const [response, setResponse] = useState({
    type: '',
    content: ''
  });

  const [loading, setLoading] = useState(false);
  const [signIn, setSignIn] = useState({
    email: '',
    password: ''
  });


  const handleSignIn = (event) => {
    event.preventDefault();
    setLoading(true);

    signInFunction(signIn)
      .then(response => {
        console.log(response);
        setResponse({
          type: 'success',
          content: 'You are Logged IN !'
        });
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('token', response.token);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setSignIn({
          email: '',
          password: ''
        });
        window.location.replace('/Home')
      })
      .catch(error => {
        console.log(error.message);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setResponse({
          type: '',
          content: ''
        });
      })
  }

  const handleInput = (event) => {
    event.preventDefault({
      ...SignIn,
      [event.target.name]: event.target.value
    })
  }

  return (

    <section className='flex flex-col justify-center items-center mt-32'>
      <div className='w-5/12 h-96 border-2 border-gray-400 flex flex-col items-center'>
        <div className='text-2xl mt-5'>
          <b>SIGN IN</b>
        </div>
        <form onSubmit={handleSignIn} className='flex flex-col gap-3 mt-5'>
          <label>
            Full names:
            <input className='flex border bg-gray-100 border-slate-500 p-2 md:w-80 sm:w-72' type='text' name='fullName'
              placeholder='enter names' onChange={handleInput} />
          </label>
          <label>
            Email:
            <input className='flex border bg-gray-100 border-slate-500 p-2 md:w-80 sm:w-72' type='email' name='email'
              placeholder='enter email' onChange={handleInput} />
          </label>
          <div className='flex flex-row gap-5'>
            <Link to='' className=' text-blue-400 underline' >Forgot password ?</Link>
            <Link to='/SignUp' className=' text-blue-400 underline' >Don't have account ?</Link>
          </div>
          <div className='mt-3'>
            <Link to='/'
              className='bg-yellow-500 p-2 border rounded-2xl mt-4 w-20'
            >  
              {loading && '...'}
              {!loading && 'SIGN IN'}
            </Link>
          </div>
        </form>
        <ResponseMessage type={response.type} content={respond.content} />
      </div>
    </section>

  )
}

export default SignIn