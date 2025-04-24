import React, {useRef} from 'react';

const UseRef = () => {
    const inputRef = useRef(null)

    const handleClick = () => {
        inputRef.current.focus()
        inputRef.current.value = ''; 
    };
    return (
        <div>
            <h1>Taofeek</h1>
            <input type="text" placeholder="Ex" ref={inputRef}></input>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default UseRef;