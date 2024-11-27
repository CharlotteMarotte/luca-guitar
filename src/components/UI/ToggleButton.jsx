import clsx from 'clsx'

const ToggleButton = ({
  isChecked,
  onToggle,
  inactiveLabel,
  activeLabel,
  textColor = 'text-textLight',
  id = 'toggle-button',
  ariaLabel = 'Toggle Button'
}) => {
  const handleChange = (event) => {
    onToggle(event.target.checked)
  }

  return (
    <label htmlFor={id} className='inline-flex items-center cursor-pointer'>
      <input
        type='checkbox'
        id={id}
        checked={isChecked}
        onChange={handleChange}
        className='sr-only peer'
        aria-checked={isChecked}
        aria-label={ariaLabel}
      />

      <div
        className={clsx(
          'relative w-11 h-6 rounded-full transition-all',
          isChecked ? 'bg-textDark peer-checked:bg-textDark' : 'bg-gray-200',
          'peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-500 peer-focus:ring-opacity-50',
          'peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full',
          'peer-checked:after:border-textLight after:content-[""] after:absolute after:top-[2px] after:left-[2px]',
          'after:bg-textLight after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5'
        )}
      />

      <span className={clsx(textColor, 'ml-3 text-xl')}>{isChecked ? activeLabel : inactiveLabel}</span>
    </label>
  )
}

export default ToggleButton
