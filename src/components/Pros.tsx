import React from 'react';
import unsplash from '../images/unsplash.png';
import {BiDollarCircle} from 'react-icons/bi';
import {RiCommunityLine, RiEye2Line, RiShieldStarLine, RiPlantLine} from 'react-icons/ri';
import {TbStack2} from 'react-icons/tb';

function Pros() {
  return (
    <div className='py-10 px-2 md:px-10'>
        <div className='relative'>
          <h1 className='text-base md:text-3xl font-bold'>Minimum Living Cost Takes Care Of Everything</h1>
          <div className='w-2/6 md:w-1/5 h-1 rounded-md bg-red-500 absolute -bottom-1'></div>
        </div>

        <div className='flex flex-col lg:flex-row items-center mt-10'>
            <div className='min-w-fit h-96 lg:w-2/6'>
                <img className='lg:w-80 min-w-full h-full min-h-full' src={unsplash} alt='img'/>
            </div>

            <div className='lg:w-4/6 text-sm md:text-lg'>
                <div className='flex justify-between mb-12'>
                    <div className='w-1/5'>
                        <i className='text-red-500 text-3xl rounded-md border shadow-xl  inline-block p-2'><BiDollarCircle /></i>
                        <div className='font-semibold'>Pay As Little As Possible!</div>
                    </div>

                    <div className='w-1/5'>
                        <i className='text-red-500 text-3xl rounded-md border shadow-xl  inline-block p-2'><RiCommunityLine /></i>
                        <div className='font-semibold'>Enjoy Wisdom Of Community!</div>
                    </div>

                    <div className='w-2/6'>
                        <i className='text-red-500 text-3xl rounded-md border shadow-xl  inline-block p-2'><TbStack2 /></i>
                        <div className='font-semibold'>Let's Somebody Else Take Care Of Land Lord!</div>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div className='w-1/5'>
                        <i className='text-red-500 text-3xl rounded-md border shadow-xl  inline-block p-2'><RiPlantLine /></i>
                        <div className='font-semibold'>Enjoy Peaceful Environment</div>
                    </div>

                    <div className='w-1/5'>
                        <i className='text-red-500 text-3xl rounded-md border shadow-xl  inline-block p-2'><RiShieldStarLine /></i>
                        <div className='font-semibold'>Stay Safe! Save Money!</div>
                    </div>

                    <div className='w-2/6'>
                        <i className='text-red-500 text-3xl rounded-md border shadow-xl  inline-block p-2'><RiEye2Line /></i>
                        <div className='font-semibold'>Pay For What You Use!</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pros