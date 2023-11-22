import Link from 'next/link'
import { data } from './data'

const Navbar = () => {
  const { navbars } = data

  if (navbars?.length) {
    return (
      <nav
        className="flex justify-between bg-gray-800 p-4 w-full"
        data-test-id="navbar-container"
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src="../../icon.png" alt="icon" className="w-10 h-10 mr-3" />
        </div>
        <div className="w-full block lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            {navbars.map(({ href, label, id }) => (
              <Link
                data-test-id={label + '.' + id}
                href={href}
                key={id}
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    )
  }

  return null
}

export { Navbar }
