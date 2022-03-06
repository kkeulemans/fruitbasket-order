import React from 'react';

function Input({type, name, text, id, event, select, value}) {
    return (
        <>
            <label htmlFor={name}>
                {text} <input type={type} id={id} name={name} onChange={event} checked={select}
                              value={value}></input></label>
        </>
    );
}

export default Input;