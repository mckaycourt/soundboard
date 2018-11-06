import React from 'react';
import Audiofiles from './Audiofiles';

const Section = ({title, files, play}) => {
    return (
        <div className='Section'>
            <div>
                {title}
            </div>
            <Audiofiles files={files} play={play}/>
        </div>
    )
};

export default Section