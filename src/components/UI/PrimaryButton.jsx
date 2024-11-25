import clsx from 'clsx'

const PrimaryButton = ({
  children,
  onClick,
  backgroundColor = 'bg-secondary',
  borderColor = 'border-textLight',
  textColor = 'text-textLight',
  hoverTextColor = 'hover:text-textDark',
  disabled = false
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'px-6 py-3 border-solid border-2 rounded-3xl transition-colors duration-300',
        backgroundColor,
        textColor,
        borderColor,
        hoverTextColor,
        'hover:bg-transparent',
        {
          'bg-gray-400 cursor-not-allowed': disabled
        }
      )}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
