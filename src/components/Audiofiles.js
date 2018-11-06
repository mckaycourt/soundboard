import React from 'react';

const Audiofiles = ({files, play}) => {

    return(
        <div className='Audiofiles'>
            {files.map((file, i) => (
                <div key={i}>
                    <audio id={`${file.path}`}><source src={`./Audio/${file.path}.mp3`} type='audio/mpeg'/></audio>
                    <img src={`./Images/${file.pic}`} className='button' id={`button${i}`} onClick={() => play(file.path)}/>
                </div>
            ))}
        </div>
    )
};

export default Audiofiles
