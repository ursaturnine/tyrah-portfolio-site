import React, {FC} from 'react';
import NavBar from '../components/navbar';
import '../styles/About.css';

//add inteface for props here

const About: FC = () => {
    return (
        <div className='About'>
            <div className='right-container'>
                <h1>About Tyrah</h1>
            </div>
            <div>
                <NavBar/>
            </div>
        </div>
    )
};

export default About;