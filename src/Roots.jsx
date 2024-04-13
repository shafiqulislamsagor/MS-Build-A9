import { Helmet } from 'react-helmet-async';
import Navber from './components/Navber';
import SubHeading from './components/SubHeading';
import './index.css'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ContextRoutes } from './context/ContextHooks';
import Footer from './components/Footer';
import LoaderAnimation from './components/LoaderAnimation';

const Roots = () => {
    const [path, setPath] = useState('HOME')
    const location = useLocation()
    const pathName = location.pathname.replaceAll('/', '').toUpperCase()
    const { loading } = useContext(ContextRoutes)
    useEffect(() => {
        if (pathName) {
            setPath(pathName)
        }
        if (!pathName) {
            setPath('HOME')
        }
    }, [pathName])


    // console.log(loading);
    return (
        <div className='bgImg min-h-screen h-full '>
            <Helmet>
                <title>{path} || MS Build</title>
            </Helmet>

            {
                loading ? <div className='flex flex-col min-h-screen'>
                    <div className='flex-grow'>
                        <div className='bg-sky-900'>
                            <SubHeading />
                        </div>
                        <Navber />
                        <Outlet />
                    </div>
                    <Footer />
                </div> : <div className='flex justify-center items-center h-screen'><LoaderAnimation /></div>
            }


        </div>
    );
};

export default Roots;