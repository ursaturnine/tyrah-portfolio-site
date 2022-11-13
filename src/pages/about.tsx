import { url } from 'inspector';
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
                        <p className='about-section-1-text-1'>I'm a deferred cybersecurity major attending the Ada Developer's Academy for women and gender expansive
                        folx. I'll be graduating in cohort 17 in January 2023. As a first gen student and black woman in tech, nothing feels like a given and taking a year off from
                        a degree is a slippery slope. As an applied scientist and highly curious technologist, exploring my chosen field in the way which excites me most, through hands on experience,
                        is worth the chanciness. I'm hoping my non-linear path will scale to O(logn) instead O(n logn). 🤓 </p>
                        <p className='about-section-1-text-2'>I'm currently a software engineering intern at Tableau, a Salesforce company, on the Visibility and Interactivity team.
                        I'm writing code across a hybrid UI workspace to create complex data visualizations.</p>
                        <p className='about-section-1-text-3'>I love exploring new technologies and starting new projects in my free-time; check out my Works In Progress page to view what I'm designing now. I'm also a huge reader, alternative R&B listener, cook, and anime nerd. </p>
                    </div>
                </section>
                <section className='about-section-2'>
                    <div>
                        <p className='tooling-text'>Tooling</p>
                        <img src={require('../images/Python.png')} alt='python' width={250} height={250} className='tooling-pic-1'/>
                        <img src={require('../images/javascript.png')} alt='javascript' width={250} height={250} className='tooling-pic-2'/>
                        <img src={require('../images/react.png')} alt='react' width={250} height={250} className='tooling-pic-3'/>
                        <img src={require('../images/react-native.png')} alt='react native' width={250} height={250} className='tooling-pic-4'/>
                        <img src={require('../images/flask.png')} alt='flask' width={250} height={250} className='tooling-pic-5'/>
                        <img src={require('../images/typescript.png')} alt='typescript' width={250} height={250} className='tooling-pic-6'/>
                        <img src={require('../images/sql.png')} alt='sql' width={250} height={250} className='tooling-pic-7'/>
                        <img src={require('../images/csharp.png')} alt='csharp' width={250} height={250} className='tooling-pic-8'/>
                        {/* <img src={require('../images/')} alt='' width={250} height={250}/> */}
                        {/* <img src={require('../images/')} alt='' width={250} height={250}/> */}
                    </div>
                </section>
                <section className='about-section-3'>
                    <div>
                        <p className='about-section-3-text-1' >"In the end, the shape and form  don't matter at all. It's only the soul that matters, right? Nothing else."</p>
                        <i className='about-section-3-text-2'>-Soul Eater Evans</i>
                        <img className='quote-pic'src={require('../images/soul-search.png')} alt='soul-search' width={450} height={450}/>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default About;