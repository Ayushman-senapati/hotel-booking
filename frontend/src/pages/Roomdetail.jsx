import React, { useEffect, useState } from 'react'
import { Form, useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import Rating from '../components/Rating';

const Roomdetail = () => {
    const {id}= useParams();
    const [room,setRoom]=useState(null)
    const [mainimage,setMainimage]=useState(null)
  useEffect(()=>{
    const froom=roomsDummyData.find(room=>room._id==id)
     froom && setRoom(froom)
     froom && setMainimage(froom.images[0])

  }, [room])
  return room && (
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">{room.hotel.name} <span className='font-inter text-sm'>{room.roomType}</span></h1>
        </div>
        {/* rating */}
        <div className='flex items-center gap-1 mt-2'>
          <Rating/>
          <p className='ml-2'>200+ reviews</p>
        </div>
        {/* address */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
            <img src={assets.locationIcon} alt="" />
            <span>{room.hotel.address}</span>
        </div>
        
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className='lg:w-1/2 w-full '>
            <img src={mainimage} alt="" className='rounded-xl w-full shadow-lg object-cover'/>
          </div>
          <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full place-items-center'>
          {room?.images.length > 1 &&
            room.images.map((image, index) => (
              <img
                onClick={() => setMainimage(image)}
                key={index}
                src={image}
                alt="Room Image"
                className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                  mainimage === image && 'outline-3 outline-orange-500'
                }`}
              />  
            ))}
           </div>
        </div>
       {/* room highlights */}
        <div className="flex flex-col  md:justify-between mt-10">
          <div className='flex flex-col'>
            <h1 className='text-3xl md:text-4xl font-pf'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, reprehenderit!</h1>
          </div>
          <div className='flex  items-center mt-3 mb-6 gap-4'>
              {room.amenities.map((item,index)=>(
                <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
                      <img src={facilityIcons[item]} alt="" className='w-5 h-5 '/>
                      <p className='text-xs'>{item}</p>
                </div>
              ))}
          </div>
        </div>
          <p>${room.pricePerNight}/night</p>
          <hr className='opacity-20 mt-5' />

        {/* checkin & checkout form */}
          <form
            action=""
            className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl gap-6"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-gray-500 flex-1">
              
              <div className='flex flex-col'>
                <label htmlFor="cin" className='font-medium'>
                  Check in
                </label>

                <input
                  type="date"
                  id='cin'
                  placeholder='check-in'
                  className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                />
              </div>

              <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>

              <div className='flex flex-col'>
                <label htmlFor="cout" className='font-medium'>
                  Check out
                </label>

                <input
                  type="date"
                  id='cout'
                  placeholder='Check-out'
                  className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                />
              </div>

              <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>

              <div className='flex flex-col'>
                <label htmlFor="guest" className='font-medium'>
                  Guests
                </label>

                <input
                  type="number"
                  id='guest'
                  placeholder='Guests'
                  className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                />
              </div>

            </div>

            <button
              type='submit'
              className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md px-8 py-3 text-base cursor-pointer whitespace-nowrap"
            >
              Check Availability
            </button>
          </form>

      {/* common features */}
      <div className='mt-15x'>
        {roomCommonData.map((spec ,index)=>(
          <div className='flex items-start gap-2 mt-5'>
              <img src={spec.icon} alt="" className='w-6.5' />
              <div>
                <p className='text-base'>{spec.title}</p>
                <p className='text-gray-500'>{spec.description}</p>
              </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col items-start gap-4 mt-10'>
        <div className='flex gap-4 '>
          <img src={room.hotel.owner.image} alt="" />
          <div>
            <p className='text-lg md:text-xl'>Hosted by {room.hotel.name}</p>
            <div>
                <Rating/>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Roomdetail
