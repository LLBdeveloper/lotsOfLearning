import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Function to handle closing the navbar when a link is clicked
  const handleLinkClick = () => {
    setNav(false);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', to: '/' },
    { id: 2, text: 'About', to: '/About' },
    { id: 3, text: 'Courses', to: '/Courses' },
    { id: 4, text: 'Contact', to: '/Contact' },
  ];

  return (
    <div className='bg-[#9ADCFF] pb-3 flex flex-col justify-between items-center md:h-44 max-w-[1240px] my-5 mx-auto px-4 text-[#FF8AAE]  font-bold rounded-2xl'>
      {/* Logo */}
      <h1 className='w-full text-center m-5 sm:font-love tracking-widest xs:text-xl sm:text-4xl md:text-5xl lg:text-6xl text-[black]'>LOTS OF LEARNING</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <Link
            key={item.id}
            to={item.to}
            onClick={handleLinkClick} // Close the navbar when link is clicked
            className='p-4 hover:bg-[#FF8AAE] mx-1 md:text-lg lg:text-2xl uppercase font-extrabold rounded-xl  cursor-pointer duration-300 hover:text-white'
          >
            {item.text}
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className=' md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#FF8AAE] m-4'>LOL</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#FF8AAE] duration-300 hover:text-white cursor-pointer border-gray-600'
          >
            <Link 
              to={item.to}
              onClick={handleLinkClick} // Close the navbar when link is clicked
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
