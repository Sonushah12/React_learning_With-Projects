import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';


const GitHub = () => {

    const data = useLoaderData() // this will return data from the api and we can store it on any variable for farther use 
    
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/sonushah12`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })

    // })
  return (
    <div className='text-center m-4 bg-purple-600 text-3xl p-4 text-white'>
        GitHub followers : {data.followers}
        <img  className='w-48 p-2 mt-4  border-2 rounded-lg' src={data.avatar_url} alt="GitHub Profile" />
        <h1>User :</h1>
        </div>
  )
}

export default GitHub;

export const GitHubInfo = async ()=>{
    const res = await fetch(`https://api.github.com/users/sonushah12`);

    return res.json()
}