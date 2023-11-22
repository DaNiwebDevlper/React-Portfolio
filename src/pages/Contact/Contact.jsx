import { AiOutlineSend } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi"
import { ImLocation } from "react-icons/im"
import { motion } from "framer-motion";
const Contact = () => {

  var imageStyle = {
    background:
      'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0)), url("/src/assets/bg-content6.svg") no-repeat',
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    backgroundPosition: "center",

    // Adjust the height as needed
  };

  return (
    <motion.div
    whileInView={{y:[100,0], opacity:[0,1]}}
    transition={{duration:[1]}}>
      <section className="text-gray-200 body-font relative object-fill" >
        <div className="container px-5 py-5 mx-auto" style={imageStyle}>
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 bg-gradient-to-r from-teal-700 to-teal-300 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed  text-lg text-white/60">
              To Hire me, please contact us.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-md pl-1 text-gray-300 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name..."
                    className="w-full bg-black/10 rounded border border-teal-500/30  focus:border-teal-500 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-md ml-1 text-gray-300 font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter the email"
                    className="w-full bg-black/10 rounded border border-teal-300/30 focus:border-teal-500 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-black/10 rounded border border-teal-500/40 focus:border-teal-500 h-32 text-base outline-none text-gray-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex items-center gap-1 mx-auto text-white bg-teal-600/60 border-0 py-2 px-5 focus:outline-none transition-all hover:bg-teal-600/80 rounded-md text-lg">
                  <AiOutlineSend /> Send
                </button>
              </div>
              <div className="flex flex-col justify-center items-center my-5 w-full text-lg pt-8 mt-8 border-t border-gray-200 text-center">
                <div className="flex gap-2 items-center text-teal-600/60 hover:text-teal-600 transition-all">
                  <BiMailSend className="text-2xl" />
                  <a className=" font-bold " href="https://mail.google.com" target="_blank">dnazir343@gmail.com</a>
                </div>
                <div className="text-[16px] gap-2 flex items-center">
                  <ImLocation className="text-2xl" />
                  <p className="leading-normal my-5">
                   From Pakistan, Live in Pakistan Punjab faisalabad
                  </p>
                </div>

                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact