import React, {useState, useEffect} from 'react'
import Layout from '../components/Screens/Layout'
import Stepper from '../components/Students/Steps/Stepper'
import StepperControl from '../components/Students/Steps/StepperControl'
import GeneralStudInfo from "../components/Students/Steps/GeneralStudInfo"
import GuardianStudInfo from "../components/Students/Steps/GuardianStudInfo"
import Complete from "../components/Students/Steps/Complete"
import { StepperContext } from './Context/StepperContext'
import CoursePurchasesExam from '../components/Students/Steps/CoursesPurchasesExam'
const addStudents = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);

  const steps = [
    "General",
    "Guardian and emergency",
    "Courses or Purchases",
    "Complete",
    
  ]

  const displayStep = (step) => {
    switch(step) {
      case 1:
        return <GeneralStudInfo/>
      case 2:
        return <GuardianStudInfo/>
      case 3:
        return <CoursePurchasesExam/>
      case 4:
        return <Complete/>
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction == "next" ? newStep++ : newStep-- ;

    //Check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }
    return (
      <Layout>
        <div className='w-full mx:auto p-2 shadow-xl rounded-2xl bg-gray-100'>
          <div className='container horizontal mt-2'>
          <Stepper
              steps={steps}  
              currentStep={currentStep}
          />
          <div className='my-10 p-2 pb-0'>
            <StepperContext.Provider value={{
              userData,
              setUserData,
              finalData,
              setFinalData

            }}>
              {displayStep(currentStep)}
            </StepperContext.Provider>
          </div>
          {currentStep !== steps.length && 
          <StepperControl
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
          />
        }
          </div>
         
        </div>
</Layout>
    )
}

export default addStudents