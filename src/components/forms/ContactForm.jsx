import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import clsx from 'clsx'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import { PrimaryButton } from '@components'
import MathValidation from './MathValidation'

const ContactForm = ({ onSubmitSuccess, onSubmitError }) => {
  const [sending, setSending] = useState(false)
  const [isMathValid, setIsMathValid] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const schema = z.object({
    name: z
      .string()
      .min(1, 'Bitte gib einen Namen an')
      .max(70, 'Name muss kürzer als 70 Zeichen sein')
      .regex(/^[\p{L}\s-]+$/u, 'Name darf keine Zahlen oder Sonderzeichen enthalten'),

    email: z
      .string()
      .min(1, 'Bitte gib eine Email-Adresse an')
      .max(320, 'Email-Adresse muss kürzer als 320 Zeichen sein')
      .email('Ungültige Email-Adresse'),

    message: z.string().min(1, 'Bitte gib eine Nachricht an').max(1000, 'Nachricht muss kürzer als 1000 Zeichen sein')
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset
  } = useForm({
    resolver: zodResolver(schema)
  })

  useEffect(() => {
    setIsMathValid(false)
    setErrorMessage('')
  }, [])

  const handleMathValidationSuccess = () => {
    setIsMathValid(true)
    setErrorMessage('')
  }

  const handleMathValidationError = () => {
    setIsMathValid(false)
  }

  const onSubmit = (data) => {
    if (!isMathValid) {
      setErrorMessage('Falsche Antwort. Versuche es erneut.')
      return
    }

    setSending(true)

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message
        },
        import.meta.env.VITE_EMAIL_USER_ID
      )
      .then(
        () => {
          setSending(false)
          onSubmitSuccess()
          reset()
        },
        () => {
          setSending(false)
          onSubmitError()
        }
      )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 '>
      <div className='flex flex-col'>
        <label htmlFor='name' className='text-md mb-2'>
          Name
        </label>
        <input
          type='text'
          {...register('name')}
          onBlur={() => trigger('name')}
          className={clsx(
            'bg-janna text-black p-3 rounded-3xl pl-4 focus:border-cafeNoir focus:border-2 focus:outline-none focus:ring-0',
            errors.name && 'border-2 border-metallicCopper'
          )}
        />
        {errors.name && <span className='text-metallicCopper'>{errors.name.message}</span>}
      </div>

      <div className='flex flex-col'>
        <label htmlFor='email' className='text-md mb-2'>
          E-Mail
        </label>
        <input
          type='email'
          {...register('email')}
          onBlur={() => trigger('email')}
          className={clsx(
            'bg-janna text-black p-3 rounded-3xl pl-4 focus:border-cafeNoir focus:border-2 focus:outline-none focus:ring-0',
            errors.email && 'border-2 border-metallicCopper'
          )}
        />
        {errors.email && <span className='text-metallicCopper'>{errors.email.message}</span>}
      </div>

      <div className='flex flex-col'>
        <label htmlFor='message' className='text-md mb-2'>
          Nachricht
        </label>
        <textarea
          {...register('message')}
          onBlur={() => trigger('message')}
          rows='4'
          className={clsx(
            'bg-janna text-black p-6 rounded-3xl pl-4 focus:outline-none focus:ring-0 focus:border-cafeNoir focus:border-2',
            errors.message && 'border-2 border-metallicCopper'
          )}
        ></textarea>
        {errors.message && <span className='text-metallicCopper'>{errors.message.message}</span>}
      </div>

      <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-4 justify-between items-center'>
        <MathValidation onValidationError={handleMathValidationError} onValidationSuccess={handleMathValidationSuccess} />
        <PrimaryButton backgroundColor='spicyMustard' disabled={sending}>
          {sending ? 'Sende...' : 'Nachricht senden'}
        </PrimaryButton>
      </div>

      {errorMessage && (
        <p className='bg-metallicCopper border-white border-2 text-white text-lg p-3 rounded-3xl my-4 w-full max-w-md mx-auto text-center'>
          {errorMessage}
        </p>
      )}
    </form>
  )
}

export default ContactForm
