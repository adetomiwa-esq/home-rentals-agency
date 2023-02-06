import React, { useEffect } from 'react'
import flex1 from '../images/flex1.png';
import flex2 from '../images/flex2.png';
import flex3 from '../images/flex3.png';
import flex4 from '../images/flex4.png';
import 'aos/dist/aos.css';
import * as AOS from 'aos'

function DetailsTop() {

  useEffect(()=> {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div className='flex flex-col sm:flex-row sm:items-center px-8 lg:px-20 overflow-x-hidden'>
        <div className='text-white w-full sm:w-1/2 mr-12 lg:mr-16 text-base md:text-lg' data-aos="fade-right">
          <div className='flex items-end w-full'>
           <div className='relative w-2/4 mr-6 flex items-center justify-center h-56 lg:h-80'>
             <img className='w-full hover:w-11/12 hover:h-52 h-56 lg:h-80 lg:hover:h-72 transition-all delay-100' src={flex1} alt='reac-img'/>
             <div className='absolute top-4 w-full text-center mx-2'>Flexible Leases</div>
           </div>

           <div className='relative w-2/4 flex items-center justify-center h-44 lg:h-60'>
             <img className='hover:w-11/12 w-full hover:h-40 h-44 lg:hover:h-56 lg:h-60 transition-all delay-100' src={flex2} alt='reac-img'/>
             <div className='absolute top-4 w-full text-center px-4'>7-Day Happiness Guaranteed</div>
           </div>
          </div>

          <div className='flex w-full mt-5'>
            <div className='relative w-5/12 mr-6 flex items-center justify-center h-40 lg:h-56'>
              <img className='hover:w-11/12 w-full hover:h-36 h-40 lg:hover:h-52 lg:h-56 transition-all delay-100' src={flex3} alt='reac-img'/>
              <div className='absolute top-4 w-full text-center px-3'>Monthly House Cleaning</div>
            </div>

            <div className='relative w-7/12 flex items-center justify-center h-56 lg:h-80'>
              <img className='hover:w-11/12 w-full hover:h-52 h-56 lg:hover:h-72 lg:h-80 transition-all delay-100' src={flex4} alt='reac-img'/>
              <div className='absolute top-4 w-full text-center px-5 lg:px-10'>Choose Your Own Roommate</div>
            </div>
          </div>
        </div>


        <div className='w-full sm:w-1/2 sm:pr-4 lg:pr-8 mt-8 sm:mt-0' data-aos="fade-left">
          <h1 className='text-2xl md:text-3xl lg:text-4xl mb-5 sm:mb-7 font-extrabold'>Flexibility and options to suit your lifestyle.</h1>
          <p>
          You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.
          </p>

          <button className='bg-red-500 text-white px-6 py-3 rounded-md mt-5'>Search Rooms</button>
        </div>
    </div>
  )
}

export default DetailsTop