import React from 'react'

function Contact() {
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
          <a>
            <img href='https://cdn0.iconfinder.com/data/icons/30-hardware-line-icons/64/Search-512.png'></img>
          </a>
        </div>
      </div>

      {/* CONTACTS  */}
      <div>

        <div className=' hover:border-l-2 hover:border-yellow-400 p-2 flex items-center gap-2'>
          <div>
            <img src='https://icon-library.com/images/contacts-icon-png/contacts-icon-png-16.jpg' className='w-16'></img>
          </div>
          <div>
              <a href='/ViewContact'>
                  <p className='text-xl'>Uwera Annick</p>
                  <p>0788 888 888</p>
                  <p>uweraa@gmail.com</p>
              </a>
          </div>
        </div>
        <div className='hover:border-l-2 hover:border-yellow-400 p-2 flex items-center gap-2'>
          <div>
            <img src='https://icon-library.com/images/contacts-icon-png/contacts-icon-png-16.jpg' className='w-16'></img>
          </div>
          <div>
              <a href='/ViewContact'>
                  <p className='text-xl'>Samantha Umwali</p>
                  <p>0788 888 888</p>
                  <p>umwalisam@gmail.com</p>
              </a>
          </div>
        </div>
        <div className=' hover:border-l-2 hover:border-yellow-400 p-2 flex items-center gap-2'>
          <div>
            <img src='https://icon-library.com/images/contacts-icon-png/contacts-icon-png-16.jpg' className='w-16'></img>
          </div>
          <div>
              <a href='/ViewContact'>
                  <p className='text-xl'>Gloria Kamwezi</p>
                  <p>0788 888 888</p>
                  <p>glorkz@gmail.com</p>
              </a>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Contact