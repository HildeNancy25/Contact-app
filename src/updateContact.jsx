import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FetchContactById } from './apis/contacts'
import Header from './Components/Header';

function UpdateContact () {
  
  let params = useParams();
  let navigate =useNavigate();

  const [loading, setLoading] = useState (false);
  const [contact, setContact] = useState ({
    fullName:'',
    email: '',
    phone: ''
  })
  const [getuser, setGetUser] = useState()
  
  useEffect(() => {
    FetchContactById(params.id)
    .then((response) =>{
      console.log(response)
      setGetUser(response);

      setContact({
        fullName: response.fullName,
        email: response.email,
        phone: response.phone
      })
      setTimeout(() => {
        navigate(`/home`);
      }, 1000);
      
    })
    .catch((err) =>{
      console.log(err)
    })
  },[])

  const handleInput = (event) =>{
    setContact({...contact, [event.target.name]: event.target.value});
  }

  return (
    <section id='Update' className='flex flex-col gap-8 p-5 items-center'>
      <Header />
      <div className='mt-5 md:text-3xl sm:text-xl'>Updating contact information</div>
      <div>
        <form className=' flex flex-col gap-3'>
          {/* <label>
            Profile picture:
            <input className='flex border border-slate-500 text-gray-500 h-40 w-40' type='' name='change photo'/>
              <Link><button type='submit' className='bg-yellow-500 p-2 border rounded-2xl mt-4'>Upload picture</button></Link>
          </label> */}
          <label>  
            Full names:
            <input className='flex border border-slate-500 text-gray-500 p-2 md:w-80 sm:w-72' 
            type='text' name='Full names' value={contact.fullName} onChange={handleInput} />
            </label>
          <label>
            Email:
            <input className='flex border border-slate-500 p-2 md:w-80 sm:w-72' 
            type='email' name='Email' value={contact.email} onChange={handleInput}/>
          </label>
          <label>
            Phone:
            <input className='flex border border-slate-500 flex-col-reverse p-2 md:w-80 sm:w-72' 
            type='number' name='phone' value={contact.phone} onChange={handleInput}/>
          </label>
          {/* <label>
            Birth date:
            <input className='flex border border-slate-500 flex-col-reverse p-2 md:w-80 sm:w-72' type='date' name='date'/>
          </label> */}
        <button type='submit'
            disabled={loading}
            className='bg-yellow-500 p-2 border rounded-2xl mt-4'
            >
              {loading && 'loading...'}
              {!loading && 'Update Contact'}
          </button>
        </form> 
      </div>
    </section>
  )
}

export default UpdateContact