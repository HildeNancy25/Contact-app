import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { FetchContactById } from './apis/contacts';
import { useParams } from 'react-router-dom';
import ResponseMessage from './Response';

function ViewContact() {
  let params = useParams();

  const [user, setUser] = useState();
  
  useEffect(() => {
    FetchContactById(params.id)
    .then((response) => {
      console.log(response)
      setUser(response)
  })
  .catch((err) => {
      console.log(err);
  });
  },[params.id])


  return (
    <section className='flex flex-col gap-8 p-5 items-center'>
        <div className='flex items-center gap-3'>
            <a href='/'><img src='https://cdn.iconscout.com/icon/free/png-256/free-contacts-47-461709.png'
            className=' w-12'></img></a>
            <h1 className='text-3xl'><b>Contacts</b></h1>
        </div>
        <div>
          <p className='mb-5 text-2xl'>Contact Details:</p>
          <div> {user?.fullName} </div>
          <div> {user?.email} </div>
          <div> {user?.phone} </div>
        </div>
        <div className='flex gap-5'>
            <a href='/UpdateContact'><button className='bg-yellow-500 p-2 border rounded-2xl'>Update Contact</button></a>
            <a href='/'><button className='bg-red-500 p-2 border rounded-2xl'>delete Contact</button></a>
        </div>
    </section>
  )
}

export default ViewContact