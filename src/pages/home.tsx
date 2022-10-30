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
            <div className='home-page'>
                    <div className='homepage-title'>
                        <h1>{title}</h1>
                    </div>  
                    <div>
                        <NavBar/>
                    </div>
            </div>
            <div className='header'>
                <h1>Tyrah D. Gullette</h1>
            </div>
            <section>
                <div>
                    <p> hi there</p>
                </div>
            </section>
            <section>
                <div>
                    <p> hi there 2 </p>
                </div>
            </section>
            <section>
                <div>
                    <p> hi there 3 </p>
                </div>
            </section>
        </div>
    )
};

export default Home;