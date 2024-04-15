import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddContact = () => {

  const [message, setMessage] =-useState({
    type: '',
    content: ''
  });

  const navigate = ueeNavigate();
  const [loading, setLoading] = useState (false);
  const [contact, setContact] = useState({
    fullName: '',
    phone: '',
    email: ''
  });

  const submitContacts = (event) => {
    event.preventDefault();

    if (contact.fullName === ''){
      setMessage({
        type: 'error',
        content: 'Please enter names !'
      });
      return;
    } else if (contact.email === ''){
      setMessage({
        type: '',
        content: 'Please enter an Email !'
      });
      return;
    } else if ( contact.phone === ''){
      setMessage({
        type: '',
        content: 'Please enter phone number !' 
      });
      return;
    } else {
      setLoading(true);

      AddContact(contact)
      .then(response => {
        setLoading(false);
        setMessage({
          type: 'success',
          content: response
        });

        setContact({
          fullName: '',
          phone: '',
          email: ''
        });

        setTimeout(() =>{
          navigate('/')
        }, 5000)
      })
      .catch ((error) =>{
        setMessage({
          type: 'error',
          content: error
        })
      })
    }
  };
  const handleInput = (event) => {
    setContact({...contact, [event.target.name]: event.target.value});
  };


  return (
    <section id='AddContact' className='flex flex-col gap-8 p-5 items-center'>
      <div className='flex items-center gap-3 '>
        <a href='/'><img src='https://cdn.iconscout.com/icon/free/png-256/free-contacts-47-461709.png'
        className=' w-12'></img></a>
        <h1 className='text-3xl'><b>Contacts</b></h1>
      </div>
      <div>
        <p>HAVING NEW CONTACT?</p>
      </div>
      <div>
        <form onSubmit={submittContacts} className='flex flex-col gap-3'>
        <label>
            Full names:
            <input className='flex border border-slate-500 p-2 md:w-80 sm:w-72' type='text' name='Full names'
            value={contact.fullName} onChange={handleInput} placeholder='enter names'/>
          </label>
          <label>
            Email:
            <input className='flex border border-slate-500 p-2 md:w-80 sm:w-72' type='email' name='Email'
            value={contact.email} onChange={handleInput} placeholder='enter email'/>
          </label>
          <label>
            Phone:
            <input className='flex border border-slate-500 flex-col-reverse p-2 md:w-80 sm:w-72' type='number' name='phone'
            value={contact.phone} onChange={handleInput} placeholder='enter phone number'/>
          </label>
          {/* <label>
            Birth date:
            <input className='flex border border-slate-500 flex-col-reverse p-2 md:w-80 sm:w-72' type='date' name='date'/>
          </label>
          <label>
            Address:
            <input className='flex border border-slate-500 flex-col-reverse p-2 md:w-80 sm:w-72' type='text' name='address'/>
          </label> */}
        </form>
        <a href='/'>
          <button
            type='submit'
            disabled={loading}
            className='bg-yellow-500 p-2 border rounded-2xl mt-4'
            >
              {loading && 'loading...'}
              {!loading && 'Add Contact'}
          </button>
        </a>
        <div className='w-40 border-yellow-300'>
          <ResponseMessage type ={message.type} content={message.content} />
        </div>
      </div>
    </section>
  )
}

export default AddContact