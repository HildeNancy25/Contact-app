import React from 'react'

const ResponseMessage = ({type,content}) => {
  return (
    <div>
    {type === 'success' && <p>{content} </p>}
    {type === 'error' && <p>{content} </p>}
    </div>
  )
}

export default ResponseMessage