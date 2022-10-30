import React, {FC} from 'react';
import NavBar from '../components/navbar';
import '../styles/projects.css';

interface ProjectsProps {
    title?: string
}
const Projects: FC<ProjectsProps> = ( {title}) => {
    return(
        <div className='projects'>
            <div className='projects-title'>
                <h1>{title}</h1>
            </div>
            <div>
            <NavBar/>
            </div>
        </div>
    )
};

export default Projects;