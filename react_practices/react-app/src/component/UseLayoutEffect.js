import React, { useLayoutEffect, useEffect, useRef } from 'react';

const UseLayoutEffect = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value); // Logs the current input value before the DOM paint
    }, []);

    useEffect(() => {
        inputRef.current.value = "Hello"; // Updates the input value after the DOM paint
    }, []);

    return (
        <div>
            <input
                type="text"
                placeholder="Ex"
                ref={inputRef}
                value="Taofeek"
                style={{ width: '100%', height: '30px', border: 'solid 1px black' }} // Corrected inline style
            />
        </div>
    );
};

export default UseLayoutEffect;