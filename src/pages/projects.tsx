import React, {FC} from 'react';
import NavBar from '../components/navbar';
import '../styles/projects.css';

interface ProjectsProps {
    title?: string
}
const Projects: FC<ProjectsProps> = ( {title}) => {
    return(
        <div className='projects'>
            <div className='projects-flex'>
                <div>
                    <NavBar/>
                </div>
                <div className='projects-title'>
                    <h1>{title}</h1>
                </div>
                <div className='projects-text-container'>
                    <h1 className='projects-text'>Projects Loading...</h1>
                </div>
            </div>
            
            <div className='projects-sections'>
                <section className='projects-section-1'>
                    <p className='projects-section-1-text-1'> Girls Code Club: Interactive Code Notebook</p>
                    <p className='projects-section-1-text-2'>An interactive code notebook designed with the girlie, urban coder in mind.
                    Spin up via it's own command line tool, user writes code snippets in any language and the integrated ESBuild bundler and custom plugin will run it.
                    The code saves into it's own editor when transpiled, so user can export and share.</p>
                    <p className='projects-section-1-text-3'> Technologies: React, JSX, TypeScript, ESbuild</p>
                    <a className='projects-section-1-text-4' target='_blank' rel='noreferrer' href='https://github.com/ursaturnine/gccbook'>View in GitHub</a>
                    <img className='projects-section-1-img-1'src={require('../images/gcc.png')} alt='' width={250} height={250}/>
                </section>
                <section className='projects-section-2'>
                    <p className='projects-section-2-text-1'>Personal Portfolio</p>
                    <p className='projects-section-2-text-2'>This! This personal porfolio page is a work in progress.</p>
                    <p className='projects-section-2-text-3'>Technologies: React, TypeScript, JSX</p>
                    <a className='projects-section-2-text-4' target='_blank' rel='noreferrer' href='https://github.com/ursaturnine/tyrah-portfolio-site'>View in GitHub</a>
                    <img className='projects-section-2-img-1'src={require('../images/me-no-glitter.png')} alt='' width={250} height={250}/>
                </section>
            </div>

        </div>
    )
};

export default Projects;