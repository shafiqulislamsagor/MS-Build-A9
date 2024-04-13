import { Link } from 'react-router-dom';
import '../fonts/fonts.css'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Animation from '../components/Animation';
import google from '../assets/icons8-google.svg'
import github from '../assets/icons8-github.svg'
import { ContextRoutes } from '../context/ContextHooks';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

AOS.init();

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation()
    // console.log(location);
    const [hidePoint, setHidePoint] = useState(true)
    const [hide, setHide] = useState('password')
    const { logIn, gitHubHooks, googleHooks ,setLoading} = useContext(ContextRoutes)
    const formHandle = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email, password)
            .then(() => {
                toast.success('logIn Successfully')
                navigate(location?.state ? location.state:'/');
            })
            .catch(() => {
                toast.error('Wrong Your Email or Password.!')
                setLoading(true)
            })
    }
    const googleHandle = () => {
        googleHooks()
            .then(() => {
                toast.success('google login your Accounts')
                navigate(location?.state ? location.state:'/');
            })
            .catch(() => {
                toast.error('Please, Try Again')
                setLoading(true)
            })
    }
    const githubHandle = () => {
        gitHubHooks()
            .then(() => {
                toast.success('GitHub login your Accounts')
                navigate(location?.state ? location.state:'/');
            })
            .catch(() => {
                toast.error('Please, Try Again')
                setLoading(true)
            })
    }
    const hideHandle = () => {
        if (hidePoint) {
            setHide('text')
            setHidePoint(false)
            // console.log('nai');
            return
        }
        if (!hidePoint) {
            setHide('password')
            setHidePoint(true)
            // console.log('object');
        }
    }
    return (
        <div className="hero items-start  bg-transparent text-white w-full lg:w-4/5 mx-auto">
            <div className="hero-content w-auto flex-col lg:flex-row">
                <div data-aos="fade-right"
                    className="text-center lg:text-left">
                    <Animation />
                </div>
                <div data-aos="fade-left" className="card shrink-0 w-full md:w-3/4  lg:w-2/5  shadow-2xl bg-cyan-800 bg-opacity-30">
                        <form onSubmit={formHandle} className="card-body p-6">
                            <span className="label-text text-3xl text-center text-white font-semibold saira">Log In</span>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-semibold saira">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered text-black font-medium bg-opacity-85" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text text-white font-semibold saira">Password</span>
                                </label>
                                <input type={hide} placeholder="password" name='password' className="input input-bordered text-black font-medium bg-opacity-85" required />
                                <h1 onClick={hideHandle} className='absolute right-[3%] bottom-[40%] cursor-pointer text-black opacity-85'>{hidePoint ? <FaRegEyeSlash /> : <FaRegEye />}</h1>
                                <label className="hover:text-white hover:underline cursor-pointer mt-2">
                                    <a className="text-white saira font-medium">Forgot password ?</a>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label className="hover:text-white hover:underline cursor-pointer mt-2">
                                <Link to='/register' className="text-white saira font-medium">Don&#39;t have an account? Register</Link>
                            </label>

                        </form>
                        <div className="flex w-4/5 mx-auto items-center py-2 space-x-1 saira">
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                            <p className="px-3 text-sm ">Login with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        </div>
                        <div className='pb-6 mx-auto flex gap-3'>
                            <button onClick={googleHandle} className='btn p-2 w-12 h-auto rounded-full'>
                                <img src={google} alt="" />
                            </button>
                            <button onClick={githubHandle} className='btn p-2 w-12 h-auto rounded-full'>
                                <img src={github} alt="" />
                            </button>

                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Login;