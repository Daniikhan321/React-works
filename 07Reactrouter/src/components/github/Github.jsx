import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


export default function Github() {
    const data = useLoaderData();
    // const  [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/daniikhan321')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //          setData(data)
    //     })
       
    // }   , [])

  return (
    <div className='text-center bg-gray-600 text-white text-3xl p-4 m-4 rounded-lg'>
        Github Followers: {data.followers}
        <br />
        Github Following: {data.following}
        <img className='rounded-full ' src={data.avatar_url} alt="git image" width={300}/>
       
    </div>
  )
}


export const  githubInfoLoder = async () => {
    const response = await fetch('https://api.github.com/users/daniikhan321');
    const data = await response.json();
    return data;
} 