const PrimaryButton = ({ children, onClick, backgroundColor = 'copper', disabled = false }) => {
  const bgColor = `bg-${backgroundColor}`
  const hoverColor = `hover:bg-transparent hover:text-${backgroundColor}`

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 ${bgColor} border-solid border-2 border-white text-white font-body rounded-3xl transition-colors duration-300 ${hoverColor} ${disabled ? 'bg-gray-400 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
