import React, { useReducer } from 'react';

const reducer = (state, action) => { 
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return {count: state.count + 1, showText: state.showText};
        case 'TOGGLE_TEXT':
            return {count: state.count, showText: !state.showText };
        default:
            return state;
    }
};

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

    return (
        <div>
            <button 
                onClick={() => {
                    dispatch({ type: 'INCREMENT_COUNT' });
                    dispatch({ type: 'TOGGLE_TEXT' });
                }}
            >
                Click Here
            </button>
            <p>Count: {state.count}</p>
            {state.showText && <h1>Text is visible</h1>}
        </div>
    );
};

export default UseReducer;