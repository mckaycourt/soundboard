import React from 'react';
import Audiofiles from './Audiofiles';

const Section = ({title, image, files, play, show}) => {
    return (
        <div className='Section' onClick={() => show(title)}>
            <div>
                {title}
            </div>
            <img src={`./Images/${image}`} className='button'/>
        </div>
    )
};

export default Section