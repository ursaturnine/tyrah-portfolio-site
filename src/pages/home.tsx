import React, {FC} from 'react';
import NavBar from '../components/navbar';
import '../styles/home.css';

const Home: FC = () => {
    return(
        <div className='home-page'>
            <div className='homepage-title'>
                <h1>Home Page</h1>
            </div>
            <div>
                <NavBar/>
            </div>
        </div>
    )
};

export default Home;