import React, {useContext} from 'react'
import { StepperContext } from '../../../pages/Context/StepperContext'


const GeneralStudInfo = () => {
  const {userData, setUserData} = useContext(StepperContext)
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({ ...userData, [name]: value})
  }
  return (
    <div className='flex flex-row justify-between'>


    <div class=" bg-white w-full  border border-blue-300 p-3 pb-0">

      <form>
        <div class="grid gap-3 mb-6 lg:grid-cols-3">
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Student ID</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="EVLI------" required />
          </div>
          <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900   ">Surname</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="MENOU" required />
          </div>
          <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900   ">Forenames</label>
            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Gqel" required />
          </div>
          <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900   ">Gender</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option selected></option>
                <option value="US">Male</option>
                <option value="CA">Female</option>
                <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900   ">Date of Birth</label>
            <input type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="01/01/2001" required />
          </div>
          <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900   ">Place of Birth</label>
            <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Cotonou" required />
          </div>
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Citizenship</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Cotonou" required />
          </div>
          <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900   ">Occupation</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Student" required />
          </div>
          <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900   ">Email Adress</label>
            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="johndoe@mail.com" required />
          </div>
          <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900   ">Tel. (Home)</label>
            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
          </div>
          <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900   ">Tel. (Ghana)</label>
            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
          </div>
          <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900   ">Adresse (Home)</label>
            <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123 Cotonou, Benin" required />
          </div>
          <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900   ">Adresse. (Ghana)</label>
            <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123 Achimota, Accra, Ghana" required />
          </div>
          <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900   ">Marital Status</label>
            <input type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Single" required />
          </div>
          <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900   ">Passeport/ID No</label>
            <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-33-33" required />
          </div>
          <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900   ">Academic Level</label>
            <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Bachelor" required />
          </div>
          <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900   ">Note</label>
            <input type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
          </div>
          <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900   ">How did you hear about EVLI</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option selected></option>
                <option value="US">Facebook</option>
                <option value="CA">Instagram</option>
                <option value="FR">Internet Search</option>
                <option value="DE">Twitter</option>
                <option value="DE">Flyer</option>
                <option value="DE">School Sign</option>
                <option value="DE">Friend</option>
                <option value="DE">Agent</option>
            </select>
          </div>
        </div>
      </form>

    </div>
    <div class="ml-6">

      <div class="flex items-center justify-center w-full">
        <label for="dropzone-file" class="flex text-center flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div>

      <p class="mt-2 text-center">Passport Photograph</p>

      <div class="flex items-center justify-center w-full">
        <label for="dropzone-file" class="flex text-center flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div>

      <p class="mt-2 text-center">ID SCAN</p>
     
    </div>
  </div>
  )
}

export default GeneralStudInfo