import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffect = () => {
    const [data, setData] = useState('')
    const [count, setCount] = useState(0);
    useEffect(() => { 
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
               setData(response.data[0].email)
                console.log('API CALLED');
            })
    }, [])
    return (
        
        <div>
            Hello World
            <h1>{data}</h1>
            <button onClick={
                () => setCount(count + 1)}>
                Increment Count
            </button>
            <p>Count: {count}</p>
        </div>
    );
};

export default UseEffect;