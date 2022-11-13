import React, {FC} from 'react';
import NavBar from '../components/navbar';
import '../styles/contact.css'
import Footer from '../components/footer';

interface ContactProps {
    title?: string
}
const Contact: FC<ContactProps> = ({title}) => {
    return(
        <div className='contact'>
            <div className='contact-grid'>
                <div className='contact-nav'>
                    <NavBar/>
                </div>
                <div className='contact-title'>
                    <h1>{title}</h1>
                </div>
                <div className='contact-header-text'>
                    <h1>Let's Connect!</h1>
                </div>
            </div>
            <div className='contact-sections'>
                <section className='contact-section-1'>
                    <a className='contact-section-2' target='_blank' rel='noreferrer' href='https://github.com/ursaturnine'>
                        <img src={require('../images/github.png')} alt='' width={250} height={250}/>
                    </a>
                    <a className='contact-section-3'  target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/tyrahgullette/'>
                        <img src={require('../images/linkedin.png')} alt='' width={250} height={250}/>
                    </a>
                    <a className='contact-section-4'  target='_blank' rel='noreferrer' href='https://twitter.com/cloudtyrah'>
                        <img src={require('../images/twitter.png')} alt='' width={250} height={250}/>
                    </a>
                    <a className='contact-section-5'  target='_blank' rel='noreferrer' href='mailto:tyrah96@gmail.com'>
                    <img src={require('../images/email.png')} alt='' width={250} height={250}/>
                    </a>
                </section>
            </div>
            <Footer/>
        </div>
    )
};

export default Contact;