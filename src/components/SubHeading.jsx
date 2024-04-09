import './../fonts/fonts.css'
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

const SubHeading = () => {
    return (
        <div className="w-11/12 mx-auto textColor text-sm pb-2">
            <div className="flex  justify-between items-center pt-5 pb-2 px-2 lato font-light">
                <div className='flex flex-col lg:flex-row lg:gap-20'>
                    <h2 className='flex items-center gap-2'><SlLocationPin />2150-Nakla ,Sherpur,Mymensingh</h2>
                    <h2 className='flex items-center gap-2'><MdOutlineMail />shafiqulislamsagor277@gmail.com</h2>
                    <h2 className='flex items-center gap-2'><FaUserEdit/>Shafiqul Islam Sagor</h2>
                </div>
            </div>
            <div className="border-b mt-3 opacity-60"></div>
        </div>
    );
};

export default SubHeading;