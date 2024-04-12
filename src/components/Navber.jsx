import { Link, NavLink } from 'react-router-dom';
import '../fonts/fonts.css'
import { useContext, useState } from 'react';
import 'animate.css';
import { ContextRoutes } from '../context/ContextHooks';

const Navber = () => {
    const {  user ,logoutHooks } = useContext(ContextRoutes)
    
    const [hidden, setHidden] = useState(true)
    const profileHandle = () => {
        setHidden(!hidden)
        setTimeout(() => {
            setHidden(true)
        }, 3000);
    }
    const logOutHandle = () =>{
        logoutHooks()
    }
    return (
        <header className="px-4 bg-sky-900 saira  text-gray-100 sticky z-10 top-0">
            <div className="container flex justify-between items-center h-16 mx-auto">
                <h2 rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
                    <Link to='/' className='font-semibold text-xl sm:text-2xl lg:text-4xl design'><span className='webPrimary'>M</span><span className='textLogo'>S</span> Build</Link>
                </h2>
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
                        <NavLink to='/About' rel="noopener noreferrer" className={({ isActive }) => isActive ? 'flex items-center -mb-1  webPrimary' : 'flex items-center -mb-1'}>About</NavLink>
                        <NavLink to='/About' className={({ isActive }) => !isActive ? 'hidden' : 'block'}>
                            <div className='webPrimaryBorder border h-5 duration-500 rotate-90 absolute top-5 left-3'></div>
                        </NavLink>
                    </li>
                </ul>
                {
                    user ? <div>
                        <div className="relative lg:static">
                            <div onClick={profileHandle} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-12 rounded-full">
                                    {
                                        user ? <img alt="Tailwind CSS Navbar component" src={user?.photoURL} /> : <img alt="Tailwind CSS Navbar component" src='https://i.ibb.co/nkQ9JmY/person-icon-no-photo-vector-8023186.jpg' />
                                    }
                                </div>
                            </div>
                            <ul className={hidden ? 'hidden' : 'mt-3 animate__bounceInRight p-2 absolute top-10 lg:top-11 right-0 lg:right-12 shadow menu menu-sm bg-cyan-800 border rounded-box w-40'}>
                                <li className='sm:hidden'><Link to='/'>Home</Link></li>
                                <li className='sm:hidden'>
                                    <Link to='/profile' className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li className='sm:hidden'><Link to='/About'>About</Link></li>
                                <li onClick={logOutHandle}><Link to='/login'>Logout</Link></li>
                            </ul>

                        </div>
                    </div> : <div className="items-center flex-shrink-0 flex">
                        <Link to='/login' className="btn h-auto border-0 hover:bg-orange-600 self-center px-8 py-3 font-semibold text-xl rounded webPrimaryBg text-white">Sign up</Link>
                    </div>
                }

                {/* Mobile responsive design */}


            </div>
        </header>
    );
};

export default Navber;