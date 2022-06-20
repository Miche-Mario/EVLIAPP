import React, {useState, useEffect} from 'react'
import Radio from '@mui/material/Radio';



const OneandOneCourse = ({handleClose}) => {


    


  return (
    <div>
        <form>
            <div className='flex flex-row justify-around items-center'>
        <div>
            <label for="first_name" class="block mb-6  text-base font-medium text-gray-900 p-1 ">Course</label>
            <label for="first_name" class="block mb-6 text-base font-medium text-gray-900 p-1 ">Enrollement date</label>
            <label for="first_name" class="block mb-6 text-base font-medium text-gray-900 p-1 ">Start date</label>
            <label for="first_name" class="block mb-6 text-base font-medium text-gray-900 p-1 ">End date</label>
            <label for="first_name" class="block mb-6  text-base font-medium text-gray-900 p-1 ">Price</label>
            <label for="first_name" class="block text-base font-medium text-gray-900 p-1 ">Payment due date</label>



        </div>
        <div >
            <input type="text" id="first_name" class="bg-gray-50 border mb-4 mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2 " placeholder="course" required />
            <input type="date" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2 " placeholder="enrollement date" required />             
            <input type="date" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2 " placeholder="start date" required />
            <input type="date" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2 " placeholder="end date" required />
            <input type="text" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2 " placeholder="price" required />
            <input type="date" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2 " placeholder="payment due date" required />

        </div>
        </div>
       
        <div className='flex flex-row justify-around  mt-3 mb-3'>
            <button className='bg-blue-600 rounded text-gray-100 font-medium w-20 h-10 flex items-center justify-center' type="submit" name='Add'>
                Ok
            </button>
            <button onClick={handleClose} className='bg-blue-600 rounded text-gray-100 font-medium w-20 h-10 flex items-center justify-center' type="submit" name='Add'>
                Cancel
            </button>
        </div>
        </form>
    </div>
  )
}

export default OneandOneCourse