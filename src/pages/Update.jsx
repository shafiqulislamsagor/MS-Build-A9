
import { toast } from "react-toastify";
import { useContext } from "react";
import { ContextRoutes } from './../context/ContextHooks';

const Update = () => {
    const ContextInfo = useContext(ContextRoutes)
    const {  updateProfiles, updateProfilesPhoto } = ContextInfo
    const fromHandle = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const url = e.target.url.value;
        // console.log(name , url);
        if (name || url || name && url) {
            if (name) {
                updateProfiles(name)
            }
            if (url) {
                updateProfilesPhoto(url)
            }

            toast.success('Profile Update')
        }
        else{
            toast.error('Given name or profile url')
        }
    }
    return (
        <div className="flex justify-center w-full lg:w-1/3 md:w-2/3 mx-auto my-14">
                <form onSubmit={fromHandle} className="card-body ">
                    <span className="label-text text-3xl text-center text-white font-semibold saira">Update Your Profile Now</span>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold saira">FullName</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered text-black font-medium bg-opacity-85" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold saira">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name='url' className="input input-bordered text-black font-medium bg-opacity-85" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Save</button>
                    </div>

                </form>
            </div>
    );
};

export default Update;