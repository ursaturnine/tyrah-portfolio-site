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
                    <div>
                        <p className='about-section-1-text-1'>Get To Know Me/What I Offer As A Developer</p>
                    </div>
                </section>
                <section className='about-section-2'>
                    <div>
                        <p>Tooling</p>
                    </div>
                </section>
                <section className='about-section-3'>
                    <div>
                        <p>Quote</p>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default About;