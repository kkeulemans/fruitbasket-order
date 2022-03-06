import React from 'react';

const Counter = ({counter, setCounter, image, fruit}) => {

    function subtractOne() {
        if (counter > 0) {
            setCounter(counter - 1)

        }
    }

    function addOne() {
        setCounter(counter + 1)

    }

    return (
        <section>
            <p>{image}<b>{fruit}</b>
                <button onClick={subtractOne}>-</button>
                {counter}
                <button onClick={addOne}>+</button>
            </p>
        </section>
    );
}
export default Counter;