const MenuItem = ({ children, href }) => (
  <li className='flex items-center pr-8 border-r border-textLight last:border-0'>
    <a className='hover:text-white' href={href}>
      {children}
    </a>
  </li>
)

export default MenuItem
