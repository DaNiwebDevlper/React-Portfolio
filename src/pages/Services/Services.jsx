import { HoverEffect } from "../../components/ui/Card-Hover";
import { motion } from "framer-motion"
export const projects = [

    {
        title: "MERN STACK",
        description:
            "Mastering the MERN stack (MongoDB, Express.js, React, Node.js) to architect robust and scalable web applications. Leveraging the power of JavaScript across the entire development stack, I create dynamic and feature-rich solutions that drive business growth and enhance user experiences.",
        link: "https://netflix.com",
    },
    {
        title: "NextJS",
        description:
            "Proficient in harnessing the power of Next.js, a React framework, to build lightning-fast, SEO-friendly, and highly scalable web applications. With Next.js, I craft dynamic and immersive user experiences that elevate your online presence and deliver superior performance across devices.",
        link: "https://google.com",
    },
    {
        title: "React Native",
        description:
            "Expertise in React Native, enabling the creation of cross-platform mobile applications with a single codebase. Leveraging the power of React, I develop native-quality experiences for iOS and Android, ensuring seamless performance and user engagement across various devices.",
        link: "https://meta.com",
    },
    {
        title: "Frontend Development",
        description:
            "Specializing in frontend development using ReactJS, I craft dynamic and responsive user interfaces that enhance user experiences and drive engagement. With a focus on clean code and efficient design patterns, I bring your ideas to life with speed and precision, ensuring your web applications stand out in today's digital landscape.",
        link: "https://amazon.com",
    },
    {
        title: "Backend Development",
        description:
            "Expert in backend development using Node.js and Express.js, I build robust and scalable server-side solutions to power your web applications. With a focus on performance and security, I leverage the capabilities of Node.js and Express.js to deliver efficient APIs, authentication systems, and data management solutions, ensuring seamless functionality and reliability for your projects.",
        link: "https://microsoft.com",
    },
    {
        title: "Web Designing",
        description:
            "Crafting captivating digital experiences through innovative web design.I specialize in creating visually stunning websites that engage and inspire. Let's transform your online presence into a dynamic and impactful platform.",
        link: "https://stripe.com",
    },
];

const Services = () => {
    return (

        <div className="text-white">
            <h1 className="text-5xl font-madimi text-center  my-10">My Services</h1>
            <motion.div
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </motion.div>
        </div>
    );
}

export default Services

