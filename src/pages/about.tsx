import React, {FC} from 'react';
import NavBar from '../components/navbar';
import '../styles/About.css';



interface AboutProps {
    title?: string
}

const About: FC<AboutProps> = ({title}) => {
    return (
        <div className='about'>
            <div className='about-flex'>
                <div>
                    <NavBar/>
                </div>
                <div className='inner-about-1'>
                    <h1>{title}</h1>
                </div>
                <div className='about-pic-2'>
                    <img  src={require('../images/laptop-about.png')} alt='laptop' width={250} height={250}/>
                </div>
                <div className='about-pic-3'>
                    <img src={require('../images/cup-about.png')} alt='tea cup' width={250} height={250}/>
                </div>
                <div className='about-pic-4'>
                    <img src={require('../images/headphone-about.png')} alt='typing' width={250} height={250}/>
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