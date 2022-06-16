import React, { useContext } from 'react'
import { StepperContext } from '../../../pages/Context/StepperContext'


const GuardianStudInfo = () => {


  return (
    <div className='flex flex-row justify-between'>
      <div className='p-2'>
        <p className='text-white text-xl font-medium p-3 mb-4 bg-dark-purple rounded-2xl'>Parent / Guardian </p>
        <form>
        <div class="grid gap-3 mb-6 lg:grid-cols-2">
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Surname</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
          </div>
          <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900   ">Forenames</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" required />
          </div>
          <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900   ">Gender</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option selected></option>
                <option value="US">Male</option>
                <option value="CA">Female</option>
                <option value="other">Other</option>
            </select>          </div>
          <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Relationship</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="relationship" required />
          </div>
          <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900">Occupation</label>
            <input type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Occupation" required />
          </div>
          <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900   ">Email addess</label>
            <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="johndoe@mail.com" required />
          </div>
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Tel 1</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Cotonou" required />
          </div>
          <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900   ">Tel 2</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-456" required />
          </div>
          <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900   ">Adress</label>
            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="johndoe@mail.com" required />
          </div>
         
          
        </div>
      </form>

      </div>
      <div className='p-2'>
        <p className='text-white font-medium text-xl p-3 mb-4 bg-dark-purple rounded-2xl'>Organisation / Sponsor </p>
        <form>
        <div class="grid gap-3 mb-6 lg:grid-cols-2">
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
          </div>
          <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900   ">Adress</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Adress" required />
          </div>
          <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900   ">Tel</label>
            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="123-456" required />
          </div>
          <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900   ">Email Adress</label>
            <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="johndoe@mail.com" required />
          </div>
          <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900   ">Contact Person</label>
            <input type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Contact person" required />
          </div>
          <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900   ">Tel</label>
            <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-456" required />
          </div>
        </div>
      </form>
      </div>
      <div className='p-2'>
        <p className='text-white text-xl p-3 mb-4 bg-dark-purple rounded-2xl'>Emergency</p>
        <form>
        <div class="grid gap-3 mb-6 lg:grid-cols-2">
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Surname</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
          </div>
          <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900   ">Forenames</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" required />
          </div>
          <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900   ">Gender</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option selected></option>
                <option value="US">Male</option>
                <option value="CA">Female</option>
                <option value="other">Other</option>
            </select>          
          </div>
          <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Relationship</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="relationship" required />
          </div>
          <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900">Occupation</label>
            <input type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Occupation" required />
          </div>
          <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900   ">Email addess</label>
            <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="johndoe@mail.com" required />
          </div>
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Tel 1</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Cotonou" required />
          </div>
          <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900   ">Tel 2</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-456" required />
          </div>
          <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900   ">Adress</label>
            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="johndoe@mail.com" required />
          </div>
         
          
        </div>
      </form>
      </div>
    </div>

  )
}

export default GuardianStudInfo