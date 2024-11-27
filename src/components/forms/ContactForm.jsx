import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import clsx from 'clsx'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import { Button } from '@components'
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
          id='name'
          type='text'
          {...register('name')}
          onBlur={() => trigger('name')}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={clsx(
            'bg-neutralLight text-textDark p-3 rounded-3xl pl-4 focus:outline-none focus:ring-0 focus:border-2 focus:border-textLight',
            errors.name && 'border-2 border-accent'
          )}
        />

        {errors.name && (
          <span id='name-error' className='text-accent' role='alert'>
            {errors.name.message}
          </span>
        )}
      </div>

      <div className='flex flex-col'>
        <label htmlFor='email' className='text-md mb-2'>
          E-Mail
        </label>
        <input
          id='email'
          type='email'
          {...register('email')}
          onBlur={() => trigger('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={clsx(
            'bg-neutralLight text-textDark p-3 rounded-3xl pl-4 focus:outline-none focus:ring-0 focus:border-2 focus:border-textLight',
            errors.email && 'border-2 border-accent'
          )}
        />
        {errors.email && (
          <span id='email-error' className='text-accent' role='alert'>
            {errors.email.message}
          </span>
        )}
      </div>

      <div className='flex flex-col'>
        <label htmlFor='message' className='text-md mb-2'>
          Nachricht
        </label>
        <textarea
          id='message'
          {...register('message')}
          onBlur={() => trigger('message')}
          rows='4'
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={clsx(
            'bg-neutralLight text-textDark p-3 rounded-3xl pl-4 focus:outline-none focus:ring-0 focus:border-2 focus:border-textLight',
            errors.message && 'border-2 border-accent'
          )}
        ></textarea>
        {errors.message && (
          <span id='message-error' className='text-accent' role='alert'>
            {errors.message.message}
          </span>
        )}
      </div>

      <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mt-4 justify-between items-center'>
        <MathValidation onValidationError={handleMathValidationError} onValidationSuccess={handleMathValidationSuccess} />
        <Button
          disabled={sending}
          aria-live='polite'
          aria-disabled={sending ? 'true' : 'false'}
          styleOptions={{
            backgroundColor: 'bg-secondary',
            textColor: 'text-dark',
            borderColor: 'border-textDark',
            hoverTextColor: 'hover:text-dark'
          }}
        >
          {sending ? 'Sende...' : 'Nachricht senden'}
        </Button>
      </div>

      {errorMessage && (
        <p className='bg-accent border-textLight border-2 text-textLight text-lg p-3 rounded-3xl my-4 w-full max-w-md mx-auto text-center'>
          {errorMessage}
        </p>
      )}
    </form>
  )
}

export default ContactForm
