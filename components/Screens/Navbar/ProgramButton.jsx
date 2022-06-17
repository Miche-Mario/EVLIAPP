import React from 'react'

const ProgramButton = () => {
  return (
    <div className="group inline-block text-light-dark text-10">
      <button
        className="outline-offset-2outline-1  px-3 py-1 bg-dark-purple rounded-sm flex items-center w-auto"
      >
        <span className="pr-1 font-semibold flex-1 text-white">Program</span>
        <span>
          <svg
            className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill='#fff'
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </span>
      </button>
      <ul
        className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
      >
        <li className="rounded-sm px-3 py-1 hover:bg-gray pl-6 cursor-pointer">Students</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray pl-6 cursor-pointer">Courses</li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray pl-6 cursor-pointer">Propects</li>
        <li className="rounded-sm relative px-3 py-1 hover:bg-gray pl-6 cursor-pointer">
          <button
            className="w-full text-left flex items-center outline-none focus:outline-none"
          >
            <span className="pr-1 flex-1">Expenses</span>
            <span className="mr-auto">
              <svg
                className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </span>
          </button>
          <ul
            className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
          >
            <li className="px-3 py-1 hover:bg-gray pl-6 cursor-pointer">Expenses</li>
            <li className="px-3 py-1 hover:bg-gray pl-6 cursor-pointer">Expenses Type</li>
          </ul>
        </li>
        <li className="rounded-sm px-3 py-1 hover:bg-gray pl-6 cursor-pointer ">Items for Sale</li>
        <hr className='ml-2 mr-2 mb-2 mt-2'/>
        <li className="rounded-sm px-3 py-1 hover:bg-gray pl-6 cursor-pointer ">Exit</li>
      </ul>
    </div>
  )
}

export default ProgramButton