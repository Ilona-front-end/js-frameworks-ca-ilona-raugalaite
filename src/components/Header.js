import React from 'react';
import Logo from '../assets/logo.jpg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const { amountOfItemsInBasket } = useSelector(state => state.basket);

  return (
    <header className="relative z-10">
      <nav aria-label="Top">
        <div className="bg-white">
          <div className="border-b border-gray-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* <!-- Logo (lg+) --> */}
                <div className="hidden lg:flex lg:items-center">
                  <Link to="/">
                    <span className="sr-only">Buy it for your Mom</span>
                    <img className="h-8 w-auto" src={Logo} alt="Logo" />
                  </Link>
                </div>

                <div className="hidden h-full lg:flex">
                  {/* <!-- Desktop menus --> */}
                  <div className="ml-8">
                    <div className="flex h-full justify-center space-x-8">
                    </div>
                  </div>
                </div>

                {/* <!-- Mobile menu and search (lg-) --> */}
                <div className="flex flex-1 items-center lg:hidden">

                  {/* <!-- Search --> */}
                  <Link to="/" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </Link>
                </div>

                {/* <!-- Logo (lg-) --> */}
                <Link to="/" className="lg:hidden">
                  <span className="sr-only">Buy it for your Mom</span>
                  <img src={Logo} alt="Logo" className="h-8 w-auto" />
                </Link>
                {/* Desktop search icon */}
                <div className="flex flex-1 items-center justify-end">
                  <div className="flex items-center lg:ml-8">
                    <div className="flex space-x-8">
                      <div className="hidden lg:flex">
                        <Link to="/" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Search</span>
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                          </svg>
                        </Link>
                      </div>

                      <div className="flex">
                        <Link to="/" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Account</span>
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </Link>
                      </div>
                    </div>

                    <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true"></span>

                    <div className="flow-root">
                      {/* Add to Cart icon */}
                      <Link to="/basket" className="group -m-2 flex items-center p-2">
                        <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        {/* Number of items is shopping cart */}
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{amountOfItemsInBasket}</span>
                        <span className="sr-only">items in cart, view bag</span>
                      </Link>
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
