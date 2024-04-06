import React from 'react'

const AddContact = () => {
  return (
    <section>
        <div>
            <p>HAVING NEW CONTACT?</p>
        </div>
        <div>
            <form>
                <input className='flex flex-col-reverse' type='text' name='Full names'>Full names:</input>
                <input className='flex flex-col-reverse' type='email' name='Email'>Email:</input>
                <input className='flex flex-col-reverse' type='number' name='phone'>Phone:</input>
            </form>
        </div>
    </section>
  )
}

export default AddContact