import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import Layout from '../components/Screens/Layout'
import { BiBookBookmark } from 'react-icons/bi'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AddCourses from '../components/Courses/AddCourses';
import GroupStud from '../components/Courses/GroupStud';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid darkblue',
  boxShadow: 24,
  p: 0,
  m: 0,
  height: 'auto'
};
const Courses = () => {

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
    <Layout >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <AddCourses handleClose={handleClose}/>
        </Box>
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
          <GroupStud handleClose1={handleClose1}/>
     
      </Modal>
      <div>
        <div className='shadow-lg flex h-20 w-full flex-row bg-white border border-gray-300 rounded'>
          <div className='bg-blue-400 w-40 flex items-center justify-center text-3xl font-semibold text-center text-white'>01</div>
          <div className=' ml-3  flex items-center'>

            <p className='text-xl text-gray-900'>Class type</p>
            <select id="countries" class="ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-1">
              <option value="US">Group</option>
              <option value="CA">Individual</option>
            </select>


            <p className='text-xl ml-3 text-gray-900'>Language</p>
            <select id="countries" class="ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-1">
              <option value="all">All</option>
              <option value="US">English</option>
              <option value="CA">French</option>
            </select>
            <p className='text-xl ml-3 text-gray-900'>Level</p>
            <select id="countries" class="ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-1">
              <option value="all">All</option>
              <option value="US">A1</option>
              <option value="CA">B1</option>
            </select>
            <p className='text-xl ml-3 text-gray-900'>Status</p>
            <select id="countries" class="ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-1">
              <option value="all">Active</option>
              <option value="US">Inactive</option>
            </select>
            <div className='ml-[3em] w-auto'>


              <button onClick={handleOpen} className='bg-blue-600 rounded text-gray-100 font-medium p-2 flex items-center justify-center' type="submit" name='Add'>
                Add<BiBookBookmark className='text-2xl ml-2' />
              </button>

            </div>
            <div onClick={handleOpen1} className='ml-[1em] w-auto'>
              <button className='bg-blue-600 rounded text-gray-100 font-medium p-2 h-auto flex items-center justify-center' type="submit" name='Add'>
                Groups and students
              </button>
            </div>

          </div>


        </div>
        <div className="overflow-x-auto">
          <div className="max-w-screen max-h-screen  flex font-sans overflow-hidden">
            <div className="w-full">
              <div className="bg-white shadow-md rounded my-6">
                <table className="min-w-max w-full ">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-3 text-center">N</th>
                      <th className="py-3 px-3 text-center">Course code</th>
                      <th className="py-3 px-3 text-center">Course name</th>
                      <th className="py-3 px-3 text-center">Type</th>
                      <th className="py-3 px-3 text-center">Language</th>
                      <th className="py-3 px-3 text-center">Tuition fee</th>
                      <th className="py-3 px-3 text-center">Fee type</th>
                      <th className="py-3 px-3 text-center">Duration</th>
                      <th className="py-3 px-3 text-center">Status</th>
                      <th className="py-3 px-3 text-center">Actions</th>

                    </tr>
                  </thead>
                  <tbody className="text-gray-600  text-sm font-light">
                    <tr className="border-b border-gray-200  hover:bg-gray-100">

                      <td className=" py-3 px-3 text-center">
                        <div className="flex items-center justify-center">
                          <span className="font-medium uppercase">1</span>

                        </div>
                      </td>
                      <td className=" py-3 px-3 text-center whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          <span className="font-medium text-center">EVLI11</span>
                        </div>
                      </td>
                      <td className=" py-3 px-3 text-center">
                        <div className="flex items-center justify-center">
                          <span className="font-medium">Elementary</span>
                        </div>
                      </td>
                      <td className=" py-3 px-3 text-center">
                        <span className="bg-green-600 text-white py-1 px-3 rounded-full text-xs">G</span>
                      </td>
                      <td className=" py-3 px-3 text-center">
                        <div className="flex items-center justify-center">
                          <span className="font-medium">English</span>
                        </div>
                      </td>
                      <td className=" py-3 px-3 text-center">
                        <div className="flex items-center justify-center">
                          <span className="font-medium">1 555 cedes</span>
                        </div>
                      </td>
                      <td className=" py-3 px-3 text-center">
                        <div className="flex items-center justify-center">
                          <span className="font-medium">Mensuel</span>
                        </div>
                      </td>
                      <td className=" py-3 px-3 text-center">
                        <div className="flex items-center justify-center">
                          <span className="font-medium">3 months</span>
                        </div>
                      </td>
                      <td className=" py-3 px-3 text-center">
                        <div className="flex items-center justify-center">
                          <span className="bg-green-600 text-white py-1 px-3 rounded-full text-xs">Active</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Courses