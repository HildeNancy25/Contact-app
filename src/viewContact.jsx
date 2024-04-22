import React from 'react'
import { useState, useEffect } from 'react'
import { FetchContactById } from './apis/contacts';
import { useParams } from 'react-router-dom';
import { DeleteContact } from './apis/contacts';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"

function ViewContact() {
  let params = useParams();
  let navigate = useNavigate();
  const [user, setUser] = useState();
  const [msg, setMsg] = useState({
    type: '',
    content: '',
});
  
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

  const deleteContact =(event) => {
    event.preventDefault();
    DeleteContact (params.id)
    .then((response) => {
      setMsg({
        type: 'success',
        content: response
      });

      setTimeout(() => {
        navigate('/');
      }, 1000); 
    })
    .catch((err) => {
      setMsg({
        type: '',
        content: err
      })
    })
  }


  return (
    <section className='flex flex-col gap-8 p-5 items-center'>
        <div className='flex items-center gap-3'>
            <a href='/'><img src='https://cdn.iconscout.com/icon/free/png-256/free-contacts-47-461709.png'
            className=' w-12'></img></a>
            <h1 className='text-3xl'><b>Contacts</b></h1>
        </div>
        <div className='flex flex-row-reverse items-center justify-center'>
          <div>
            <p className='mb-5 text-2xl'>Contact Details:</p>
            <div> {user?.fullName} </div>
            <div> {user?.email} </div>
            <div> {user?.phone} </div>
          </div>
          <div>
            <img src='https://icon-library.com/images/contacts-icon-png/contacts-icon-png-16.jpg' className='w-16'></img>
          </div>
        </div>
        <div className='flex items-center gap-5'>
            <Link to={`/UpdateContact/${params.id}`} >
              <span className='bg-yellow-500 p-2 border rounded-2xl'>Update Contact</span>
            </Link>
            <button onClick={deleteContact} className='bg-red-500 p-2 border rounded-2xl'>delete Contact</button>
        </div>
    </section>
  )
}

export default ViewContact