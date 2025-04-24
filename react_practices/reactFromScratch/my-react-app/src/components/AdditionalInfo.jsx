import React from 'react';

const AdditionalInfo = ({complexion, hobby}) => {
    return (
        <div>
            <h2>complexion: <i>{complexion}</i></h2>
            <h2>hobby: { hobby }</h2>
        </div>
    );
};

export default AdditionalInfo;