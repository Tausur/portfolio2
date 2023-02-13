import Link from 'next/link';
import React from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Navbar = props => {

  const router = useRouter()

  const [theme, setTheme] = useState('dark');
  const [menu, setMenu] = useState(false);

  const handleTheme = () => {
    if (theme == 'dark') {
      setTheme('white');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    props.onSubmit(theme);
  });

  let styles = {
    darkNav: 'text-white py-4 flex justify-center items-center',
    whiteNav: 'py-4 flex justify-center items-center shadow-md',
  };

  return (
    <div>
      <div className={theme == 'dark' ? styles.darkNav : styles.whiteNav}>
        {/* logo here */}
        <div className="flex justify-center items-center flex-1 md:flex-none">
          <div className="text-xl px-6 flex-1">
            <p
              style={{ fontFamily: 'cursive', cursor: 'pointer' }}
              className="inline-block hover:text-sky-500 ease-in-out duration-500">
              <Link href='/'>Tausur Rahaman</Link>
            </p>
          </div>

          {/* pc navbar options */}
          <div className="list-none hidden md:flex">

            <li className='text-lg px-4 hover:underline hover:text-sky-500 ease-in-out duration-500 hover:-translate-y-1'>
              <Link href={'/works'}>Works</Link>
            </li>

            <li className='text-lg px-4 hover:underline hover:text-sky-500 ease-in-out duration-500 hover:-translate-y-1'>
              <Link href={'/posts'}>Posts</Link>
            </li>

            <Link href={'https://github.com/tausur'}>
              <button className="text-md font-semibold px-4 hover:underline hover:text-sky-500 ease-in-out duration-500 hover:-translate-y-1">Source</button>
            </Link>
          </div>
        </div>

        {/* Theme change option */}
        {theme == 'dark' ? (
          <button
            className="bg-amber-400 w-10 h-10 flex justify-center items-center rounded-lg cursor-pointer duration-500 ease-in-out md:ml-20 active:rotate-180 active:duration-75"
            onClick={handleTheme}>
            <BsSunFill className="text-xl text-black" />
          </button>
        ) : (
          <button
            className="bg-sky-500 w-10 h-10 flex justify-center items-center rounded-lg cursor-pointer duration-500 ease-in-out md:ml-20 active:rotate-180 active:duration-75"
            onClick={handleTheme}>
            <BsMoonFill className="text-xl text-black" />
          </button>
        )}

        {/* Hamberger Menu */}
        <button
          className="bg-transparent border-2 border-gray-400 w-10 h-10 flex justify-center items-center rounded-lg cursor-pointer mx-2 md:hidden hover:bg-gray-600"
          onClick={() => setMenu(menu == false ? true : false)}>
          <FiMenu className="text-xl" />
        </button>
      </div>

      {menu && (
        <div data-aos="fade-up-right">
          <div className="top-16 absolute right-3 bg-gray-700 rounded-md w-48 py-2 text-white">
            <Link href='/'>
              <button className="block text-xl font-mono cursor-pointer hover:bg-gray-600 duration-300 ease-in-out py-2 px-4 w-full">
                Home
              </button>
            </Link>
            <Link href='/works'>
              <p className="flex justify-center text-xl font-mono cursor-pointer hover:bg-gray-600 duration-300 ease-in-out py-2 px-4 w-full">
                Works
              </p>
            </Link>
            <Link href='/posts'>
              <p className="flex justify-center text-xl font-mono cursor-pointer hover:bg-gray-600 duration-300 ease-in-out py-2 px-4 w-full">
                Posts
              </p>
            </Link>
            <Link href={'https://github.com/tausur'}>
              <button className="block text-xl font-mono cursor-pointer hover:bg-gray-600 duration-300 ease-in-out py-1 px-4 w-full">
                View Source
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
