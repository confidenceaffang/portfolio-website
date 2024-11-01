import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'


const Form = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8k3v3rq', 'template_oimmya7', form.current, 't8LRQFWPKxLuCSsxP')
        e.target.reset()
    }
    return (
        <div className="border-b pb-10 items-center border-neutral-900">
            <h1 className="text-4xl text-center font-semibold">
                Contact Form
            </h1>
            
            <form ref={form} onSubmit={sendEmail}>

                <div className="flex flex-col my-5 lg:justify-center">
                    <label className="text-xl py-2" htmlFor="name">Name</label>
                    <input
                        id="name"
                        name ='name'
                        type="text"
                        className="border border-neutral-900 p-2 rounded-md text-black lg:w-3/4"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="flex flex-col my-5 lg:justify-center">
                    <label className="text-xl py-2" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name='email'
                        className="border border-neutral-900 p-2 rounded-md text-black lg:w-3/4"
                        placeholder="Enter your email"
                    />
                </div>

            
                <div className="flex flex-col my-5 lg:justify-center">
                    <label className="text-xl py-2" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name='message'
                        className="border border-neutral-900 p-2 rounded-md text-black lg:w-3/4"
                        rows="4"
                        placeholder="Write your message here"
                    />
                </div>


                <div className="text-center mt-10" >
                    <button className="bg-neutral-900 text-white px-4 py-2 rounded-md">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
