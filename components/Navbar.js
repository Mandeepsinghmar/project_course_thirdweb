import React, { useState } from 'react';
import { navLinks } from '../data';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className='text-white px-8 h-screen py-12 hidden md:flex flex-col justify-between fixed'>
        <div className='font-semibold text-lg'>Logo</div>
        <NavLinks />
        <div className='flex items-center flex-col text-gray-500'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-6 h-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
            />
          </svg>

          <button>Logout</button>
        </div>
      </div>

      <div className='fixed z-20 md:hidden block top-6 right-3'>
        {!mobileMenuOpen ? (
          <button onClick={() => setMobileMenuOpen(true)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6 text-white'
            >
              <path
                fillRule='evenodd'
                d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        ) : (
          <button onClick={() => setMobileMenuOpen(false)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 text-white'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
        )}
      </div>

      <div
        className={`fixed top-0 h-screen text-white  w-2/3 bg-black z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <div className='font-semibold text-lg'>Logo</div>
        <div className='mt-6 '>
          <NavLinks handleClick={() => setMobileMenuOpen(false)} />
        </div>
      </div>
    </>
  );
};

export default Navbar;

export const NavLinks = () => {
  return (
    <div className='space-y-6 float-left'>
      {navLinks.map(({ icon, name }, idx) => (
        <div key={idx} className='flex items-center flex-col text-gray-500'>
          {icon}
          <p className='capitalize'>{name}</p>
        </div>
      ))}
    </div>
  );
};
