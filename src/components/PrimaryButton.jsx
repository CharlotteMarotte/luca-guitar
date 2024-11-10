const PrimaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='px-6 py-3 bg-copper boder-solid border-2 border-white text-white font-body rounded-3xl transition-colors duration-300 hover:bg-transparent '
    >
      {children}
    </button>
  )
}

export default PrimaryButton
