import { useState, useEffect } from 'react'

const MathValidation = ({ onValidationError, onValidationSuccess, validateAnswerFromParent }) => {
  const [num1, setNum1] = useState(null)
  const [num2, setNum2] = useState(null)
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [userAnswer, setUserAnswer] = useState('')

  // Generate random numbers for the math question
  useEffect(() => {
    const randomNum1 = Math.floor(Math.random() * 10) + 1
    const randomNum2 = Math.floor(Math.random() * 10) + 1
    setNum1(randomNum1)
    setNum2(randomNum2)
    setCorrectAnswer(randomNum1 + randomNum2)
  }, [])

  // Update user answer as they type
  const handleInputChange = (e) => {
    setUserAnswer(e.target.value)
  }

  // The validation function is now called checkAnswer
  const checkAnswer = () => {
    if (parseInt(userAnswer) === correctAnswer) {
      onValidationSuccess()
    } else {
      onValidationError()
    }
  }

  // Call the parent's validateAnswer function on form submission
  const validateAnswer = () => {
    validateAnswerFromParent() // Call the parent's validateAnswer function
  }

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
          onBlur={checkAnswer} // Check the answer immediately on blur
          required
          className='bg-white text-black p-3 rounded-3xl w-16 text-center text-lg remove-arrow'
        />
      </div>
    </div>
  )
}

export default MathValidation
