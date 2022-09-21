import React from 'react';
import CourseCard from './CourseCard';

const RightSidebar = () => {
  return (
    <div className='bg-white text-gray-400 w-full flex gap-4 ml-36 m-4 rounded-3xl '>
      <div className='bg-[#F9F9F9] p-8 max-w-[800px] rounded-l-3xl '>
        <div className='flex justify-between'>
          <p className='font-bold text-2xl'>Courses</p>
          <p className='bg-white p-2 rounded-xl'>
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
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
          </p>
        </div>
        <p className='space-x-6 mt-4 font-medium'>
          <span className='text-lg'>All</span>
          <span className='text-lg text-gray-500'>Active</span>
          <span className='text-lg text-gray-500'>Completed</span>
        </p>
        <div className='flex justify-between mt-4'>
          {[...Array(4)].map(() => (
            <div className='flex items-center bg-white px-3 py-2 gap-2 border-[1px] border-gray-200 rounded-lg'>
              <img
                className='w-4 h-4'
                src='https://w7.pngwing.com/pngs/696/612/png-transparent-new-england-flag-flag-of-england-flag-of-the-united-kingdom-england-flag-logo-symmetry.png'
              />
              English
            </div>
          ))}
          <p className='bg-white p-2 rounded-xl h-full'>
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
                d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
              />
            </svg>
          </p>
        </div>
        <div className='space-y-6 mt-4'>
          {[...Array(7)].map(() => (
            <CourseCard />
          ))}
        </div>
      </div>

      <div className='p-8'>
        <img
          className='w-full h-[500px]'
          src='/images/photograph.svg'
          alt='course-card-img'
        />
        <div className='mt-2 flex gap-6 items-center'>
          <div className='flex '>
            {[...Array(3)].map(() => (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                class='w-5 h-5 text-yellow-400'
              >
                <path
                  fill-rule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                  clip-rule='evenodd'
                />
              </svg>
            ))}
            {[...Array(2)].map(() => (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                class='w-5 h-5 text-gray-300'
              >
                <path
                  fill-rule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                  clip-rule='evenodd'
                />
              </svg>
            ))}
            <p className='ml-4'>
              <span className='font-bold text-black'>5</span>(110)
            </p>
          </div>
          <div className='flex gap-2 bg-gray-100 p-1 rounded-lg items-center text-md capitalize'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
              />
            </svg>
            intermediate
          </div>
        </div>

        <div className=' space-y-4 mt-2'>
          <h2 className='font-semibold text-3xl text-black'>
            Learning strategy: how instead of what
          </h2>
          <p>
            This course discuss the main units and principles of the human
            nervous system that underline our language..
          </p>
        </div>
        <div className='flex gap-3 mt-4'>
          <img
            className='w-20 h-20 rounded-full'
            src='/images/photograph.svg'
            alt='course-card-img'
          />
          <div>
            <p className='text-black font-medium text-xl'>Corteny</p>
            <p>Teacher</p>
          </div>
        </div>

        <div className='flex justify-between mt-4'>
          <p className='font-bold text-2xl text-black'>Course's content</p>
          <p className='bg-white p-2 rounded-xl'>12 lectures - 2 hours</p>
        </div>
        <div className='space-y-6 mt-4'>
          {[...Array(3)].map(() => (
            <CourseCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
