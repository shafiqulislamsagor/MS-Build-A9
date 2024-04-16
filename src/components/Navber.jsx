import { Link, NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import '../fonts/fonts.css'
import { useContext, useState } from 'react';
import 'animate.css';
import { ContextRoutes } from '../context/ContextHooks';
import { IoHomeOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { FaPersonCircleCheck } from 'react-icons/fa6';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { toast } from 'react-toastify';



const Navber = () => {
    const { user, logoutHooks } = useContext(ContextRoutes)

    const [hidden, setHidden] = useState(true)
    const profileHandle = () => {
        setHidden(!hidden)
        setTimeout(() => {
            setHidden(true)
        }, 3000);
    }
    const logOutHandle = () => {
        logoutHooks()
        .then(()=>{
            toast.success('Log Out Success ..!')
        })
        .catch(()=>{
            toast.error('logOut failed..!')
        })
    }
    return (
        <header className="px-4 bg-sky-900 saira  text-gray-100 sticky z-10 top-0">
            <div className="container flex justify-between items-center h-16 mx-auto">
                <h2 rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
                    <Link to='/' className='font-semibold text-xl sm:text-2xl lg:text-4xl design'><span className='webPrimary'>M</span><span className='textLogo'>S</span> Build</Link>
                </h2>
                <ul className="items-stretch gap-5 hidden space-x-3 text-xl font-medium sm:flex">
                    <li className="flex relative">
                        <NavLink to='/' rel="noopener noreferrer" className={({ isActive }) => isActive ? 'flex items-center -mb-1 gap-1  webPrimary' : 'flex items-center gap-1 -mb-1'}><IoHomeOutline /> Home</NavLink>
                        <NavLink to='/' className={({ isActive }) => !isActive ? 'hidden' : 'block'}><div className='webPrimaryBorder border h-5 rotate-90 absolute top-5 left-3'></div></NavLink>
                    </li>
                    <li className="flex relative">
                        <NavLink to='/profileUpdate' rel="noopener noreferrer" className={({ isActive }) => isActive ? 'flex items-center gap-1 -mb-1  webPrimary' : 'flex items-center gap-1 -mb-1'}><FaPersonCircleCheck />ProfileUpdate</NavLink>
                        <NavLink to='/profileUpdate' className={({ isActive }) => !isActive ? 'hidden' : 'block'}>
                            <div className='webPrimaryBorder border h-5 rotate-90 absolute top-5 left-3'></div>
                        </NavLink>
                    </li>
                    <li className="flex relative">
                        <NavLink to='/profile' rel="noopener noreferrer" className={({ isActive }) => isActive ? 'flex items-center -mb-1 gap-1  webPrimary' : 'flex items-center gap-1 -mb-1'}><CgProfile />Profile</NavLink>
                        <NavLink to='/profile' className={({ isActive }) => !isActive ? 'hidden' : 'block'}>
                            <div className='webPrimaryBorder border h-5 rotate-90 absolute top-5 left-3'></div>
                        </NavLink>
                    </li>
                    <li className="flex relative">
                        <NavLink to='/About' rel="noopener noreferrer" className={({ isActive }) => isActive ? 'flex items-center -mb-1 gap-1 webPrimary' : 'flex items-center gap-1 -mb-1'}><BsFillInfoCircleFill /> About</NavLink>
                        <NavLink to='/About' className={({ isActive }) => !isActive ? 'hidden' : 'block'}>
                            <div className='webPrimaryBorder border h-5 duration-500 rotate-90 absolute top-5 left-3'></div>
                        </NavLink>
                    </li>
                </ul>
                {
                    user ? <div>
                        <div className="relative lg:static">
                            <Tooltip id="my-tooltip" />
                            <div onClick={profileHandle} role="button" className="btn btn-ghost btn-circle avatar">

                                <div data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} className="w-12 rounded-full">
                                    {
                                        user && <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                    }
                                </div>
                            </div>
                            <ul className={hidden ? 'hidden' : 'mt-3 animate__bounceInRight p-2 absolute top-10 lg:top-11 right-0 lg:right-12 shadow menu menu-sm bg-cyan-800 border rounded-box w-40'}>
                                <li className='sm:hidden'><NavLink to='/' className={({ isActive }) => isActive ? 'flex items-center -mb-1  webPrimary' : 'flex items-center -mb-1'}>Home</NavLink></li>
                                <li className='sm:hidden'><NavLink to='/profileUpdate' className={({ isActive }) => isActive ? 'flex items-center -mb-1  webPrimary' : 'flex items-center -mb-1'}>ProfileUpdate</NavLink></li>
                                <li className='sm:hidden'>
                                    <NavLink to='/profile' className={({ isActive }) => isActive ? 'flex items-center -mb-1  webPrimary' : 'flex items-center -mb-1'}>
                                        Profile
                                        <span className="badge">New</span>
                                    </NavLink>
                                </li>

                                <li className='sm:hidden'><NavLink to='/About' className={({ isActive }) => isActive ? 'flex items-center -mb-1  webPrimary' : 'flex items-center -mb-1'}>About</NavLink></li>
                                <li onClick={logOutHandle}><NavLink to='/login' className={({ isActive }) => isActive ? 'flex items-center -mb-1  webPrimary' : 'flex items-center -mb-1'}>Logout</NavLink></li>
                            </ul>

                        </div>
                    </div> : <div className="items-center flex-shrink-0 flex">
                        <Link to='/login' className="btn h-auto border-0 hover:bg-orange-600 self-center px-8 py-3 font-semibold text-xl rounded webPrimaryBg text-white">Log In</Link>
                    </div>
                }

                {/* Mobile responsive design */}


            </div>
        </header>
    );
};

export default Navber;