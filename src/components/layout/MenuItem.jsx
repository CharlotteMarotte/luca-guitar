const MenuItem = ({ children, href }) => (
  <li className='flex items-center pr-8 border-r border-white last:border-0'>
    <a className='hover:text-amber-500' href={href}>
      {children}
    </a>
  </li>
)

export default MenuItem
