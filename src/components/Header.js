import React from 'react';
import Logo from '../assets/logo.jpg';
import { useSelector } from 'react-redux';

const Header = () => {
  const { total } = useSelector(store => store.list);

  return (
    <header className="relative z-10">
      <nav aria-label="Top">
        <div className="bg-white">
          <div className="border-b border-gray-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* <!-- Logo (lg+) --> */}
                <div className="hidden lg:flex lg:items-center">
                  <a href="/">
                    <span className="sr-only">Buy it for your Mom</span>
                    <img className="h-8 w-auto" src={Logo} alt="Logo" />
                  </a>
                </div>

                <div className="hidden h-full lg:flex">
                  {/* <!-- Desktop menus --> */}
                  <div className="ml-8">
                    <div className="flex h-full justify-center space-x-8">
                      {/* wommen */}
                      {/* <div className="flex">
                          <div className="relative flex">
                            <button type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out" aria-expanded="false">Women</button>
                          </div>
                          <div className="absolute inset-x-0 top-full text-gray-500 sm:text-sm">
                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
                          </div>
                        </div> */}
                      {/* men */}
                      {/* <div className="flex">
                          <div className="relative flex">
                            <button type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out" aria-expanded="false">Men</button>
                          </div>
                          <div className="absolute inset-x-0 top-full text-gray-500 sm:text-sm">
                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
                          </div>
                        </div> */}
                    </div>
                  </div>
                </div>

                {/* <!-- Mobile menu and search (lg-) --> */}
                <div className="flex flex-1 items-center lg:hidden">
                  {/* <!-- Mobile burger menu toggle, controls the 'mobileMenuOpen' state. --> */}
                  {/* <button type="button" className="-ml-2 rounded-md bg-white p-2 text-gray-400">
                      <span className="sr-only">Open menu</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                    </button> */}

                  {/* <!-- Search --> */}
                  <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </a>
                </div>

                {/* <!-- Logo (lg-) --> */}
                <a href="/" className="lg:hidden">
                  <span className="sr-only">Buy it for your Mom</span>
                  <img src={Logo} alt="Logo" className="h-8 w-auto" />
                </a>
                {/* Desktop search icon */}
                <div className="flex flex-1 items-center justify-end">
                  <div className="flex items-center lg:ml-8">
                    <div className="flex space-x-8">
                      <div className="hidden lg:flex">
                        <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Search</span>
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                          </svg>
                        </a>
                      </div>

                      <div className="flex">
                        <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Account</span>
                          <svg clclassNameass="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true"></span>

                    <div className="flow-root">
                      {/* Add to Cart icon */}
                      <a href="#" className="group -m-2 flex items-center p-2">
                        <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        {/* Number of items is shopping cart */}
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{total}</span>
                        <span className="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
