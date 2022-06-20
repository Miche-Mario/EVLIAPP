import React from 'react'

const Complete = () => {
  return (
    <div className='container md:mt-10'>
      <div className='flex flex-col items-center'>
      <div className='text-xl font-semibold uppercase text-green-500'>
        Completed
      </div>
      <div className='text-lg font-semibold text-gray-500'>
        The student informations are well saved
      </div>
      <a className='mt-10' href='/'>
        <button className='h-10 px-5 text-green-700 transition-colors
        duration-150 border border-gray-300 rounded-lg
        focus:shadow-outline hover:gb-green-500 hover:text-green-100'>
          Close
        </button>
      </a>
    </div>
    </div>
  )
}

export default Complete