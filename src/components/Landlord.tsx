import React, { useEffect, useState } from 'react';
import { Owners } from './LandlordList';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import 'aos/dist/aos.css';
import * as AOS from 'aos'

type propOwner = {
  description: string
  imgSrc: string
  name: string
}

function Landlord() {

  const ownersList: propOwner[] = Owners

  const [currentIndex, setCurrentIndex] = useState(0);

  function prevOwner(){
    const isFirstOwner = currentIndex === 0;
    const newIndex = isFirstOwner ? ownersList.length-1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  function nextOwner(){
    const isLastOwner = currentIndex === ownersList.length - 1
    const newIndex = isLastOwner ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  

  return (
    <div className='flex flex-col md:flex-row md:my-16 overflow-x-hidden'>
        <div className='w-full md:w-6/12 md:pl-3 lg:pl-16 pr-2 min-h-[400px] md:min-h-full flex relative' style={{background: 'rgba(244, 81, 30, 0.07)',}}>
          <div className='my-7 mx-4 md:m-auto' data-aos="slide-right">
            <p>{ownersList[currentIndex].description}</p>

            <div className='flex items-center mt-7'>
              <div><img className='w-[60px]' src={ownersList[currentIndex].imgSrc} alt='landlord'/></div>
              
              <div className='ml-4'>
                <div className='text-red-500'>{ownersList[currentIndex].name}</div>
                <div>Property Owner</div>
              </div>
            </div>
          </div>

          <div className='text-[red] bg-white absolute h-[50px] w-[50px] rounded-full left-[10px] flex items-center justify-center text-[1.8rem] bottom-[5%] font-bold cursor-pointer' onClick={prevOwner}>
            <BsChevronCompactLeft />
          </div>

          <div className='text-[red] bg-white absolute h-[50px] w-[50px] rounded-full right-[10px] flex items-center justify-center text-[1.8rem] bottom-[5%] font-bold cursor-pointer' onClick={nextOwner}>
            <BsChevronCompactRight />
          </div>
        </div>

        <div className='w-full md:w-6/12'>
            {/* <video className='w-full max-h-[500px] md:h-auto' src='https://www.youtube.com/embed?v=ARz0Nz2d-sg'></video> */}
            <div className="aspect-w-16 aspect-h-14">
              <iframe src="https://www.youtube.com/embed/ARz0Nz2d-sg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title='myFrame' allowFullScreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default Landlord