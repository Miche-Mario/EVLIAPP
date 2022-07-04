import React, {useState, useEffect} from 'react'

const CoursesPurchasesExam = () => {
  const [options, setOptions] = useState()
  const [programId, setProgramId] = useState('')

  const duration = []


for (let i = 0; i<49; i++){
  duration[i] = i +1
}

  const changeOption = (e) => {
    setProgramId(e.target.value)
  }

  const click = () => {
    if(programId == 1) {
      setOptions(general)
    } else if(programId == 3){
      setOptions(tests)
    }else
    {
      setOptions('')
    }
  }


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
  { id: 3,
    label: "TOEIC"
  },

]


  return (
    <div>
      <div>
        <p>CHOOSE A COURSE</p>
        <select value={programId} onChange={changeOption} onClick={click}>
          {programs.map((program) => (
            <option key={program.id} value={program.id}>{program.label}</option>
          ))}
        </select>
      </div>
  
    {options &&
    <div>
      <select className='w-40'>
      {options.map((option) => (
        <option value={option.id}>{option.label}</option>
      ))}
      </select>
      </div>
    }
    <div>
      <p>Duration</p>
    </div>
         <div>
      <select className='w-40 '>
      {duration.map((option) => (
        <option value={option.id}>{option} weeks</option>
      ))}
      </select>
      </div>
    </div>
    
  )
}

export default CoursesPurchasesExam