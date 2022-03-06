import React from 'react';

function Buttons({method, type, text}) {
    return (

        <button type={type} onClick={method}> {text} </button>
    );
};

export default Buttons;
