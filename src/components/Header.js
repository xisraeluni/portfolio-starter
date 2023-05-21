import React from 'react';
//images
import Logo from '../assets/xisraelcubo.gif';

const Header = () => {
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          {/*logo */}
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          {/*button */}
          <button className='btn btn-sn'>Work whit me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
