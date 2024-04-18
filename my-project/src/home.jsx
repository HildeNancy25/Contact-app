import React from 'react'
import { useState,useEffect } from 'react'
import { FetchContacts } from "./apis/contacts"
import { FaUserPlus } from "react-icons/fa6"
import Contacts from './Contact'

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
      <div className='flex items-center '>
        <div>
          <a href='/'><img src='https://cdn.iconscout.com/icon/free/png-256/free-contacts-47-461709.png'
          className=' w-12'></img></a>
          <h1 className='text-3xl'><b>Contacts</b></h1>
        </div>
        <div>
        <a href='/SignIn' className='bg-yellow-500 p-2 border rounded-2x'> SIGN IN </a>
        </div>
      </div>
      <div className='flex md:gap-56 sm:gap-5 md:flex-row sm:flex-col-reverse items-center'>
        <p>All contacts:</p>
        <div className='flex gap-5'>
          <a href='/AddContact' className='bg-yellow-500 p-2 border rounded-2xl'> 
            <button className='flex flex-row items-center gap-3'> 
              ADD NEW <span><FaUserPlus /></span>
            </button>
          </a>
        </div>
      </div>
      <div className='flex flex-row'>
          <div className='flex justify-center items-start flex-wrap gap-7'>
            {contacts.map((contact) => (
              <Contacts key={contact._id} contact={contact} />
            ))}
          </div>
          {/* <a href='/viewContact'><div> {names.name}  </div></a>
          <a href='/viewContact'><div> {names.phone}  </div></a>
          <a href='/viewContact'><div> {names.email}  </div></a> */}
      </div>
        
      {/* <div className='p-3 border-2 border-yellow-600 rounded-2xl w-20'>
        <button onClick={checkNames}>Check</button>
        <span> {names.message} </span>
      </div> */}
    </section>
  )
}

export default Home