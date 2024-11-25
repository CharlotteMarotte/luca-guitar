import clsx from 'clsx'

const PrimaryButton = ({ children, onClick, backgroundColor = 'copper', disabled = false }) => {
  const bgColor = `bg-${backgroundColor}`
  const hoverColor = `hover:bg-transparent hover:text-${backgroundColor}`

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'px-6 py-3 border-solid border-2 border-white text-white rounded-3xl transition-colors duration-300',
        bgColor,
        hoverColor,
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
