import React from 'react'
import { useState, useEffect } from 'react'
import { FetchContacts } from "./apis/contacts"
import { FaUserPlus } from "react-icons/fa6"
import Contacts from './Contact'
import { Link } from 'react-router-dom'
import Header from './Components/Header'

const Home = () => {

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    FetchContacts()
      .then((response) => {
        setContacts(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [])

  // testing 

  function checkNames() {
    if (names.name === 'Anna Mary') {
      setNames.message = 'name check successful'
      return setNames.message;
    }
  }

  return (
    <section id='Home' className='flex flex-col gap-8 p-5 items-center'>
      <Header />
      <div className='flex md:gap-56 sm:gap-5 md:flex-row sm:flex-col-reverse items-center'>
        <p>All contacts:</p>
        <div className='flex gap-5'>
          <Link to='/add-contact' className='bg-yellow-500 p-2 border rounded-2xl'>
            <button className='flex flex-row items-center gap-3'>
              ADD NEW <span><FaUserPlus /></span>
            </button>
          </Link>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='flex justify-center items-start flex-wrap gap-7 w-[90%] ml-10'>
          {loading ? (
            <p className='pt-10'>Loading...</p>
          ) : (
            contacts.map((contact) => (
              <Contacts key={contact._id} contact={contact} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Home