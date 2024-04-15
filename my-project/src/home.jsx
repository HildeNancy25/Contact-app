import React from 'react'
import { useState,useEffect } from 'react'
import { FetchContacts } from "./apis/contacts"
import Contact from './Contact';


const Home = () => {

  const [contacts, setContacts] = useState([]);
    // name:'Anna Mary',
    // phone: '078888888',
    // email: 'anna@gmail.com',
    // message: ''
  

  useEffect(() =>{
    FetchContacts()
      .then((response) => {
        setContacts(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  // testing 

  function checkNames (){
   if(names.name === 'Anna Mary'){
    setNames.message = 'name check successful'
    return setNames.message;
   }
  }
   
return (
    <section id='Home' className='flex flex-col gap-8 p-5 items-center'>
      <div className='flex items-center gap-3'>
        <a href='/'><img src='https://cdn.iconscout.com/icon/free/png-256/free-contacts-47-461709.png'
        className=' w-12'></img></a>
        <h1 className='text-3xl'><b>Contacts</b></h1>
      </div>
      <div className='flex gap-24 items-center'>
        <p>All contacts:</p>
        <div className='flex gap-5'>
          <a href='/AddContact' className='bg-yellow-500 p-2 border rounded-2xl'> <button> ADD NEW </button></a>
        </div>
      </div>
      <div className='flex flex-row gap-4hover:border-l-2 hover:border-yellow-400 px-3'>
        {/* <div className='w-20'>
          <img src='https://icon-library.com/images/contacts-icon-png/contacts-icon-png-16.jpg'></img>
        </div> */}
        <div className='flex flex-col gap-2'>
          <div>
            {contacts.map((contact) => (
              <Contact key={contact._id} contact={contact} />
            ))}
          </div>
          {/* <a href='/viewContact'><div> {names.name}  </div></a>
          <a href='/viewContact'><div> {names.phone}  </div></a>
          <a href='/viewContact'><div> {names.email}  </div></a> */}
        </div>
      </div>
        
      {/* <div className='p-3 border-2 border-yellow-600 rounded-2xl w-20'>
        <button onClick={checkNames}>Check</button>
        <span> {names.message} </span>
      </div> */}
    </section>
  )
}

export default Home