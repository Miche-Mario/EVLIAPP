import React, { useState, useEffect } from 'react'

const CoursesPurchasesExam = () => {
  const [options, setOptions] = useState()
  const [acoOptions, setAcoOptions] = useState()
  const [programId, setProgramId] = useState('')
  const [acoId, setAcoId] = useState('')
  const [view, setView] = useState(false)
  const [oneOnOne, setOneOnOne] = useState(false)

  const duration = []
  const duration1 = []


  for (let i = 0; i < 49; i++) {
    duration[i] = i + 1
  }

  for (let i = 0; i < 11; i++) {
    duration1[i] = i + 1
  }


  const changeOption = (e) => {
    setProgramId(e.target.value)
  }
  const aCochangeOption = (e) => {
    setAcoId(e.target.value)
    console.log(e.target.value)
  }

  const oneOnChange = () => {
    setOneOnOne(!oneOnOne)
  }

  const click = () => {
    if (programId == 1) {
      setOptions(general)
      setView(true)
    } else if (programId == 3) {
      setOptions(tests)
      setView(true)
    } else if (programId == 33) {
      setOptions('')
      setView(false)
    }else {
      setOptions('')
      setView(true)
    }
  }
  const clickAco = () => {
    if (acoId == 1) {
      setAcoOptions(acotype)
    }}


  const programs = [
    {
      id: 1,
      label: "General English",
    },
    {
      id: 2,
      label: "Executive English",
    },
    {
      id: 3,
      label: "Test Preperation",
    },
    {
      id: 4,
      label: "Computer Literacy",
    },
    {
      id: 5,
      label: "Functional French",
    }

  ]


  const general = [
    {
      id: 1,
      label: "Regular",
    },
    {
      id: 2,
      label: "Intensive",
    },

  ]
  const tests = [
    {
      id: 1,
      label: "TOEFL",
    },
    {
      id: 2,
      label: "IELTS",
    },
    {
      id: 3,
      label: "TOEIC"
    },

  ]
  const purchases = [
    {
      id: 1,
      label: "T-Shirts",
    },
    {
      id: 2,
      label: "Books",
    },
    {
      id: 3,
      label: "Penalties"
    },

  ]
  const accomodation = [
    {
      id: 1,
      label: "Blue Hostel",
    }

  ]

  const acotype= [
    {
      id: '1',
      label: 'Single'
    },
    {
      id: '2',
      label: 'Twin'
    },
  ]


  return (
    <div>
      <div className='m-5'>
        <p className='text-lg font-medium text-gray-600 '>CHOOSE A COURSE</p>
        <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 
        focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 
        dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
           value={programId} onChange={changeOption} onClick={click}>
          <option value="33" className='text-md'>Our programme</option>
          {programs.map((program) => (
            <option className='text-xl' key={program.id} value={program.id}>{program.label}</option>
          ))}
        </select>
      </div>

      {options &&
        <div className='m-5'>
 
          <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 
          focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 
        dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
            {options.map((option) => (
              <option value={option.id}>{option.label}</option>
            ))}
          </select>
        </div>
      }
    
      {view && <div className='m-5'>
      <p className='text-lg font-medium text-gray-600 '>DURATION</p>
        <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
          {duration.map((option) => (
            <option value={option.id}>{option} weeks</option>
          ))}
        </select>
      </div>}


      {view && <div className='m-5'>
      <p className='text-lg font-medium text-gray-600 '>Would you like to book additional one-on-one classes?</p>
        <input type="checkbox" className="w-5 h-5 mt-3" onChange={oneOnChange}/>
      </div>}

      {oneOnOne && <div className='m-5'>
        <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
          {duration1.map((option) => (
            <option value={option.id}>{option} Private lesson</option>
          ))}
        </select>
      </div>}

      {view && <div className='m-5'>
      <p className='text-lg font-medium text-gray-600 '>Exam</p>
        <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
          {tests.map((option) => (
            <option value={option.id}>{option.label}</option>
          ))}
        </select>
      </div>}

      {view && <div className='m-5'>
      <p className='text-lg font-medium text-gray-600 '>Purchases</p>
        <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
          {purchases.map((option) => (
            <option value={option.id}>{option.label}</option>
          ))}
        </select>
      </div>}

      {view && <div className='m-5'>
      <p className='text-lg font-medium text-gray-600 '>Accommodation</p>
        <select onChange={aCochangeOption}  onClick={clickAco} value={acoId} class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
          {accomodation.map((option) => (
            <option key={option.id} value={option.id}>{option.label}</option>
          ))}
        </select>
      </div>}

      {acoOptions &&
        <div className='m-5'>
 
          <select class="bg-blue-100 border border-gray-300 text-gray-900 text-xl p-2 focus:ring-blue-500 
        focus:border-blue-500 block  dark:bg-gray-700 w-[42rem] dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         >
            {acoOptions.map((option) => (
              <option  value={option.id}>{option.label}</option>
            ))}
          </select>
        </div>
      }


      
    </div>

  )
}

export default CoursesPurchasesExam