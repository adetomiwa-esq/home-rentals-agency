import React from 'react'
import backGround from '../images/homebackground.png'
import Map from '../images/map.png';
import { AiOutlineSearch } from 'react-icons/ai'

function HomeTop() {
  return (
    <div className='pt-14 px-5 sm:px-12 lg:px-28' style={{height: 'calc(600px - 64px)'}}>

        <div className='flex flex-col md:flex-row items-center'>
            <div className='text-white text-xl mb-6 md:mb-0 md:text-3xl lg:text-4xl w-full md:w-5/12 font-bold '>
                <h1>
                    The Most Affordable Place To Stay In The San Fransisco Bay Area
                </h1>
            </div>

            <div className='ml-auto w-full md:w-6/12 lg:w-4/12'>
                <div className='w-full h-72 lg:h-80'>
                    <img src={Map} alt='map' className='w-full h-full opacity-75 hover:opacity-90 md:opacity-100 md:hover:opacity-100'/>
                </div>

                <div className='bg-white p-4 mt-3 rounded-md flex'>
                    <select className='border h-10 w-4/12 outline-none'>
                        <option>
                            All Type
                        </option>
                    </select>

                    <select className='border h-10 w-6/12 outline-none'>
                        <option>
                            Neighbourhood
                        </option>
                    </select>

                    <button className='bg-blue-500 h-10 text-white w-2/12 flex text-3xl items-center justify-center outline-none'>
                        <AiOutlineSearch />
                    </button>
                </div>
            </div>
        </div>


        <div className='absolute top-0 left-0 right-0 -z-10 w-full' style={{height: '600px'}}>
            <img src={backGround} className='brightness-50 w-full bg-no-repeat bg-cover h-full object-cover' alt='bg'/>
        </div>
    </div>
  )
}

export default HomeTop