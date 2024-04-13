import ContactAnimation from "./ContactAnimation";


const Contact = () => {
    return (
        <div data-aos="fade-up-left" className="grid mb-8 grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 w-11/12 lg:w-5/6 xl:px-32 bg-cyan-900 bg-opacity-60 text-gray-100">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let&lsquo;s Gooo!</h2>
                    <div className="text-gray-400">Contact ours team members.</div>
                </div>
                <ContactAnimation/>
            </div>
            <form onSubmit={e => e.preventDefault()} className="space-y-6">
                <div>
                    <label htmlFor="name" className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="Your Full Name" className="w-full p-3 rounded bg-gray-100 text-black" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input id="email" type="email" placeholder="Your Email Address" className="w-full p-3 rounded bg-gray-100 text-black" />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">Message</label>
                    <textarea id="message" placeholder="Massages" rows="3" className="w-full p-3 rounded bg-gray-100 text-black"></textarea>
                </div>
                <button type="submit" className="btn w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;