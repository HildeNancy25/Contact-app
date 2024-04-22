import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const [response, setResponse] = useState({
        type: '',
        content: ''
    });

    const [loading, setLoading] = useState(false)
    const [signUp, setSignUp] =useState({
        Names: '',
        email: '',
        password: '',
        confirmPassword:''
    });


    const handleSignUp = (event) => {
        event.preventDefault();
        setLoading(true);

        SignUpFunction(signUp)
        .then(response => {
            setResponse({
                type: 'success',
                content: response.message
            });
            setTimeout(() => {
                setLoading(false);
            }, 2000)
            
            setSignUp({
                Names: '',
                email: '',
                password: '',
                confirmPassword:''
            })
            window.location.replace('/sign-in');
        })
        .catch(error =>{
            console.log(error.message)

            setTimeout(() => {
                setLoading(false)
            }, 2000);
            setResponse({
                type: 'error',
                content: error.message
            });
        })
    } 

    const handleInput = (event) => {
        setSignUp({
            ...SignUp,
            [event.target.name]: event.target.value
        })
    }

  return (
    <>
    <section className='flex flex-col justify-center items-center mt-32'>
        <div className='w-5/12 h-full border-2 border-gray-400 flex flex-col items-center'>
            <div className='text-2xl'>
                <b>SIGN UP</b>
            </div>
            <form onSubmit={handleSignUp} className='flex flex-col gap-3'>
                <label>
                    Full names:
                    <input className='flex border bg-gray-100 border-slate-500 p-2 md:w-80 sm:w-72' type='text' name='fullName'
                    placeholder='enter names' onChange={handleInput}/>
                </label>
                <label>
                    Email:
                    <input className='flex border bg-gray-100 border-slate-500 p-2 md:w-80 sm:w-72' type='email' name='email'
                    placeholder='enter email' onChange={handleInput}/>
                </label>
                <label>
                    Password:
                    <input className='flex border bg-gray-100 border-slate-500 p-2 md:w-80 sm:w-72' type='password' name='email'
                    placeholder='enter password' onChange={handleInput}/>
                </label>
                <label>
                    Confirm password:
                    <input className='flex border bg-gray-100 border-slate-500 p-2 md:w-80 sm:w-72' type='password' name='email'
                    placeholder='re-enter password'onChange={handleInput}/>
                </label>
                <div >
                    <Link to ="/sign-in" className=' text-blue-400 underline' >Already have account ?</Link>
                </div>
                <button type='submit'
                className='bg-yellow-500 p-2 border rounded-2xl mt-4 w-32'
                > 
                    {loading && '...'}
                    {!loading && 'SIGN UP'}
                </button>

            </form>
            <ResponseMessage type={response.type} content={response.content} />
        </div>
    </section>
    </>
    )
}

export default SignUp