import { useState, useEffect } from 'react'

const MathValidation = ({ onValidationError, onValidationSuccess }) => {
  const [num1, setNum1] = useState(null)
  const [num2, setNum2] = useState(null)
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [userAnswer, setUserAnswer] = useState('')
  const [error, setError] = useState(false)

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
      setError(false)
    } else {
      onValidationError()
      setError(true)
    }
  }

  useEffect(() => {
    if (userAnswer !== '') {
      validateAnswer()
    }
  }, [userAnswer])

  return (
    <>
      <div className='flex items-center space-x-4 flex-wrap'>
        <p id='math-question' className='m-0 text-lg flex-shrink-0'>
          Was ergibt {num1} + {num2}?
        </p>

        <div className='flex items-center'>
          <label htmlFor='userAnswer' className='sr-only'>
            Antwort eingeben für {num1} + {num2}
          </label>
          <input
            id='userAnswer'
            type='number'
            value={userAnswer}
            onChange={handleInputChange}
            aria-labelledby='math-question'
            aria-describedby={error ? 'error-message' : undefined}
            aria-invalid={error ? 'true' : 'false'}
            className='bg-neutralLight text-textDark p-3 rounded-3xl w-16 text-center text-lg remove-arrow focus:outline-none focus:ring-0 focus:border-textDark focus:border-2'
          />
        </div>
      </div>

      {error && (
        <p id='error-message' role='alert' className='text-accent text-sm mt-2'>
          Falsche Antwort. Bitte versuche es erneut.
        </p>
      )}
    </>
  )
}

export default MathValidation
