import { useState, useEffect } from 'react'

const MathValidation = ({ onValidationError, onValidationSuccess }) => {
  const [num1, setNum1] = useState(null)
  const [num2, setNum2] = useState(null)
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [userAnswer, setUserAnswer] = useState('')

  const generateRandomNumbers = () => {
    const randomNum1 = Math.floor(Math.random() * 10) + 1
    const randomNum2 = Math.floor(Math.random() * 10) + 1
    setNum1(randomNum1)
    setNum2(randomNum2)
    setCorrectAnswer(randomNum1 + randomNum2)
  }

  useEffect(() => {
    generateRandomNumbers()
  }, [])

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value)
  }

  const validateAnswer = () => {
    if (parseInt(userAnswer) === correctAnswer) {
      onValidationSuccess()
    } else {
      onValidationError()
    }
  }

  useEffect(() => {
    validateAnswer()
  }, [userAnswer])

  return (
    <div>
      <div className='flex items-center space-x-4 flex-wrap'>
        <p className='m-0 text-lg flex-shrink-0'>
          Was ergibt {num1} + {num2}?
        </p>
        <input
          type='number'
          value={userAnswer}
          onChange={handleInputChange}
          className='bg-white text-black p-3 rounded-3xl w-16 text-center text-lg remove-arrow'
        />
      </div>
    </div>
  )
}

export default MathValidation
