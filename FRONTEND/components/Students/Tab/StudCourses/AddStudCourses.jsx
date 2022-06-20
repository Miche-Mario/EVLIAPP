import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BiBookBookmark } from 'react-icons/bi'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import GroupCourse from './GroupCourse';
import OneandOneCourse from './OneandOneCourse';
import Payment from '../Payment';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid darkblue',
    boxShadow: 24,
    p: 0,
    m: 0,
    height: 'auto'
};





const StudCourses = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const [selected, setSelected] = useState("")
    const [groupContentVisible, setGroupContentVisible] = useState(false)
    const [oaoContentVisible, setOaoContentVisible] = useState(false)

    useEffect(() => {
        selected === "group"
            ? setGroupContentVisible(true)
            : setGroupContentVisible(false)
        selected === "oneandone"
            ? setOaoContentVisible(true)
            : setOaoContentVisible(false)
    }, [selected])

    const handleOnChange = (e) => {
        setSelected(e.target.value)
    }


    const renderResult = () => {
        let result;
        selected === ""
            && (result = "Select type of course")
        selected === "group"
            && (result = "Group Course")
        selected === "oneandone"
            && (result = "One on One Course")

        return result
    }
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



                <button onClick={handleOpen} className='bg-blue-600 rounded p-3 text-gray-100 font-medium w-auto h-10 flex items-center justify-center' type="submit" name='Add'>
                    Add Course<BiBookBookmark className='text-2xl ml-2' />
                </button>


                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} >
                        <p class="text-white text-xl p-3  bg-dark-purple w-full">{renderResult()}</p>

                        <div className="">


                            <div id="modal-modal-title" >
                                <div className='flex  justify-center items-center'>


                                    <select onChange={handleOnChange} value={selected} id="countries" class="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5">
                                        <option></option>
                                        <option value="group">Group</option>
                                        <option value="oneandone">One on One</option>
                                    </select>
                                </div>
                                <div className=' mt-4'>
                                    {groupContentVisible && <GroupCourse handleClose={handleClose} />}
                                    {oaoContentVisible && <OneandOneCourse handleClose={handleClose} />}
                                </div>

                            </div>
                        </div>
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
                                        <th className=" py-3 px-3 text-center">Course</th>
                                        <th className=" py-3 px-3 text-center">Name </th>
                                        <th className=" py-3 px-3 text-center">Enrollement date</th>
                                        <th className=" py-3 px-3 text-center">Type(O/G)</th>
                                        <th className=" py-3 px-3 text-center">Duration</th>
                                        <th className=" py-3 px-3 text-center">Start Date</th>
                                        <th className=" py-3 px-3 text-center">End Date</th>
                                        <th className=" py-3 px-3 text-center">lacement test</th>
                                        <th className=" py-3 px-3 text-center">Entry Level</th>
                                        <th className=" py-3 px-3 text-center">Actions</th>



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
                                                <span className="font-medium uppercase">KIDS</span>
                                            </div>
                                        </td>
                                        <td className=" py-3 px-3 text-center whitespace-nowrap">
                                            <div className="flex items-center justify-center">
                                                <span className="font-medium text-center">Elementary</span>
                                            </div>
                                        </td>
                                        <td className=" py-3 px-3 text-center">
                                            <div className="flex items-center justify-center">
                                                <span className="font-medium">03 June 1997</span>
                                            </div>
                                        </td>
                                        <td className=" py-3 px-3 text-center">
                                            <span className="bg-green-600 text-white py-1 px-3 rounded-full text-xs">G</span>
                                        </td>
                                        <td className=" py-3 px-3 text-center">
                                            <div className="flex items-center justify-center">
                                                <span className="font-medium">Beninese</span>
                                            </div>
                                        </td>
                                        <td className=" py-3 px-3 text-center">
                                            <div className="flex items-center justify-center">
                                                <span className="font-medium">03 June 1997</span>
                                            </div>
                                        </td>
                                        <td className=" py-3 px-3 text-center">
                                            <div className="flex items-center justify-center">
                                                <span className="font-medium">03 June 1997</span>
                                            </div>
                                        </td>
                                        <td className=" py-3 px-3 text-center">
                                            <div className="flex items-center justify-center">
                                                <span className="font-medium">32</span>
                                            </div>
                                        </td>
                                        <td className=" py-3 px-3 text-center">
                                            <div className="flex items-center justify-center">
                                                <span className="font-medium">A1</span>
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

export default StudCourses