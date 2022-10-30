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
                <div className='home-flex-3'>
                    <p className='home-text-1'>Tyrah D. Gullette, Software Engineering Intern @ Salesforce</p>
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
            <section className='section-1'>
                <div>
                    <p className='home-text-4'> Tell Me where</p>
                    <p className='project-1-text-1'>Description</p>
                    <p className='project-1-text-2'>Image</p>
                    <p className='project-1-text-3'>Link</p>
                </div>
            </section>
            <section className='section-2'>
                <div>
                    <p className='home-text-5'> Viewing Party </p>
                    <p>Description</p>
                    <p>Image</p>
                    <p>Link</p>
                </div>
            </section>
            <section className='section-3'>
                <div>
                    <p className='home-text-6'> Inspiration Board </p>
                    <p>Description</p>
                    <p>Image</p>
                    <p>Link</p>
                </div>
            </section>
        </div>
    )
};

export default Home;