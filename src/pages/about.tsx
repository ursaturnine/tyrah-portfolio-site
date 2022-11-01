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
                <div>
                    <h1>"See You Space Cowgirl, Someday, Somewhere!"</h1>
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
                        <p className='about-section-1-text-1'>I'm a software developer of four years and deferred cybersecurity major with a proclivity toward backend and cloud technologies. I'm recognized
                        as a highly curious, quick studied and researched engineer. I'm experienced in working in interoperable teams in fast-paced environments within budget constraints on enterprise-level software. I place heavy emphasis
                        on custom, scalable logic and iterative development. </p>
                        <p className='about-section-1-text-2'>I'm currently a software engineering intern at Salesforce Tableau on the Visibility and Interactivity team.
                        I'm writing code on a project developed to provide an adaptive and creative way to render new Tableau visualizations to satisfy and delight our customers.</p>
                        <p className='about-section-1-text-3'>I love exploring new technologies and starting new projects in my free-time; check out my Works In Progress page to view what I'm designing now. I'm also a huge reader, alternative R&B listener, cook, and anime nerd. </p>
                    </div>
                </section>
                <section className='about-section-2'>
                    <div>
                        <p>Tooling</p>
                    </div>
                </section>
                <section className='about-section-3'>
                    <div>
                        <p>"In the end, the shape and form  don't matter at all. It's only the soul that matters, right? Nothing else."</p>
                        <i>-Soul Eater Evans</i>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default About;