import React, {FC} from 'react';
import '../styles/footer.css'

interface FooterProps {

}

const Footer: FC<FooterProps> = () => {
    return (
        <div className='footer'>
            <h1 className='footer-text'>Built From Curiosity With 💜 Tyrah D. Gullette </h1>
        </div>

    )
}

export default Footer;