import { useState } from 'react'
import { PrimaryButton } from '@components'
import emailjs from '@emailjs/browser'
import MathValidation from './MathValidation'

const ContactForm = ({ onSubmitSuccess, onSubmitError }) => {
  const [sending, setSending] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isMathValid, setIsMathValid] = useState(false)
  const [validationError, setValidationError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleMathValidationSuccess = () => {
    setIsMathValid(true)
    setValidationError(false)
    setErrorMessage('')
  }

  const handleMathValidationError = () => {
    setIsMathValid(false)
    setValidationError(true)
    setErrorMessage('Falsche Antwort. Versuche es erneut.')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!isMathValid) {
      setValidationError(true)
      setErrorMessage('Falsche Antwort. Versuche es erneut.')
      return
    }

    setSending(true)

    emailjs
      .sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, e.target, import.meta.env.VITE_EMAIL_USER_ID)
      .then(
        (result) => {
          setSending(false)
          onSubmitSuccess()
          setFormData({ name: '', email: '', message: '' })
        },
        (error) => {
          setSending(false)
          onSubmitError()
        }
      )
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4 font-body'>
      <div className='flex flex-col'>
        <label htmlFor='name' className='text-md mb-2'>
          Name
        </label>
        <input
          maxLength={70}
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
          required
          className='bg-white text-black p-3 rounded-3xl pl-4'
        />
      </div>

      <div className='flex flex-col'>
        <label htmlFor='email' className='text-md mb-2'>
          E-Mail
        </label>
        <input
          maxLength={320}
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          required
          className='bg-white text-black p-3 rounded-3xl pl-4'
        />
      </div>

      <div className='flex flex-col'>
        <label htmlFor='message' className='text-md mb-2'>
          Nachricht
        </label>
        <textarea
          maxLength={1000}
          id='message'
          name='message'
          value={formData.message}
          onChange={handleInputChange}
          required
          rows='4'
          className='bg-white text-black p-6 rounded-3xl pl-4'
        ></textarea>
      </div>

      {/* Container for Math Validation and Submit Button */}
      <div className='flex space-x-4 mt-4 justify-between'>
        {/* Math Validation */}
        <MathValidation onValidationError={handleMathValidationError} onValidationSuccess={handleMathValidationSuccess} />

        {/* Submit Button */}
        <div>
          <PrimaryButton backgroundColor='spicyMustard' disabled={sending}>
            {sending ? 'Sende...' : 'Nachricht senden'}
          </PrimaryButton>
        </div>
      </div>

      {/* Error message */}
      {validationError && (
        <p className='bg-redWood border-white border-2 text-white font-body text-lg p-3 rounded-3xl my-4 w-full max-w-md mx-auto text-center'>
          {errorMessage}
        </p>
      )}
    </form>
  )
}

export default ContactForm
