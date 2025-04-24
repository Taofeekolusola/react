import React from 'react';
import AdditionalInfo from './AdditionalInfo';

const PersonInfo = ({name, occupation, height, complexion}) => {
    return (
        <div>
            <h2>name:<i>{name}</i></h2>
            <h2>occupation:<i>{occupation}</i></h2>
            <AdditionalInfo complexion={complexion} hobby='coding' />
            <h3>height: {height}</h3>
        </div>
    );
};

export default PersonInfo;