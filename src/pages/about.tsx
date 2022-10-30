import React, {FC} from 'react';
import NavBar from '../components/navbar';
import '../styles/About.css';

//add inteface for props here

interface AboutProps {
    title?: string
}

const About: FC<AboutProps> = ({title}) => {
    return (
        <div className='About'>
            <div className='right-container'>
                <h1>{title}</h1>
            </div>
            <div>
                <NavBar/>
            </div>
        </div>
    )
};

export default About;