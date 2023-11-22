import React from 'react'
import { useParams } from 'react-router-dom'
import projects from "../../data/Projects.json"


const ProjectDetail = () => {
    const param = useParams();

    return (
        <div className="">
            {projects.map((project, i) => {
                return (
                    (param.id === project.id) ? (
                        <div className="min-h-screen flex flex-col justify-center items-center ">
                            <div key={i} className=" w-[80%]">
                                <div className="py-4">
                                    <h1 className="font-bold text-teal-600 md:text-3xl py-5 text-3xl">
                                        Project:{" "}
                                        <span
                                            className="font-semibold text-slate-200 md:text-3xl text-2xl
                  "
                                        >
                                            {project.title}
                                        </span>
                                    </h1>

                                    <h1 className="font-bold text-teal-600 md:text-2xl text-xl">
                                        Detail of Event:{" "}
                                        <span className="font-normal text-slate-200 md:text-[18px] text-sm">
                                            {project.description}
                                        </span>
                                    </h1>
                                </div>

                                <div className="image-gallery">
                                    {/* Map over the fetched images and display them */}
                                    {project.images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="w-full border border-teal-600 my-5  overflow-auto p-2"
                                        >
                                            <img
                                                src={image}
                                                className="w-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : <h1>Projects Details in not provide</h1>
                )
            })}
        </div>


    );
}
export default ProjectDetail