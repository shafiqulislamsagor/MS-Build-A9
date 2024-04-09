import { Link } from 'react-router-dom';
import '../fonts/fonts.css'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import google from '../assets/icons8-google.svg'
import github from '../assets/icons8-github.svg'
import RegisterAnimations from '../components/RegisterAnimation';
import { useForm } from "react-hook-form"
import { ContextRoutes } from '../context/ContextHooks';
import { toast } from 'react-toastify';

AOS.init();

const Register = () => {
    const contextInfo = useContext(ContextRoutes)
    const { registerHooks, logoutHooks, googleHooks } = contextInfo
    const [hidePoint, setHidePoint] = useState(true)
    const [hide, setHide] = useState('password')


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{6,}$/;


    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        const { name, email, password, confirmPassword } = data
        console.log(name, email, password, confirmPassword);
        if (password === confirmPassword) {
            registerHooks(email, password)
                .then(() => {
                    toast.success('seccess')
                    logoutHooks()
                })
                .catch(() => {
                    toast.error('error')
                })
            return
        }
        toast.error('mile nai password')
    }

    const googleHandle = () => {
        googleHooks()
            .then((current) => {
                toast.success('Account Create with google', current);
                logoutHooks()

            })
            .catch(() => {
                toast.error('not create a accounts')
            })
    }



    const hideHandle = () => {
        if (hidePoint) {
            setHide('text')
            setHidePoint(false)
            return
        }
        if (!hidePoint) {
            setHide('password')
            setHidePoint(true)
        }
    }

    return (
        <div className="hero mt-8 bg-transparent text-white w-full lg:w-4/5 mx-auto">
            <div className="hero-content w-auto flex-col gap-8 md:gap-0 lg:flex-row">
                <div data-aos="fade-right" className="text-center lg:text-left">
                    <RegisterAnimations />
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine" className="hidden lg:card shrink-0 w-full max-w-sm shadow-2xl bg-cyan-800 bg-opacity-30">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <span className="label-text text-3xl text-center text-white font-semibold saira">Register Now</span>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold saira">FullName</span>
                            </label>
                            <input {...register("name", { required: true, maxLength: 30 })} type="text" placeholder="Name" name='name' className="input input-bordered text-black font-medium bg-opacity-85" required />
                        </div>
                        {errors.name && <span className='text-red-500 saira text-sm font-bold'>maximum 30 charater</span>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold saira">Email</span>
                            </label>
                            <input {...register("email", { required: true, pattern: emailRegex })} type="email" placeholder="email" name='email' className="input input-bordered text-black font-medium bg-opacity-85" required />
                            {errors.email && <span className='text-red-500 saira text-sm font-bold'>This field is required</span>}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white font-semibold saira">Password</span>
                            </label>
                            <input {...register('password', { required: true, pattern: passwordRegex })} type={hide} placeholder="password" className="input input-bordered text-black font-medium bg-opacity-85" required />
                            <h1 onClick={hideHandle} className='absolute right-[3%] bottom-[18%] cursor-pointer text-black opacity-85'>{hidePoint ? <FaRegEyeSlash /> : <FaRegEye />}</h1>
                        </div>
                        {errors.password && <span className='text-red-500 saira text-sm font-bold'>please , this field provided strong password and minium 6 character</span>}
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white font-semibold saira">Confirm Password</span>
                            </label>
                            <input {...register('confirmPassword', { required: true })} name='confirmPassword' type={hide} placeholder="confirm password" className="input input-bordered text-black font-medium bg-opacity-85" required />
                            <h1 onClick={hideHandle} className='absolute right-[3%] bottom-[18%] cursor-pointer text-black opacity-85'>{hidePoint ? <FaRegEyeSlash /> : <FaRegEye />}</h1>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <label className="hover:text-white hover:underline cursor-pointer mt-2">
                            <Link to='/login' className="text-white saira font-medium">Already have an account? LogIn</Link>
                        </label>

                    </form>
                    <div className='pb-6 mx-auto flex gap-3'>
                        <button onClick={googleHandle} className='btn p-2 w-12 h-auto rounded-full'>
                            <img src={google} alt="" />
                        </button>
                        <button className='btn p-2 w-12 h-auto rounded-full'>
                            <img src={github} alt="" />
                        </button>

                    </div>
                </div>
                <div data-aos="fade-left"
                    className="lg:hidden card shrink-0 w-full max-w-sm shadow-2xl bg-cyan-800 bg-opacity-30">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <span className="label-text text-3xl text-center text-white font-semibold saira">Register Now</span>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold saira">FullName</span>
                            </label>
                            <input {...register("name", { required: true, maxLength: 30 })} type="text" placeholder="Name" name='name' className="input input-bordered text-black font-medium bg-opacity-85" required />
                        </div>
                        {errors.name && <span className='text-red-500 saira text-sm font-bold'>maximum 30 charater</span>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-semibold saira">Email</span>
                            </label>
                            <input {...register("email", { required: true, pattern: emailRegex })} type="email" placeholder="email" name='email' className="input input-bordered text-black font-medium bg-opacity-85" required />
                            {errors.email && <span className='text-red-500 saira text-sm font-bold'>This field is required</span>}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white font-semibold saira">Password</span>
                            </label>
                            <input {...register('password', { required: true, pattern: passwordRegex })} type={hide} placeholder="password" className="input input-bordered text-black font-medium bg-opacity-85" required />
                            <h1 onClick={hideHandle} className='absolute right-[3%] bottom-[18%] cursor-pointer text-black opacity-85'>{hidePoint ? <FaRegEyeSlash /> : <FaRegEye />}</h1>
                        </div>
                        {errors.password && <span className='text-red-500 saira text-sm font-bold'>please , this field provided strong password and minium 6 character</span>}
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white font-semibold saira">Confirm Password</span>
                            </label>
                            <input {...register('confirmPassword', { required: true })} name='confirmPassword' type={hide} placeholder="confirm password" className="input input-bordered text-black font-medium bg-opacity-85" required />
                            <h1 onClick={hideHandle} className='absolute right-[3%] bottom-[18%] cursor-pointer text-black opacity-85'>{hidePoint ? <FaRegEyeSlash /> : <FaRegEye />}</h1>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <label className="hover:text-white hover:underline cursor-pointer mt-2">
                            <Link to='/login' className="text-white saira font-medium">Already have an account? LogIn</Link>
                        </label>

                    </form>
                    <div className='pb-6 mx-auto flex gap-3'>
                        <button onClick={googleHandle} className='btn p-2 w-12 h-auto rounded-full'>
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

export default Register;