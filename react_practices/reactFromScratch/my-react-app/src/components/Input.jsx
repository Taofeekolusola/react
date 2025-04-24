import React from 'react';

const Input = ({value, onChange}) => {
    return (
        <div>
            <input value={value} onChange={onChange}></input>
        </div>
    );
};

export default Input;