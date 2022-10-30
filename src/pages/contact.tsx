import React, {FC} from 'react';
import NavBar from '../components/navbar';
import '../styles/contact.css'

const Contact: FC = () => {
    return(
        <div className='contact'>
            <div className='contact-title'>
                <h1>Contact Tyrah</h1>
            </div>
            <div>
                <NavBar/>
            </div>
        </div>
    )
};

export default Contact;