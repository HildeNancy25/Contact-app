import React from 'react'
import { useState } from 'react';
import ResponseMessage from './Response';
import { useNavigate } from 'react-router-dom';
import { AddingContact } from './apis/contacts';
import Header from './Components/Header';

const AddContact = () => {

  const [message, setMessage] = useState({
    type: '',
    content: ''
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState (false);
  const [contact, setContact] = useState({
    fullName: '',
    phone: '',
    email: ''
  });

  const submitContacts = (event) => {
    event.preventDefault();
    console.log(contact);

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
      console.log('loading');

      AddingContact(contact)
      .then((response) => {
        setLoading(false);
        setMessage({
          type: 'success',
          content: response
    }); 
    console.log('then');


        setContact({
          fullName: '',
          phone: '',
          email: ''
        });

        setTimeout(() =>{
          navigate('/home')
        }, 1000)
      })
      .catch ((error) =>{
        setMessage({
          type: 'error',
          content: error
        })
      console.log('catch');
    })
    }
  };
  const handleInput = (event) => {
    setContact({...contact, [event.target.name]: event.target.value});
  };


  return (
    <section id='AddContact' className='flex flex-col gap-8 p-5 items-center'>
      <Header />
      <div>
        <p>HAVING NEW CONTACT?</p>
      </div>
      <div>
        <form onSubmit={submitContacts} className='flex flex-col gap-3'>
        <label>
            Full names:
            <input className='flex border border-slate-500 p-2 md:w-80 sm:w-72' type='text' name='fullName'
            value={contact.fullName} onChange={handleInput} placeholder='enter names'/>
          </label>
          <label>
            Email:
            <input className='flex border border-slate-500 p-2 md:w-80 sm:w-72' type='email' name='email'
            value={contact.email} onChange={handleInput} placeholder='enter email'/>
          </label>
          <label>
            Phone:
            <input className='flex border border-slate-500 flex-col-reverse p-2 md:w-80 sm:w-72' type='number' name='phone'
            value={contact.phone} onChange={handleInput} placeholder='enter phone number'/>
          </label>
          
          <button type='submit'
            disabled={loading}
            className='bg-yellow-500 p-2 border rounded-2xl mt-4'
            >
              {loading && 'loading...'}
              {!loading && 'Add Contact'}
          </button>
        </form>
       
        <div className='w-40 border-yellow-300'>
        <ResponseMessage type={message.type} content={message.content} />
        </div>
      </div>
    </section>
  )
}

export default AddContact