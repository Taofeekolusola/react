import React from 'react';
import PersonInfo from './PersonInfo';

const Person = ({name, age, occupation}) => {
    return (
        <div>
              <PersonInfo
                name={name}
                occupation={occupation}
                height={5.5}
                complexion='dark'
            />
            <h3>Age: {age}</h3>
        </div>
    );
};

export default Person;