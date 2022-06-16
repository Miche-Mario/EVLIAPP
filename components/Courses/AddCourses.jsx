import React from 'react'

const AddCourses = ({handleClose}) => {
  return (
    <div>
        <p class="text-white text-xl p-3  bg-dark-purple w-full">Add course</p>
          <form>
            <div className='flex flex-row m-3 justify-around items-center'>
              <div className=''>
                <label for="first_name" class="block mb-6 text-base font-medium text-gray-900 p-1.5 ">Course code</label>
                <label for="first_name" class="block mb-5 text-base font-medium text-gray-900 p-1.5 ">Class Name</label>
                <label for="first_name" class="block mb-5 text-base font-medium text-gray-900 p-1.5 ">Type</label>
                <label for="first_name" class="block mb-5 text-base font-medium text-gray-900 p-1.5 ">Language</label>
                <label for="first_name" class="block mb-5 text-base font-medium text-gray-900 p-1.5 ">Level</label>
                <label for="first_name" class="block mb-5 text-base font-medium text-gray-900 p-1.5 ">Tuition Fee</label>
                <label for="first_name" class="block mb-5 text-base font-medium text-gray-900 p-1.5 ">Tuition type</label>
                <label for="first_name" class="block mb-5 text-base font-medium text-gray-900 p-1.5 ">Description</label>
                <label for="first_name" class="block mb-5 text-base font-medium text-gray-900 p-1.5 ">Duration (weeks)</label>
                <label for="first_name" class="block  text-base font-medium text-gray-900 p-1 ">Teaching hours</label>
              </div>
              <div >
                <select id="countries" class="bg-gray-50 mb-4  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option></option>
                  <option value="US">Aptis</option>
                </select>
                <input type="date" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2 " placeholder="enrollement date"   />
                <input type="number" id="first_name" class="bg-gray-50 border text-right mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2 " placeholder="22"   />
                <input type="date" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2 " placeholder="enrollement date"   />
                <input type="date" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2 " placeholder="enrollement date"   />
                <input type="date" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2 " placeholder="enrollement date"   />
                <input type="date" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2 " placeholder="enrollement date"   />
                <input type="date" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2 " placeholder="enrollement date"   />
                <input type="date" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2 " placeholder="enrollement date"   />
                <input type="date" id="first_name" class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2 " placeholder="enrollement date"   />
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

export default AddCourses