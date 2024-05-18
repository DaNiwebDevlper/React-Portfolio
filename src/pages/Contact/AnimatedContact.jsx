import { useState } from 'react';
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const AnimatedContact = () => {

    const openGmail = () => {
        window.location.href = `mailto:dnazir343@gmail.com`;
    };

    ////////////////---Web3form-start---////////////////////

    const [success, setSuccess] = useState(false);

    const Ref = useRef();

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "c5337b27-2f6e-4409-9479-10dc437b88aa");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            setSuccess("Success", res);
        }
    };


    ///////////---Web3Form-end---//////////////

    const isInView = useInView(Ref, { margin: "-100px" })
    return (
        <>
            <motion.div
                className="min-h-[90vh] flex md:flex-row md:w-[90%]  flex-col-reverse"
            >
                {/* //////////////////////---Cotact-Info---/////////////////////// */}
                <div className="md:w-[50%] md:ml-11 md:pt-0 pt-6 md:mb-0 mb-9 flex flex-col pl-9 justify-center  gap-5">
                    <motion.h1 className='text-white font-bold md:text-4xl text-3xl italic font-madimi'
                        whileInView={{ y: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: [1] }}>Lets Work Together</motion.h1>
                    <motion.div whileInView={{ y: [70, 0], opacity: [0, 1] }}
                        transition={{ duration: [1.2] }} >

                        <h2 className='md:text-2xl text-xl text-white font-semibold'>Mail</h2>

                        <p onClick={openGmail} className=" text-white hover:text-white/60 hover:underline md:text-xl text-md cursor-pointer">

                            dnazir343@gmail.com
                        </p>
                    </motion.div>


                    <motion.div whileInView={{ y: [70, 0], opacity: [0, 1] }}
                        transition={{ duration: [1.4] }}>

                        <Link to="https://linkedin.com/in/danish-nazir-553310272" target='_blank'
                        >
                            <h2 className='md:text-2xl text-xl text-white font-semibold'>LinkedIn</h2>
                            <span className='text-sky-500 font-semibold'>LinkedIn Profile :</span>
                            <span className='hover:underline text-white'>
                                Danish Nazir
                            </span>
                        </Link>
                    </motion.div>
                    <motion.div whileInView={{ y: [70, 0], opacity: [0, 1] }}
                        transition={{ duration: [1.6] }}>

                        <Link to="https://www.upwork.com/workwith/danig6" target='_blank'>
                            <h2 className='md:text-2xl text-xl text-white font-semibold'>UpWork</h2>
                            <span className='text-green-500 font-semibold'>Upwork Profile :</span>
                            <span className='hover:underline text-white'>
                                Danish Nazir
                            </span>
                            <p className="text-white hover:text-white/60  md:text-xl text-md cursor-pointer">

                            </p>
                        </Link>
                    </motion.div>


                </div>
                {/* //////////////////////---Cotact-Form---/////////////////////// */}
                <div className="text-center flex flex-col justify-center items-center md:h-auto min-h-[90vh]" ref={Ref}>
                    <motion.div className=" relative "
                        whileInView={{ opacity: 0 }}
                        initial={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 3 }}
                    >

                        <svg className='absolute left-[-160px] top-[100px] md:top-[-10px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] stroke-teal-600' width="400px" height="400px" viewBox="0 0 32 32" >

                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={isInView && { pathLength: 1 }}
                                transition={{ duration: 9 }}
                                className="fill-none"
                                d="M18.037 6.635c-0.011-0.001-0.023-0.001-0.035-0.001-0.414 0-0.75 0.336-0.75 0.75 0 0.399 0.312 0.726 0.706 0.749l0.002 0c3.533 0.231 6.311 3.153 6.311 6.723 0 0.186-0.008 0.37-0.022 0.552l0.002-0.024c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0c0.009-0.143 0.014-0.31 0.014-0.479 0-4.38-3.397-7.967-7.7-8.269l-0.026-0.001zM17.963 2.749c0.449 0.022 10.998 0.688 10.998 12.635 0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0c0.015-0.238 0.024-0.515 0.024-0.795 0-7.059-5.471-12.841-12.405-13.335l-0.043-0.002c-0.009-0-0.019-0.001-0.029-0.001-0.403 0-0.732 0.314-0.757 0.71l-0 0.002c-0.001 0.011-0.001 0.024-0.001 0.037 0 0.401 0.315 0.729 0.711 0.749l0.002 0zM30.637 23.15c-0.109-0.675-0.334-1.281-0.654-1.823l0.013 0.024c-0.114-0.186-0.301-0.317-0.521-0.353l-0.004-0.001-8.969-1.424c-0.035-0.006-0.076-0.009-0.117-0.009-0.207 0-0.395 0.083-0.531 0.218l0-0c-0.676 0.68-1.194 1.516-1.496 2.451l-0.012 0.044c-4.016-1.64-7.141-4.765-8.742-8.675l-0.038-0.105c0.978-0.314 1.814-0.833 2.493-1.509l-0 0c0.136-0.136 0.22-0.324 0.22-0.531 0-0.041-0.003-0.081-0.010-0.12l0.001 0.004-1.425-8.969c-0.036-0.224-0.167-0.412-0.35-0.524l-0.003-0.002c-0.505-0.301-1.094-0.522-1.724-0.626l-0.029-0.004c-0.315-0.070-0.677-0.111-1.048-0.111-0.025 0-0.050 0-0.075 0.001l0.004-0h-0.006c-3.497 0.024-6.326 2.855-6.347 6.351v0.002c0.015 12.761 10.355 23.102 23.115 23.117h0.002c3.5-0.023 6.331-2.854 6.354-6.351v-0.002c0-0.020 0-0.044 0-0.068 0-0.356-0.036-0.703-0.106-1.038l0.006 0.033zM24.383 29.076c-11.933-0.014-21.602-9.684-21.616-21.616v-0.001c0.019-2.673 2.182-4.835 4.854-4.853h0.002c0.016-0 0.036-0 0.055-0 0.272 0 0.537 0.030 0.793 0.086l-0.024-0.005c0.366 0.060 0.695 0.161 1.003 0.3l-0.025-0.010 1.302 8.202c-0.628 0.528-1.404 0.901-2.257 1.050l-0.029 0.004c-0.355 0.064-0.62 0.37-0.62 0.739 0 0.088 0.015 0.172 0.043 0.25l-0.002-0.005c1.772 5.072 5.695 8.994 10.646 10.729l0.121 0.037c0.073 0.026 0.157 0.041 0.245 0.041 0.368 0 0.674-0.265 0.737-0.615l0.001-0.005c0.153-0.882 0.526-1.658 1.061-2.295l-0.006 0.007 8.201 1.303c0.133 0.294 0.237 0.636 0.296 0.994l0.003 0.024c0.046 0.219 0.073 0.471 0.073 0.729 0 0.018-0 0.035-0 0.053l0-0.003c-0.016 2.675-2.179 4.84-4.852 4.859h-0.002z"></motion.path>
                        </svg>


                    </motion.div>

                    <motion.div className="z-10"
                        whileInView={{ opacity: 1, y: [100, 0] }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1, delay: 4 }}>

                        <form onSubmit={onSubmit}>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                className=" w-[80%] bg-black/10 rounded border border-teal-500/30  focus:border-teal-500 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-3"
                                required={true}
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="email@gmail.com"
                                className=" w-[80%] bg-black/10 rounded border border-teal-500/30  focus:border-teal-500 text-base outline-none my-5 text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                required={true}
                            />

                            <textarea
                                id="message"
                                name="message"
                                placeholder='Message'
                                className="w-[80%] bg-black/10 rounded border border-teal-500/40 focus:border-teal-500 h-32 text-base outline-none text-gray-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>


                            <button className='bg-teal-600 hover:bg-teal-700 text-white py-2 w-[80%] rounded md:text-xl text-lg my-5 text-center' type='submit' >Submit</button>
                            <p className='text-xl text-green-500 uppercase'>{success && "Message is Send Succesfully"}</p>

                        </form>

                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

export default AnimatedContact