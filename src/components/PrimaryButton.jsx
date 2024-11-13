const PrimaryButton = ({ children, onClick, backgroundColor = 'copper' }) => {
  const bgColor = `bg-${backgroundColor}`

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 ${bgColor} boder-solid border-2 border-white text-white font-body rounded-3xl transition-colors duration-300 hover:bg-transparent`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
