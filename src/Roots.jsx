import { Helmet } from 'react-helmet-async';
import Navber from './components/Navber';
import SubHeading from './components/SubHeading';
import './index.css'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Roots = () => {
    const [path, setPath] = useState('HOME')
    const location = useLocation()
    const pathName = location.pathname.replace('/', '').toUpperCase()
    useEffect(() => {
        if (pathName) {
            setPath(pathName)
        }
        if (!pathName) {
            setPath('HOME')
        }
    }, [pathName])

    // console.log(path);
    return (
        <div className='bgImg min-h-screen h-full '>
            <Helmet>
                <title>{path} || MS Build</title>
            </Helmet>
            <SubHeading />
            <Navber />
            <Outlet />
        </div>
    );
};

export default Roots;