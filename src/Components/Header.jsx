import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex flex-row items-center md:gap-96 sm:gap-20'>
        <div className='flex gap-3'>
          <Link to='/home'><img src='https://cdn.iconscout.com/icon/free/png-256/free-contacts-47-461709.png'
          className=' md:w-12 sm:w-5'></img></Link>
          <h1 className='md:text-3xl sm:text-lg'><b>Contacts</b></h1>
      </div>
    </div>

  )
}

export default Header