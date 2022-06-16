import React, { useState, useEffect } from 'react'
import { BiBookBookmark } from 'react-icons/bi'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Radio from '@mui/material/Radio';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid darkblue',
    boxShadow: 24,
    p: 0,
    m: 0,
    height: 'auto'
};

const Purchase = ({handleClosee}) => {
    const [open, setOpen] = useState(false);

    const [selectedValue, setSelectedValue] = useState('a');
    const [avalue, setAvalue] = useState(false)


    useEffect(() => {
        selectedValue === "b"
            ? setAvalue(true)
            : setAvalue(false)
        selectedValue === "a"
            ? setAvalue(false)
            : setAvalue(true)

    }, [selectedValue])

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <div className="bg-white  w-full ">
                <button onClick={handleOpen} className='bg-blue-600 rounded ml-3 text-gray-100 font-medium w-48 h-10 p-3 flex items-center justify-center' type="submit" name='Add'>
                    Add
                </button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} >
                        <p class="text-white text-xl p-3  bg-dark-purple w-full">Purchase Detail</p>
                        <form>
                            <div className='flex flex-row m-3 justify-around items-center'>
                                <div className=''>
                                    <label for="first_name" class="block mb-6 text-base font-medium text-gray-900 p-1 ">Item</label>
                                    <label for="first_name" class="block mb-5 text-base font-medium text-gray-900 p-1 ">Price</label>
                                    <label for="first_name" class="block mb-5 text-base font-medium text-gray-900 p-1 ">Quantity</label>
                                </div>
                                <div >
                                    <select id="countries" class="bg-gray-50 mb-4  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option></option>
                                        <option value="US">Book</option>
                                        <option value="CA">Tee-Shirt</option>
                                    </select>
                                    <input type="text" id="first_name" class="bg-gray-50 border text-right mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2 " placeholder="22" required />
                                    <input type="date" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2 " placeholder="enrollement date" required />
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
                    </Box>


                </Modal>
                <fieldset className='m-3 h-52 border border-dark-purple'>
                    <table className="w-full   ">
                        <thead>
                            <tr className="bg-gray-200  text-gray-600 uppercase text-sm leading-normal">
                                <th className=" py-3 px-3 text-center">N*</th>
                                <th className=" py-3 px-3 text-center">Item</th>
                                <th className=" py-3 px-3 text-center">Price </th>
                                <th className=" py-3 px-3 text-center">Quantity</th>
                                <th className=" py-3 px-3 text-center">Action</th>


                            </tr>
                        </thead>
                        <tbody className="text-gray-600  text-sm font-light">
                            <tr className="border-b border-gray-200  hover:bg-gray-100">
                                <td className="p-0">
                                    <div className="flex items-center justify-center">
                                        <span className="font-medium uppercase">1</span>
                                    </div>
                                </td>

                                <td className="p-0">
                                    <div className="flex items-center justify-center">
                                        <span className="font-medium uppercase">Tee-Shirt</span>
                                    </div>
                                </td>


                                <td className=" py-3 px-3 text-center">
                                    <div className="flex items-center justify-center">
                                        <span className="font-medium">54</span>
                                    </div>
                                </td>

                                <td className=" py-3 px-3 text-center">
                                    <div className="flex items-center justify-center">
                                        <span className="font-medium">1</span>
                                    </div>
                                </td>

                                <td className=" py-3 px-3 text-center">
                                    <div className="flex item-center justify-center">
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>

                            </tr>




                        </tbody>
                    </table>
                </fieldset>
                <div>
                    <div className='flex flex-row'>
                        <div className='flex flex-row m-3 justify-around items-center'>
                            <div className=''>
                                <label for="first_name" class="block mb-6 text-base font-medium text-gray-900 p-1 ">Purchase date</label>
                                <label for="first_name" class="block mb-5 text-base font-medium text-gray-900 p-1 ">Total price</label>
                            </div>
                            <div >
                            <input type="date" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2 " placeholder="enrollement date" required />
                                <input type="text" id="first_name" class="bg-gray-50 border text-right mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2 " placeholder="22" required />
                            </div>
                        </div>

                        <div className='ml-6 '>
                            <fieldset className='border border-dark-purple w-auto h-auto p-1 rounded'>
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
                                        {avalue && <label for="first_name" class="ml-2 block mb-6 text-sm font-medium text-gray-900 p-1 ">Number of monthly installments</label>}
                                        <label for="first_name" class="ml-2 block  text-sm font-medium text-gray-900 p-1 ">First payment due date</label>
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
                                        {avalue && <input type="number" id="first_name" class="bg-gray-50 ml-3 text-right border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2 " placeholder="1" required />}
                                        <input type="date" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2 " placeholder="enrollement date" required />
                                        <span className='flex justify-end'>
                                        {avalue && <button className='bg-blue-600 rounded p-2 text-gray-100 text-sm font-medium w-auto flex items-center justify-center' type="submit" name='Add'>
                                            Payment Plan
                                        </button>}
                                        </span>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row mr-20 justify-end mt-3 mb-3 '>
                                <button className='bg-blue-600 rounded mr-24 text-gray-100 font-medium w-32 p-1 flex items-center justify-center' type="submit" name='Add'>
                                    Save
                                </button>
                                <button onClick={handleClosee} className='bg-blue-600 rounded text-gray-100 font-medium w-32 p-1 flex items-center justify-center' type="submit" name='Add'>
                                    Cancel
                                </button>
                            </div>
            </div>
        </div>
    )
}

export default Purchase