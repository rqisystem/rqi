import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CgMenuMotion } from 'react-icons/cg';

import routes from '../routes';

const activeClass = 'bg-black-50 rounded';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-860 p-3 relative">
      <div className="flex justify-between items-center">
        <button onClick={toggleMenu} className="text-white">
          <CgMenuMotion size={24} />
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}></div>
      <nav
        className={`fixed top-0 left-0 h-full bg-gray-860 p-5 w-[18rem] transition-transform transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className="flex items-center justify-center mb-12 space-x-2">
          <img src="/logo.png" alt="Logo" className="w-6 h-6 rounded-full" />
          <span className='text-white'>Rüstəmli Qüdrət İbrahim</span>
        </div>
        <div className="">
          {routes.map((route, index) => (
            <NavLink
              key={index}
              to={route?.path}
              sx={{
                marginBottom: 2,
              }}
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? activeClass : ''
              }
              onClick={toggleMenu}>
              <div className="flex items-center space-x-2 py-1 text-white">
                <route.icon />
                <span>{route.title}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
