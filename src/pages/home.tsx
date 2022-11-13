import React, {FC} from 'react';
import NavBar from '../components/navbar';
import '../styles/home.css';
import PageSection from '../components/pagesection'
import Footer from '../components/footer'

interface HomeProps {
    title?: string
}
const Home: FC<HomeProps> = ({title}) => {
    return(
        <div className='home-flex'>
            <div className='home-flex-1'> 
                <div className='home-nav'>
                    <NavBar/>
                </div>
                <div className='home-flex-2'>
                    <h1>{title}</h1>
                </div> 
                <div className='home-flex-4add'>
                    <img src={require('../images/saturn.png')} alt='uranus' width={280} height={300}/> 
                </div>
                <div className='home-flex-3'>
                    <p className='home-text-1'>Tyrah D. Gullette, Software Engineering Intern @ Tableau, a Salesforce Company</p>
                </div>
                <div className='home-flex-2add'>
                    <img src={require('../images/home-logo-purple.png')} alt='tech logo' width={300} height={300}/>
                </div>
                <div className='home-flex-3add'>
                    <p className='home-text-1add'>Hello,</p>
                </div>
                <div className='home-flex-4'>
                    <p className='home-text-2'>I’m Tyrah, a software engineer. I build performant and scalable software using forward-thinking methods.</p>
                </div>
                <div className='home-flex-5'>
                    <p className='home-text-3'>Adventurous Tech developer &
Inquisitive Code Weaver
Raised in the Y2K era of tech optimism.</p>
                </div>
            </div>
            <div className='sections'>
                <section className='section-1'>
                    <div>
                        <p className='home-text-4'> Tell Me where</p>
                        <p className='project-1-text-1'>A mobile app for sharing restaurant recommendations with friends. The backend for Tell Me
                        Where was coded with Flask and the frontend uses the React Native framework. </p>
                        <p className='project-1-text-8'> Technologies: React Native, Python, Yelp API, Flask, SQLAlchemy, PSQL, Expo Go</p>
                        <img className='project-1-text-2' src={require('../images/search_by_city.jpg')} alt='figma prototype' width={400} height={400}/>
                        <i className='project-1-text-11'>Figma Design of Searching a Rec By a City</i>
                        <a className='project-1-text-3' target='_blank' rel='noreferrer' href='https://github.com/ursaturnine/tell-me-where-app'>View Frontend Code in Github</a>
                        <a className='project-1-text-10' target='_blank' rel='noreferrer' href='https://github.com/lili4x4/tell-me-where-backend'>View Backend Code in Github</a>
                    </div>
                </section>
                <section className='section-2'>
                    <div>
                        <p className='home-text-5'> Viewing Party </p>
                        <p className='project-2-text-1'>A mini project to create a recommendation based algorithm written in the Python language. </p>
                        <img className='project-2-text-2' src={require('../images/watch-party.png')} alt='pizza party' height={300} width={300}/>
                        <p className='project-2-text-5'>Technologies: Python, PyTest, Git</p>
                        <a className='project-2-text-3' target='_blank' href='https://github.com/ursaturnine/viewing-party' rel='noreferrer'>View in Github</a>
                    </div>
                </section>
                <section className='section-3'>
                    <div>
                        <p className='home-text-6'> Inspiration Board </p>
                        <p className='project-3-text-1'>A web app to create and organize inspiration boards and cards! Inspiration Board Features include, creating a board
                        via form submission, adding cards to a board via form submission, like a board or card and delete a board or card.</p>
                        <p className='project-3-text-7'>Technologies: React, Flask, Python, Framr Motion, SQLAlchemy, Heroku</p>
                        <img className='project-3-text-2' src={require('../images/inspo-board.png')} alt='inspo board' height={300} width={300}/>
                        <i className='project-3-text-6'>Inspiration Board Website</i>
                        <a className='project-3-text-3' target='_blank' href='https://orange-purple.herokuapp.com/' rel='noreferrer'>orange-purple.herokuapp.com</a>
                        <a className='project-3-text-4' target='_blank' href='https://github.com/ursaturnine/inspo-board-front' rel='noreferrer'>View Frontend Code in Github</a>
                        <a className='project-3-text-5' target='_blank' href='https://github.com/cathos/back-end-inspiration-board' rel='noreferrer'>View Backend Code in Github</a>
                    </div>
                </section>
                <section className='section-4'>
                    <div>
                        <p className='home-text-7'> Weather Report </p>
                        <p className='project-4-text-4'>A mini project to demonstrate how I wire up an app using vanilla JavaScript, HTML and CSS and use multiple API calls.. Weather Report 
                        features include a display of the temperature by city, search a city to get a temperature, pick a theme to change the sky display and color change of the temperature display based on degree range.</p>
                        <p className='project-4-text-1'>Technologies: JavaScript, CSS, HTML, LocationIQ, OpenWeather</p>
                        <img className='project-4-text-2' src={require('../images/weather-report.png')} alt='weather' height={300} width={300}/>
                        <a className='project-4-text-3' target='_blank' href='https://github.com/ursaturnine/weather-report' rel='noreferrer'>View in Github</a>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
};

export default Home;