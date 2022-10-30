import React, {FC} from 'react';
import NavBar from '../components/navbar';

const NotFound = () => {
    return(
        <div className='not-found'>
            <div className='notfound-title'>
            <NavBar />
            </div>
            <div>
                <h1>Hmm...This Page Doesn't Exist</h1>
            </div>
        </div>
    )
};

export default NotFound;