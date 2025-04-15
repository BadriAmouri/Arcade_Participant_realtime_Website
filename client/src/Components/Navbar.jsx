import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-blue-300">
      <div className="flex items-center justify-around px-4 py-5">
        {/* Logo */}
        <div className="w-60">
          <a href="/#">
            <img
              src="/images/Logo.png"
              alt="logo"
              className="dark:hidden"
            />
            <img
              src="/images/Logo.png"
              alt="logo"
              className="hidden dark:block"
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:items-center lg:space-x-12">
          <NavLink href="/#">Ranking</NavLink>
          <NavLink href="/games">Games</NavLink>
          <NavLink href="/gameDetails">Q&A</NavLink>
          <NavLink href="/team">Account</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-current my-1.5 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-20 right-2  shadow-lg dark:bg-dark-2 transition-all duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col space-y-4 p-6">
          <NavLink href="/#">Ranking</NavLink>
          <NavLink href="/games">Games</NavLink>
          <NavLink href="/gameDetails">Q&A</NavLink>
          <NavLink href="/team">Account</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable NavLink component
const NavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-base font-medium font-Ocr "
    >
      {children}
    </a>
  );
};

export default Navbar;