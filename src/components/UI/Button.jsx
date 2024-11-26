import clsx from 'clsx'

const Button = ({
  children,
  onClick,
  styleOptions = {
    backgroundColor: 'bg-secondary',
    borderColor: 'border-textLight',
    textColor: 'text-textLight',
    hoverTextColor: 'hover:text-textDark'
  },
  disabled = false,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'px-6 py-3 border-solid border-2 rounded-3xl transition-colors duration-300',
        styleOptions.backgroundColor,
        styleOptions.textColor,
        styleOptions.borderColor,
        styleOptions.hoverTextColor,
        'hover:bg-transparent',
        className,
        {
          'bg-gray-400 cursor-not-allowed': disabled
        }
      )}
    >
      {children}
    </button>
  )
}

export default Button
