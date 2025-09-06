import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Header = () => {
    const navItems = <>
        <li className='text-lg text-black'>
            <Link to="/">Stays</Link>
        </li>
    </>;

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold text-rose-500">Airbnb</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <ul>
                    <li className='text-md text-black mr-2'>Airbnb your home</li>
                </ul>
                <button className="btn">
                    <CgProfile className='text-4xl' />
                </button>
            </div>
        </div>
    );
};

export default Header;