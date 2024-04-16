import { Link } from 'react-router-dom';
import '../fonts/fonts.css'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import google from '../assets/icons8-google.svg'
import github from '../assets/icons8-github.svg'
import RegisterAnimations from '../components/RegisterAnimation';
import { ContextRoutes } from '../context/ContextHooks';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


AOS.init();


const RegisterPage = () => {
    const contextInfo = useContext(ContextRoutes)
    const {user, registerHooks, logoutHooks, googleHooks, gitHubHooks, update,setLoading } = contextInfo
    const [hidePoint, setHidePoint] = useState(true)
    const [hide, setHide] = useState('password')
    const navigate = useNavigate();


    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    const fromHandle = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photoUrl = e.target.url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const strongPassword = passwordRegex.test(password)
        const confirmPassword = e.target.confirmPassword.value;
        // console.log(name,photoUrl,email,password,confirmPassword);
        if (password === confirmPassword) {
            // console.log(password);
            if(strongPassword){
                registerHooks(email, password)
                .then(() => {
                    update(name, photoUrl)
                    // console.log(current.user);
                    toast.success('Created Your Accounts')
                    logoutHooks()
                    navigate('/login');
                })
                .catch(() => {
                    toast.error('Try Again')
                    console.log(user);
                    setLoading(true)
                })
                return
            }
            toast.error('password UpperCase , LowerCase and least 6 Characters')
            return
        }
        toast.error('Password and confirm password not Match')

    }

    const googleHandle = () => {
        googleHooks()
            .then(() => {
                // console.log(user);
                toast.success('Account Create with google')
                logoutHooks()
                navigate('/login');
            })
            .catch(() => {
                toast.error('not create a accounts')
                setLoading(true)
            })
    }
    const GitHubHandle = () => {
        gitHubHooks()
            .then(() => {
                // console.log(user);
                toast.success('Account Create with GitHub')
                logoutHooks()
                navigate('/login');
            })
            .catch(() => {
                toast.error('not create a accounts')
                setLoading(true)
            })
    }

    const hideHandle = () => {
        if (hidePoint) {
            setHide('text')
            setHidePoint(false)
        }
        if (!hidePoint) {
            setHide('password')
            setHidePoint(true)
        }
    }
    // console.log("register page");
    return (
        <div className="hero mt-8 bg-transparent text-white w-full lg:w-4/5 mx-auto">
            <div className="hero-content w-auto flex-col gap-8 md:gap-0 lg:flex-row">
                <div data-aos="fade-right" className="text-center lg:text-left">
                    <RegisterAnimations />
                </div>
                <div data-aos="fade-left" className="card shrink-0 w-full md:w-3/4 lg:w-2/5  shadow-2xl bg-cyan-800 bg-opacity-30">
                    <form onSubmit={fromHandle} className="card-body">
                        <span className="label-text text-3xl text-center text-white font-semibold saira">Register Now</span>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold saira">FullName</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered text-black font-medium bg-opacity-85" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold saira">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='url' className="input input-bordered text-black font-medium bg-opacity-85" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold saira">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered text-black font-medium bg-opacity-85" required />

                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white font-semibold saira">Password</span>
                            </label>
                            <input type={hide} placeholder="password" name='password' className="input input-bordered text-black font-medium bg-opacity-85" required />
                            <h1 onClick={hideHandle} className='absolute right-[3%] bottom-[18%] cursor-pointer text-black opacity-85'>{hidePoint ? <FaRegEyeSlash /> : <FaRegEye />}</h1>
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white font-semibold saira">Confirm Password</span>
                            </label>
                            <input name='confirmPassword' type={hide} placeholder="confirm password" className="input input-bordered text-black font-medium bg-opacity-85" required />
                            <h1 onClick={hideHandle} className='absolute right-[3%] bottom-[18%] cursor-pointer text-black opacity-85'>{hidePoint ? <FaRegEyeSlash /> : <FaRegEye />}</h1>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <label className="hover:text-white hover:underline cursor-pointer mt-2">
                            <Link to='/login' className="text-white saira font-medium">Already have an account? LogIn</Link>
                        </label>

                    </form>
                    <div className="flex w-4/5 mx-auto items-center py-2 space-x-1 saira">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-sm ">Register with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <div className='pb-6 mx-auto flex gap-3'>
                        <button onClick={googleHandle} className='btn p-2 w-12 h-auto rounded-full'>
                            <img src={google} alt="" />
                        </button>
                        <button onClick={GitHubHandle} className='btn p-2 w-12 h-auto rounded-full'>
                            <img src={github} alt="" />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;