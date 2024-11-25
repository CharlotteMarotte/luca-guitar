const MenuItem = ({ children, href }) => (
  <li className='flex items-center pr-6 border-r border-textLight last:border-0'>
    <a href={href} className='group text-textLight transition-all duration-800 hover:text-white'>
      {children}
      <span className='block w-full h-[2px] bg-white transition-all duration-300 scale-x-0 group-hover:scale-x-100 group-hover:w-full'></span>
    </a>
  </li>
)

export default MenuItem
