import React, {useRef} from 'react';
import Button from './Button';

const UseImperative = () => {
    const buttonRef = useRef();
    return (
        <div>
            <button onClick={() => buttonRef.current.toggleButton()}>Parent Button</button>
            <Button ref={buttonRef}/>
        </div>
    );
};

export default UseImperative;