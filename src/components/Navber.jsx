import { Link, NavLink } from 'react-router-dom';
import '../fonts/fonts.css'
import { useState } from 'react';
import 'animate.css';

const Navber = () => {
    const [hidden, setHidden] = useState(true)
    const profileHandle = () => {
        setHidden(!hidden)
    }
    return (
        <header className="p-4 bg-transparent saira  text-gray-100 sticky top-0">
            <div className="container flex justify-between items-center h-16 mx-auto">
                <a rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
                    <h2 className='font-semibold text-xl sm:text-2xl lg:text-4xl design'><span className='webPrimary'>M</span><span className='textLogo'>S</span> Build</h2>
                </a>
                <ul className="items-stretch gap-5 hidden space-x-3 text-xl font-medium sm:flex">
                    <li className="flex relative">
                        <NavLink to='/' rel="noopener noreferrer" className={({ isActive }) => isActive ? 'flex items-center -mb-1  webPrimary' : 'flex items-center -mb-1'}>Home</NavLink>
                        <NavLink to='/' className={({ isActive }) => !isActive ? 'hidden' : 'block'}><div className='webPrimaryBorder border h-5 rotate-90 absolute top-5 left-3'></div></NavLink>
                    </li>
                    <li className="flex relative">
                        <NavLink to='/profile' rel="noopener noreferrer" className={({ isActive }) => isActive ? 'flex items-center -mb-1  webPrimary' : 'flex items-center -mb-1'}>Profile</NavLink>
                        <NavLink to='/profile' className={({ isActive }) => !isActive ? 'hidden' : 'block'}>
                            <div className='webPrimaryBorder border h-5 rotate-90 absolute top-5 left-3'></div>
                        </NavLink>
                    </li>
                    <li className="flex relative">
                        <NavLink to='/profileUpdate' rel="noopener noreferrer" className={({ isActive }) => isActive ? 'flex items-center -mb-1  webPrimary' : 'flex items-center -mb-1'}>ProfileUpdate</NavLink>
                        <NavLink to='/profileUpdate' className={({ isActive }) => !isActive ? 'hidden' : 'block'}>
                            <div className='webPrimaryBorder border h-5 duration-500 rotate-90 absolute top-5 left-3'></div>
                        </NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden sm:flex">
                    <Link to='/login' className="btn h-auto border-0 hover:bg-orange-600 self-center px-8 py-3 font-semibold text-xl rounded webPrimaryBg text-white">Sign up</Link>
                </div>
                {/* Mobile responsive design */}
                <div className='sm:hidden'>
                    <div className="relative lg:static">
                        <div onClick={profileHandle} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul className={hidden ? 'hidden' : 'mt-3 animate__bounceInRight p-2 absolute top-10 right-0 shadow menu menu-sm bg-transparent border rounded-box w-40'}>
                            <li><a >Home</a></li>
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>ProfileUpdate</a></li>
                            <li><a>Logout</a></li>
                        </ul>

                    </div>
                </div>

            </div>
        </header>
    );
};

export default Navber;