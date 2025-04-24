import React, { useState } from 'react';
import Input from './Input';

const Todos = ({ todos, handleClick}) => {
    return (
        <div>
            <button onClick={handleClick}>Add</button>

            <ul>
                {todos.map((todos, index) => (
                    <li key={index}>{ todos } </li>
                ))}
            </ul>
        </div>
    );
};
export default Todos;