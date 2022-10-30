import React, {FC} from 'react';
import NavBar from '../components/navbar';
import '../styles/home.css';

interface HomeProps {
    title?: string
}
const Home: FC<HomeProps> = ({title}) => {
    return(
        <div className='home-page'>
            <div className='homepage-title'>
                <h1>{title}</h1>
            </div>
            <div>
                <NavBar/>
            </div>
        </div>
    )
};

export default Home;