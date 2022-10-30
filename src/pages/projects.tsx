import React, {FC} from 'react';
import NavBar from '../components/navbar';
import '../styles/projects.css';

const Projects: FC = () => {
    return(
        <div className='projects'>
            <div className='projects-title'>
                <h1>My Projects</h1>
            </div>
            <div>
            <NavBar/>
            </div>
        </div>
    )
};

export default Projects;