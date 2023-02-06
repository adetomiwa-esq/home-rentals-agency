import React from 'react';
import logo from '../images/logo.png';
import {MdLocationOn, MdLocalPhone, MdLocalPrintshop} from 'react-icons/md'
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiOutlineGooglePlus, AiOutlineInstagram, AiOutlineTwitter, AiOutlineWifi } from 'react-icons/ai';
import { TbBrandPinterest } from 'react-icons/tb';

function Footer() {
  return (
    <footer className='px-2 md:px-8 py-12'>
        <div className='h-1 bg-red-500 rounded-2xl'></div>
        <div className='md:flex md:items-center px-1 md:px-16 mt-14'>
          <div className='hidden md:block'>
            <img className='brightness-0' src={logo} alt='logo' />
          </div>

          <div className='md:ml-auto md:w-8/12 lg:w-6/12'>
            <div className='w-fit'>
              <div className='flex mb-5'><i className='text-red-500 text-2xl cursor-pointer'><MdLocationOn /></i> <span>345 Faulconer Drive, Suite 4.Charlottesville, CA, 12345</span></div>
              <div className='flex'>
                <div className='flex items-center'><i className='text-red-500 mr-3 text-2xl ml-3 cursor-pointer'><MdLocalPhone/></i><span>(123)456-7890</span></div>
                <div className='flex items-center ml-auto'><i className='text-red-500 mr-3 text-2xl ml-3 cursor-pointer'><MdLocalPrintshop/></i><span>(123)456-7890</span></div>
              </div>
            </div>

            <div className='flex mt-7'>
              <div className='text-zinc-500'>Social Media</div>
              <div className='text-2xl text-red-500 flex items-center ml-auto w-8/12 sm:w-9/12 justify-between'>
                <i className='hover:text-red-300 cursor-pointer'><AiFillFacebook/></i>
                <i className='hover:text-red-300 cursor-pointer'><AiOutlineTwitter/></i>
                <i className='hover:text-red-300 cursor-pointer'><AiFillLinkedin /></i>
                <i className='hover:text-red-300 cursor-pointer'><AiFillYoutube/></i>
                <i className='hover:text-red-300 cursor-pointer'><AiOutlineInstagram/></i>
                <i className='hover:text-red-300 cursor-pointer'><AiOutlineGooglePlus/></i>
                <i className='hover:text-red-300 cursor-pointer'><TbBrandPinterest/></i>
                <i className='hover:text-red-300 cursor-pointer rotate-45'><AiOutlineWifi/></i>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-t-blue-200 pt-12 flex flex-col lg:flex-row mt-12'>
          <div className='flex flex-col md:flex-row h-48 md:h-fit justify-between w-full lg:w-6/12'>
            <div className='cursor-pointer'>ABOUT US</div>
            <div className='cursor-pointer'>CONTACT US</div>
            <div className='cursor-pointer'>HELP</div>
            <div className='cursor-pointer'>PRIVACY POLICY</div>
            <div className='cursor-pointer'>DISCLAIMER</div>
          </div>

          <div className='text-zinc-500 mt-8 text-center lg:text-left lg:mt-auto lg:ml-auto'>Copyright &copy; 2020 Minimumlivingcost. All rights reserved</div>
        </div>
    </footer>
  )
}

export default Footer