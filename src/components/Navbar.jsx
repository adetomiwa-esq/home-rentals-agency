import React from 'react';
import logo from '../images/logo.png';

function Navbar() {
  return (
    <div className='border-b-2 h-16 flex items-center mx-5 md:mx-16 lg:mx-24'>
        <div>
            <img className=' w-28' src={logo} alt='logo'/>
        </div>
    </div>
  )
}

export default Navbar