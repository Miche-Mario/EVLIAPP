import React, {useState, useEffect} from 'react'
import Radio from '@mui/material/Radio';



const GroupCourse = ({handleClose}) => {


    const [selectedValue, setSelectedValue] = useState('a');
    const [avalue, setAvalue] = useState(false)


    useEffect(() => {
        selectedValue ==="b"
        ? setAvalue(true)
        : setAvalue(false)
        selectedValue ==="a"
        ? setAvalue(false)
        : setAvalue(true)
    
    }, [selectedValue])

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

  return (
    <div>
        <form>
            <div className='flex flex-row justify-around items-center'>
        <div>
            <label for="first_name" class="block mb-6 text-base font-medium text-gray-900 p-1 ">Course</label>
            <label for="first_name" class="block mb-5 text-base font-medium text-gray-900 p-1 ">Group</label>
            <label for="first_name" class="block mb-5 text-base font-medium text-gray-900 p-1 ">Enrollement date</label>
            <label for="first_name" class="block mb-5 text-base font-medium text-gray-900 p-1 ">Start date</label>
            <label for="first_name" class="block mb-5 text-base font-medium text-gray-900 p-1 ">End date</label>
            <label for="first_name" class="block  text-base font-medium text-gray-900 p-1 ">Price</label>


        </div>
        <div >
            <input type="text" id="first_name" class="bg-gray-50 border mb-4 mt-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2 " placeholder="course" required />
            <input type="text" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2 " placeholder="group" required />
            <input type="date" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2 " placeholder="enrollement date" required />             
            <input type="date" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2 " placeholder="start date" required />
            <input type="date" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2 " placeholder="end date" required />
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2 " placeholder="price" required />

        </div>
        </div>
        <fieldset className='border border-dark-purple w-full-3 h-auto ml-1.5 mr-1.5 rounded'>
            <legend className='p-1 ml-3 uppercase text-sm text-blue-800'>Payment options</legend>
            <div className='flex justify-around'>
                <div>
            <Radio
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'A' }}
            />
            <span>Single payment</span>
            {avalue && <label for="first_name" class="ml-2 block mb-4 text-sm font-medium text-gray-900 p-1 ">Number of monthly installments</label>}
            <label for="first_name" class="ml-2 block mb-4 text-sm font-medium text-gray-900 p-1 ">First payment due date</label>
            </div>
            <div>
            <Radio
                checked={selectedValue === 'b'}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'B' }}
            />
            <span>Monthly payments</span>
           { avalue && <input type="text" id="first_name" class="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2 " placeholder="John" required />}
            <input type="text" id="first_name" class="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2 " placeholder="John" required />
            </div>
            </div>
            
         
        </fieldset>
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

export default GroupCourse