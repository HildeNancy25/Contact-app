import React from 'react'
import Contact from './App'

const UpdateContact = () => {
  return (
    <section>
    <Contact />
    <div className='flex'>
      <button>Update Contact</button>
      <button>delete Contact</button>
    </div>
    </section>
  )
}

export default UpdateContact