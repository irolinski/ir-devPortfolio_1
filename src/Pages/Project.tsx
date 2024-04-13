import Accordion from "../Components/Accordion";

import { FaDesktop, FaGithub } from "react-icons/fa";



type projectPropTypes = {
    name: string,
    thumbnail_url: string,
    description: string,
    accordion_data: {question: string, answer: JSX.Element | string}[],
    github_url: string,
    live_url: string
}


export default function ProjectPage ({ name, thumbnail_url, description, accordion_data, github_url, live_url }:projectPropTypes) {
    return(
        <>
        <div className='section project'>
            <h3 className='text-center text-3xl pb-8'>{name}</h3>
            <img className="mx-auto" src={thumbnail_url} />
            <p className=' px-4 py-5 text-center'>{description}</p>
            <div className='px-4 pb-5'>
                <Accordion data={accordion_data} />
            </div>
            <div className='project-links flex justify-center pt-8'>
                <a className="m-4" href={github_url}> <FaGithub /> </a>
                <a className="m-4" href={live_url}> <FaDesktop />  </a>
            </div>
        </div>
      </>
    )
}