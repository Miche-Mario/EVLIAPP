import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BiBookBookmark } from 'react-icons/bi'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Payment from '../Payment';

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





const AddStudExam = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

 


    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen1 = () => {
        setOpen1(true);
      };
      const handleClose1 = () => {
        setOpen1(false);
      };

    return (
        <div>
            <div className='mb-3'>
                <button onClick={handleOpen} className='bg-blue-600 rounded text-gray-100 font-medium w-auto h-10 p-3 flex items-center justify-center' type="submit" name='Add'>
                    Add Exam<BiBookBookmark className='text-2xl ml-2' />
                </button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} >
                        <p class="text-white text-xl p-3  bg-dark-purple w-full">Exam Edit</p>
                        <form>
                            <div className='flex flex-row m-3 justify-around items-center'>
                                <div className=''>
                                    <label for="first_name" class="block mb-6 text-base font-medium text-gray-900 p-1 ">Item</label>
                                    <label for="first_name" class="block mb-5 text-base font-medium text-gray-900 p-1 ">Registration date</label>
                                    <label for="first_name" class="block mb-5 text-base font-medium text-gray-900 p-1 ">Price</label>

                                    <label for="first_name" class="block mb-5 text-base font-medium text-gray-900 p-1 ">Test date</label>
                                </div>
                                <div >
                                    <select id="countries" class="bg-gray-50 mb-4  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option></option>
                                        <option value="US">Aptis</option>
                                    </select>
                                    <input type="date" id="first_name" class="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2 " placeholder="enrollement date" required />
                                    <input type="number" id="first_name" class="bg-gray-50 border text-right mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2 " placeholder="22" required />

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
                <Modal
                    open={open1}
                    onClose={handleClose1}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className='w-[70rem]' >
                        <p class="text-white text-xl p-3  bg-dark-purple w-full">Payment</p>

                        <div id="modal-modal-title" className=' mt-4'>
                            <Payment handleClosee={handleClose1} />
                        </div>
                    </Box>
                </Modal>


            </div>
            <div className="w-full p-0">
                <div className="max-h-screen w-full flex font-sans ">
                    <div className="w-full">
                        <div className="bg-white shadow-md rounded ">
                            <table className="min-w-max w-full ">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className=" py-3 px-3 text-center">N*</th>
                                        <th className=" py-3 px-3 text-center">Test</th>
                                        <th className=" py-3 px-3 text-center">Registration Date </th>
                                        <th className=" py-3 px-3 text-center">Price</th>
                                        <th className=" py-3 px-3 text-center">Test Date </th>
                                        <th className=" py-3 px-3 text-center">Status</th>
                                        <th className=" py-3 px-3 text-center">Paid</th>
                                        <th className=" py-3 px-3 text-center">Balance</th>
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
                                                <span className="font-medium uppercase">Aptis</span>
                                            </div>
                                        </td>


                                        <td className="p-0">
                                            <div className="flex items-center justify-center">
                                                <span className="font-medium uppercase">03/06/2022</span>
                                            </div>
                                        </td>
                                        <td className=" py-3 px-3 text-center whitespace-nowrap">
                                            <div className="flex items-center justify-center">
                                                <span className="font-medium text-center">120</span>
                                            </div>
                                        </td>
                                        <td className=" py-3 px-3 text-center">
                                            <div className="flex items-center justify-center">
                                                <span className="font-medium">03/06/2022</span>
                                            </div>
                                        </td>
                                        <td className=" py-3 px-3 text-center">
                                            <span className="bg-green-600 text-white py-1 px-3 rounded-full text-xs">Down</span>
                                        </td>

                                        <td className=" py-3 px-3 text-center">
                                            <div className="flex items-center justify-center">
                                                <span className="font-medium">54</span>
                                            </div>
                                        </td>
                                        <td className=" py-3 px-3 text-center">
                                            <div className="flex items-center justify-center">
                                                <span className="font-medium">00</span>
                                            </div>
                                        </td>
                                        <td className=" py-3 px-3 text-center">
                                            <div className="flex item-center justify-center">
                                                <div onClick={handleOpen1} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudExam