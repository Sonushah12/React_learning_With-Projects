import React from 'react'
import { useParams } from 'react-router-dom'



const User = () => {
    const {id} = useParams();
  return (
    <div className='bg-purple-600 p-4 text-white text-2xl '>User : {id}</div>
  )
}

export default User