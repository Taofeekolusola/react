import React, { forwardRef, useImperativeHandle, useState } from 'react';

const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false); // Initialize toggle as a boolean

    useImperativeHandle(ref, () => ({
        toggleButton: () => {
            setToggle((prev) => !prev); // Properly toggle the state
        },
    }));

    return (
        <div>
            <button>Child Button</button>
            {toggle && <p>Toggled</p>}
        </div>
    );
});

export default Button;