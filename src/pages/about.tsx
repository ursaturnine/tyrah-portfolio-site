import React, {FC} from 'react';
import NavBar from '../components/navbar';
import '../styles/About.css';

interface AboutProps {
    title?: string
}

const About: FC<AboutProps> = ({title}) => {
    return (
        <div className='About'>
            <div className='about-flex'>
                <div>
                    <NavBar/>
                </div>
                <div className='inner-about-1'>
                    <h1>{title}</h1>
                </div>
            </div>
            <div className='about-sections'>
                <section className='about-section-1'>
                    <p className='about-section-1-text-1'>Get To Know Me</p>
                    <p className='about-section-1-text-2'>Image</p>
                </section>
                <section className='about-section-2'>
                    <p>Tooling</p>
                </section>
                <section className='about-section-3'>
                    <p>Quote</p>
                </section>
            </div>
        </div>
    )
};

export default About;