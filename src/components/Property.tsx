import React, { useEffect } from 'react';
import {GiRotaryPhone, GiBathtub} from 'react-icons/gi';
import {MdLightMode} from 'react-icons/md';
import 'aos/dist/aos.css';
import * as AOS from 'aos';

interface Props {
    item: {imgSrC: string};
}

function Property({item}: Props) {

    useEffect(() => {
        AOS.init({duration: 3000})
    })

  return (
    <div className='m-auto w-10/12 md:w-5/12 lg:w-80 xl:w-96 rounded-3xl overflow-hidden mb-6 border-2 bg-white' data-aos="flip-left">
        <div className='w-full h-60'>
            <img className='w-full h-60 max-h-60' src={item.imgSrC} alt='interior'/>
        </div>
        <div className='ml-3 mt-3'>
            <div>2578 Folsom Street, San Francisco, CA, 94110</div>
            <div className='text-sm text-zinc-300 mt-4'>Private Room</div>
            <div className='text-red-600'>$1200/Month</div>
        </div>

        <div className='flex items-center border-t-2 text-lg h-12 mt-2'>
            <div className='flex items-center w-2/6 border-r-2 justify-center h-full'>
                <GiRotaryPhone />
                <span className='ml-1'>4</span>
            </div>
            <div className='flex items-center w-2/6 justify-center h-full'>
                <GiBathtub />
                <span className='ml-1'>2</span>
            </div>
            <div className='flex items-center w-2/6 border-l-2 justify-center h-full'>
                <MdLightMode />
                <span className='ml-1'>2</span>
            </div>
        </div>
    </div>
  )
}

export default Property