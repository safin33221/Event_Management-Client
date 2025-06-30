import { useState } from 'react'; // Use 'react-router-dom' for web apps
import { NavLink } from 'react-router';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/event">Event</NavLink></li>
            <li><NavLink to="/my-event">My Event</NavLink></li>
        </>
    );

    return (
        <div className='bg-gray-200 shadow-xl'>
            <div className='flex justify-between items-center container mx-auto py-5 text-lg px-5'>
                {/* logo and name */}
                <div className='flex items-center gap-2'>
                    <div>
                        {/* Hamburger for mobile */}
                        <button
                            className="md:hidden"
                            onClick={() => setOpen(!open)}
                        >
                            {/* Simple Hamburger Icon */}
                            {
                                open ? "X" : (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>)
                            }

                        </button>
                    </div>
                    Eco Management
                </div>

                {/* Desktop navigation */}
                <div className="hidden md:flex gap-5">
                    <ul className='flex gap-5'>
                        {links}
                    </ul>
                </div>

                {/* Profile, login, and register */}
                <div>
                    <div className='flex items-center gap-3 '>
                        <NavLink to={`/auth/login`} className='text-blue-600 font-bold'>Login</NavLink>
                        <span>|</span>
                        <NavLink to={'/auth/register'} className='text-blue-600 font-bold'>Register</NavLink>
                    </div>
                </div>
            </div>

            {/* Mobile navigation */}
            {open && (
                <div className="md:hidden bg-gray-100 px-5 pb-4 absolute">
                    <ul className='flex flex-col gap-3'>
                        {links}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;