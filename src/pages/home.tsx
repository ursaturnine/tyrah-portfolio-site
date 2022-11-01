import React, {FC} from 'react';
import NavBar from '../components/navbar';
import '../styles/home.css';
import PageSection from '../components/pagesection'

interface HomeProps {
    title?: string
}
const Home: FC<HomeProps> = ({title}) => {
    return(
        <div className='home-flex'>
            <div className='home-flex-1'> 
                <div>
                    <NavBar/>
                </div>
                <div className='home-flex-2'>
                    <h1>{title}</h1>
                </div> 
                <div className='home-flex-4add'>
                    <img src={require('../images/saturn.png')} alt='uranus' width={280} height={300}/> 
                </div>
                <div className='home-flex-3'>
                    <p className='home-text-1'>Tyrah D. Gullette, Software Engineering Intern @ Salesforce</p>
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
                        <p className='project-1-text-1'>A mobile app for sharing restaurant recommendations with friends. Tell Me Where gives you recommendations you can rely on because, unlike other food place recommendation apps, Tell Me Where offers reviews from the people you trust most -your friends and family.The backend for Tell Me
                        Where was coded with Flask and the frontend uses the React Native framework. </p>
                        <p className='project-1-text-6'>Features</p>
                        <p className='project-1-text-9'>Add a User, Add a Friend, Delete a Friend, Add a Recommendation, Delete a Recommendation, Search Recs by Location, View Recs By User</p>
                        <p className='project-1-text-4'>The backend for Tell Me Where employs RESTful routes for applicable CRUD operations. It includes a User model and a Recommendation model for a many-to-many PSQL database. The custom helper functions anticpate the data needed from the Yelp API and sanitizes it to be used in Tell Me Where's frontend logic. </p>
                        <p className='project-1-text-5'>The frontend for Tell Me Where intelligently uses React primitives to create reusable componenents and hooks for each page. The file structure is organized for scalability making room for additional API's, hooks, contexts, screens and components to be systematically added.</p>
                        <p className='project-1-text-7'>Technologies</p>
                        <p className='project-1-text-8'>React Native, Python, Yelp API, Flask, SQLAlchemy, PSQL, Expo Go</p>
                        <img className='project-1-text-2' src={require('../images/search_by_city.jpg')} alt='figma prototype' width={230} height={230}/>
                        <i className='project-1-text-11'>Figma Design of Searching a Rec By a City</i>
                        <a className='project-1-text-3' target='_blank' rel='noreferrer' href='https://github.com/ursaturnine/tell-me-where-app'>View Frontend Code in Github</a>
                        <a className='project-1-text-10' target='_blank' rel='noreferrer' href='https://github.com/lili4x4/tell-me-where-backend'>View Backend Code in Github</a>
                    </div>
                </section>
                <section className='section-2'>
                    <div>
                        <p className='home-text-5'> Viewing Party </p>
                        <p className='project-2-text-1'>A mini project to create a recommendation based algorithm written in the Python language. This project exhibits my ease with using the Python language after 3 years of coding in it.
                        This project also demonstrates my ability to read a description for a feature and to write a function for it; this coding challenge required I pass the given tests with my logic. In Viewing Party, I use the Python data structures, list and dictionary, to create a movie dictionary for individual users and their friends. </p>
                        <img className='project-2-text-2' src={require('../images/watch-party.png')} alt='pizza party' height={300} width={300}/>
                        <p className='project-2-text-4'>Functions: Here are some functions I wrote given tests and descriptions of features. I built off of this logic to code the Tell Me Where app. </p>
                        <ul className='project-2-text-6'>
                            <li>Create a movie</li>
                            <li>Add movie to watched list in nested user dictionary</li>
                            <li>Add movie to watchlist in nested user dictionary</li>
                            <li>Get average rating of watched movies in nested user dictionary</li>
                            <li>Get most watched genre in nested user dictionary</li>
                            <li>Get unique watched movies in nested user dictionary</li>
                            <li>Get unique wathced movies from friends nested user dictionaries</li>
                            <li>Get available recommendations from friends nested user dictionaries</li>
                            <li>Get new recommendation from friends' nested user dictionaries</li>
                            <li>Get new recommendation from friends' nest user dictionaries favorites list</li>
                        </ul>
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
                        <i className='project-3-text-6'>A Screen Grab of the Boards Page on the Website For Inspiration Board Project</i>
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
        </div>
    )
};

export default Home;