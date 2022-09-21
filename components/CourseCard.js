import React from 'react';

const CourseCard = () => {
  return (
    <div className='flex gap-5 bg-white rounded-xl p-4'>
      <img
        className='w-40 h-30'
        src='/images/photograph.svg'
        alt='course-card-img'
      />
      <div className='space-y-2 text-gray-400'>
        <h2 className='font-semibold text-xl text-black'>
          Learning strategy: how instead of what
        </h2>
        <p>
          This course discuss the main units and principles of the human nervous
          system that underline our language..
        </p>
        <div className='mt-2 flex justify-between items-center'>
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
      </div>
    </div>
  );
};

export default CourseCard;
