import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Form = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        "service_8k3v3rq",
        "template_oimmya7",
        form.current,
        "t8LRQFWPKxLuCSsxP"
      )
      .then(
        (result) => {
          setIsLoading(false);
          setStatusMessage("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          setIsLoading(false);
          setStatusMessage("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="border-b pb-10 items-center border-neutral-900">
      <h1 className="text-4xl text-center font-semibold py-4">Contact Form</h1>
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-1 items-center justify-center pb-20">
          <div className="text-center tracking-tighter">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="mx-20"
            >
              1111 Main Street,Wayne,Ne
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="my-4"
            >
              <a href="tel:+13194090805" className="no-underline">
                (319) 409- 0805
              </a>
            </motion.p>
            <motion.a
              href="mailto:confidenceaffang@gmail.com"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1.8 }}
              className="border-b  border-neutral-900 my-4 block no-underline"
            >
              confidenceaffang@gmail.com
            </motion.a>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <form ref={form} onSubmit={sendEmail} className="w-full max-w-md">
            <div className="flex flex-col my-5">
              <label className="text-xl py-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="border border-neutral-900 p-2 rounded-md text-black"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="flex flex-col my-5">
              <label className="text-xl py-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="border border-neutral-900 p-2 rounded-md text-black"
                placeholder="Enter your email"
                required
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              />
            </div>

            <div className="flex flex-col my-5">
              <label className="text-xl py-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="border border-neutral-900 p-2 rounded-md text-black"
                rows="4"
                placeholder="Write your message here"
                required
              />
            </div>

            {statusMessage && (
              <div className="text-center mt-4">
                <p
                  className={`text-lg ${
                    statusMessage.includes("successfully")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {statusMessage}
                </p>
              </div>
            )}

            <div className="text-center mt-10">
              <button
                className="bg-neutral-900 text-white px-4 py-2 rounded-md"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
