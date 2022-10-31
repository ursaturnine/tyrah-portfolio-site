import React, {FC} from 'react';
import NavBar from '../components/navbar';
import '../styles/home.css';
import PageSection from '../components/pagesection'

interface HomeProps {
    title?: string
}
const Home: FC<HomeProps> = ({title}) => {
    return(
        <div className='home-flex'>
            <div className='home-flex-1'> 
                <div>
                    <NavBar/>
                </div>
                <div className='home-flex-2'>
                    <h1>{title}</h1>
                </div> 
                <div className='home-flex-4add'>
                    <img src={require('../images/uranus.png')} alt='uranus' width={280} height={300}/> 
                </div>
                <div className='home-flex-3'>
                    <p className='home-text-1'>Tyrah D. Gullette, Software Engineering Intern @ Salesforce</p>
                </div>
                <div className='home-flex-2add'>
                    <img src={require('../images/home-logo-purple.png')} alt='tech logo' width={300} height={300}/>
                </div>
                <div className='home-flex-3add'>
                    <p className='home-text-1add'>Hello,</p>
                </div>
                <div className='home-flex-4'>
                    <p className='home-text-2'>I’m Tyrah, a software engineer. I build performant and scalable software using forward-thinking methods.</p>
                </div>
                <div className='home-flex-5'>
                    <p className='home-text-3'>Adventurous Tech developer &
Inquisitive Code Weaver
Raised in the Y2K era of tech optimism.</p>
                </div>
            </div>
            <div className='sections'>
                <section className='section-1'>
                    <div>
                        <p className='home-text-4'> Tell Me where</p>
                        <p className='project-1-text-1'>Description</p>
                        <p className='project-1-text-2'>Image</p>
                        <a className='project-1-text-3' target='_blank' rel='noreferrer' href='https://github.com/ursaturnine/tell-me-where-app'>View in Github</a>
                    </div>
                </section>
                <section className='section-2'>
                    <div>
                        <p className='home-text-5'> Viewing Party </p>
                        <p className='project-2-text-1'>Description</p>
                        <p className='project-2-text-2'>Image</p>
                        <a className='project-2-text-3' target='_blank' href='https://github.com/ursaturnine/viewing-party' rel='noreferrer'>View in Github</a>
                    </div>
                </section>
                <section className='section-3'>
                    <div>
                        <p className='home-text-6'> Inspiration Board </p>
                        <p className='project-3-text-1'>Description</p>
                        <p className='project-3-text-2'>Image</p>
                        <a className='project-3-text-3' target='_blank' href='https://github.com/ursaturnine/inspo-board-front' rel='noreferrer'>View in Github</a>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default Home;