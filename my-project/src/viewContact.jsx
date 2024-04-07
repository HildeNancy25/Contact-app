import React from 'react'

function ViewContact() {
  return (
    <section >
        <div>Contact Details</div>
        <div className='flex gap-5'>
            <a href='/UpdateContact'><button className='bg-yellow-500 p-2 border rounded-2xl'>Update Contact</button></a>
            <a href='/'><button className='bg-red-500 p-2 border rounded-2xl'>delete Contact</button></a>
        </div>
    </section>
  )
}

export default ViewContact