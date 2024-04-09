import { Link } from 'react-router-dom';
import '../fonts/fonts.css'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Animation from '../components/Animation';
import google from '../assets/icons8-google.svg'
import github from '../assets/icons8-github.svg'

AOS.init();

const Login = () => {
    const [hidePoint, setHidePoint] = useState(true)
    const [hide, setHide] = useState('password')
    const formHandle = e => {
        e.preventDefault()

    }
    const hideHandle = () => {
        if (hidePoint) {
            setHide('text')
            setHidePoint(false)
            console.log('nai');
            return
        }
        if (!hidePoint) {
            setHide('password')
            setHidePoint(true)
            console.log('object');
        }
    }
    return (
        <div className="hero mt-8 bg-transparent text-white w-full lg:w-4/5 mx-auto">
            <div className="hero-content w-auto flex-col lg:flex-row">
                <div data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    className="text-center lg:text-left">
                    <Animation />
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine" className="hidden lg:card shrink-0 w-full max-w-sm shadow-2xl bg-cyan-800 bg-opacity-30">
                    <form onSubmit={formHandle} className="card-body">
                        <span className="label-text text-3xl text-center text-white font-semibold saira">Log In</span>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold saira">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered text-black font-medium bg-opacity-85" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white font-semibold saira">Password</span>
                            </label>
                            <input type={hide} placeholder="password" className="input input-bordered text-black font-medium bg-opacity-85" required />
                            <h1 onClick={hideHandle} className='absolute right-[3%] bottom-[40%] cursor-pointer text-black opacity-85'>{hidePoint ? <FaRegEyeSlash /> : <FaRegEye />}</h1>
                            <label className="hover:text-white hover:underline cursor-pointer mt-2">
                                <a className="text-white saira font-medium">Forgot password ?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="hover:text-white hover:underline cursor-pointer mt-2">
                            <Link to='/register' className="text-white saira font-medium">Don&#39;t have an account? Register</Link>
                        </label>

                    </form>
                    <div className='pb-6 mx-auto flex gap-3'>
                        <button className='btn p-2 w-12 h-auto rounded-full'>
                            <img src={google} alt="" />
                        </button>
                        <button className='btn p-2 w-12 h-auto rounded-full'>
                            <img src={github} alt="" />
                        </button>

                    </div>
                </div>
                <div  className="lg:hidden card shrink-0 w-full max-w-sm shadow-2xl bg-cyan-800 bg-opacity-30">
                    <form onSubmit={formHandle} className="card-body">
                        <span className="label-text text-3xl text-center text-white font-semibold saira">Log In</span>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold saira">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered text-black font-medium bg-opacity-85" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white font-semibold saira">Password</span>
                            </label>
                            <input type={hide} placeholder="password" className="input input-bordered text-black font-medium bg-opacity-85" required />
                            <h1 onClick={hideHandle} className='absolute right-[3%] bottom-[40%] cursor-pointer text-black opacity-85'>{hidePoint ? <FaRegEyeSlash /> : <FaRegEye />}</h1>
                            <label className="hover:text-white hover:underline cursor-pointer mt-2">
                                <a className="text-white saira font-medium">Forgot password ?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="hover:text-white hover:underline cursor-pointer mt-2">
                            <Link to='/register' className="text-white saira font-medium">Don&#39;t have an account? Register</Link>
                        </label>

                    </form>
                    <div className='pb-6 mx-auto flex gap-3'>
                        <button className='btn p-2 w-12 h-auto rounded-full'>
                            <img src={google} alt="" />
                        </button>
                        <button className='btn p-2 w-12 h-auto rounded-full'>
                            <img src={github} alt="" />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;