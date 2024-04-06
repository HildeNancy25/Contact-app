import React from 'react'

function Contact() {
  return (
    <section id='Home' className='flex flex-col gap-8 p-5'>
      <div className='flex items-center gap-3'>
        <img src='https://cdn.iconscout.com/icon/free/png-256/free-contacts-47-461709.png'
        className=' w-12'></img>
        <h1 className='text-3xl'><b>Contacts</b></h1>
      </div>
      <div className='flex gap-20 items-center'>
        <p>Here is your contacts:</p>
        <a href='' className='bg-yellow-500 p-2 border rounded-2xl'> <button> ADD NEW </button></a>
      </div>
      <div className=' hover:border-l-2 hover:border-yellow-400 p-2'>
        <p className='text-xl'>Uwera Annick</p>
        <p>0788 888 888</p>
        <p>uweraa@gmail.com</p>
      </div>
      <div className=' hover:border-l-2 hover:border-yellow-400 p-2'>
        <p className='text-xl'>Samantha Umwali</p>
        <p>0788 888 888</p>
        <p>umwalisam@gmail.com</p>
      </div>
      <div className=' hover:border-l-2 hover:border-yellow-400 p-2'>
        <p className='text-xl'>Gloria Kamwezi</p>
        <p>0788 888 888</p>
        <p>glorkz@gmail.com</p>
      </div>
    </section>
  )
}

export default Contact