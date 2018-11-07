import React from 'react';

const Audiofiles = ({files, play}) => {

    return(
        <div className='section'>
            {files.map((file, i) => (
                <div key={i} className='button'>
                    <div className={'text'}>{file.name}</div>
                    <audio id={`${file.path}`}><source src={`./Audio/${file.path}.mp3`} type='audio/mpeg'/></audio>
                    <img src={`./Images/${file.pic}`} id={`button${i}`} onClick={() => play(file.path)}/>
                </div>
            ))}
        </div>
    )
};

export default Audiofiles
