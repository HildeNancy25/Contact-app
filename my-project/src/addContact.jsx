import React from 'react'

const AddContact = () => {
  return (
    <section id='AddContact' className='flex flex-col gap-8 p-5'>
      <div className='flex items-center gap-3 ml-8'>
        <img src='https://cdn.iconscout.com/icon/free/png-256/free-contacts-47-461709.png'
        className=' w-12'></img>
        <h1 className='text-3xl'><b>Contacts</b></h1>
      </div>
      <div>
        <p>HAVING NEW CONTACT?</p>
      </div>
      <div>
        {/* <form>
          <input className='flex flex-col-reverse' type='text' name='Full names'>Full names:</input>
          <input className='flex flex-col-reverse' type='email' name='Email'>Email:</input>
          <input className='flex flex-col-reverse' type='number' name='phone'>Phone:</input>
          <input className='flex flex-col-reverse' type='date' name='birthdate'>Birth date:</input>
          <input className='flex flex-col-reverse' type='text' name='address'>Address:</input>
        </form> */}
      </div>
    </section>
  )
}

export default AddContact