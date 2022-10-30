import React, {FC} from 'react';
import '../styles/horizontalcard.css'

interface HorizontalCardProps {
    message?: string
}
const HorizontalCard: FC<HorizontalCardProps> = ({message}) => {
    return(
        <div className='horizontal-card'>
            <div>
                <h1>{message}</h1>
            </div>
        </div>

    )
};

export default HorizontalCard;