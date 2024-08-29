import { AiFillGithub } from "react-icons/ai";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3D-Card";
import { Link } from "react-router-dom";

const Card = ({ imgUrl, title, liveLink, GithubLink, id }) => {
    return (
        <CardContainer className="inter-var w-[300px] h-fit">
            <CardBody className="bg-sec-color relative group/card border-black/20 rounded-xl border  hover:border-teal-500/50 flex flex-col items-center h-fit gap-y-3 overflow-hidden hover:overflow-visible p-3">

                {/* /////////---Card-Image---///////// */}
                <CardItem
                    translateZ="50"
                    className="w-full"
                >

                    <Link to={"/projects/" + id}>
                        <img src={imgUrl} className='w-full h-[180px] object-cover rounded-md' /></Link>

                </CardItem>
                {/* ////////////---Card-Title//////// */}
                <CardItem
                    as="p"
                    translateZ="100"
                >
                    <h1 className='text-white/90 font-bold text-center py-3 text-2xl capitalize font-madimi'>{title}</h1>
                </CardItem>

                {/* ////////////////---Card-Buttons---///////////// */}
                <CardItem translateZ="80" className="flex justify-between px-5 items-center  border rounded-full mx-3 hover:border-teal-500 transition border-white/10 w-[90%] mb-6">


                    <Link to={liveLink} target='_blank'>
                        <button className='p-2 rounded-md text-sm text-white  w-fit hover:underline cursor-pointer'>Live demo
                        </button>
                    </Link>

                    <Link to={GithubLink} target='_blank'>
                        <button className='py-2 px-6 rounded-md text-sm text-white  ml-3 w-fit hover:underline cursor-pointer'><AiFillGithub className='text-2xl' />
                        </button>
                    </Link>

                </CardItem>

            </CardBody>
        </CardContainer>
    )
}

export default Card