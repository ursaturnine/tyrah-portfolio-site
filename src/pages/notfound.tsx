import React, {FC} from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

interface NotFoundProps {
    message?: string
}
const NotFound: FC<NotFoundProps> = ({message}) => {
    return(
        <div className='not-found'>
            <div className='notfound-title'>
            <NavBar />
            </div>
            <div>
                <h1>{message}</h1>
            </div>
            <Footer/>
        </div>
    )
};

export default NotFound;