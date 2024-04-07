import React from 'react'

function ViewContact() {
  return (
    <section className='flex flex-col gap-8 p-5 items-center'>
        <div className='flex items-center gap-3'>
            <a href='/'><img src='https://cdn.iconscout.com/icon/free/png-256/free-contacts-47-461709.png'
            className=' w-12'></img></a>
            <h1 className='text-3xl'><b>Contacts</b></h1>
        </div>
        <div>Contact Details</div>
        <div className='flex gap-5'>
            <a href='/UpdateContact'><button className='bg-yellow-500 p-2 border rounded-2xl'>Update Contact</button></a>
            <a href='/'><button className='bg-red-500 p-2 border rounded-2xl'>delete Contact</button></a>
        </div>
    </section>
  )
}

export default ViewContact