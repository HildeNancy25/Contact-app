import React from 'react'

const AddContact = () => {
  return (
    <section id='AddContact' className='flex flex-col gap-8 p-5'>
      <div className='flex items-center gap-3 ml-8'>
        <a href='/'><img src='https://cdn.iconscout.com/icon/free/png-256/free-contacts-47-461709.png'
        className=' w-12'></img></a>
        <h1 className='text-3xl'><b>Contacts</b></h1>
      </div>
      <div>
        <p>HAVING NEW CONTACT?</p>
      </div>
      <div>
        <form className='flex flex-col gap-3'>
        <label>
            Full names:
            <input className='flex border border-slate-500 text-gray-500' type='text' name='Full names'/>
          </label>
          <label>
            Email:
            <input className='flex border border-slate-500' type='email' name='Email'/>
          </label>
          <label>
            Phone:
            <input className='flex border border-slate-500 flex-col-reverse' type='number' name='phone'/>
          </label>
          <label>
            Birth date:
            <input className='flex border border-slate-500 flex-col-reverse' type='date' name='date'/>
          </label>
          <label>
            Address:
            <input className='flex border border-slate-500 flex-col-reverse' type='text' name='address'/>
          </label>
        </form>
        <a href='/'><button className='bg-yellow-500 p-2 border rounded-2xl mt-4'>Add Contact</button></a>
      </div>
    </section>
  )
}

export default AddContact