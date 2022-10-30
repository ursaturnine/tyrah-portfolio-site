import React, {FC} from 'react';
import NavBar from '../components/navbar';
import '../styles/contact.css'

interface ContactProps {
    title?: string
}
const Contact: FC<ContactProps> = ({title}) => {
    return(
        <div className='contact'>
            <div className='contact-title'>
                <h1>{title}</h1>
            </div>
            <div>
                <NavBar/>
            </div>
        </div>
    )
};

export default Contact;