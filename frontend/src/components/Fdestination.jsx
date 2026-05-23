import React from 'react'
import { roomsDummyData } from '../assets/assets'
import Card from './Card'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const Fdestination = () => {
    const navigate=useNavigate();
  return (

    <div className=' flex flex-col items-center px-6 md:px-10 lg:px-10   bg-slate-50 py-20'>
        <Title title='Featured Destination' subtitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta doloribus odit mollitia 
        culpa ipsam nisi eius esse vitae voluptatibus magni.'/>
        <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
        {
            roomsDummyData.slice(0,4).map((room,index)=>(

                <Card key={index} room={room} index={index}/>
            ))
        }
        </div>
        <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}}
         className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded
         bg-white hover:bg-gray-50 transition-all cursor-pointer' >View all Destinations</button>

    </div>
  )
}

export default Fdestination
