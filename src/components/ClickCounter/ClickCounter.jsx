import { useState } from 'react';

function ClickCounter() {
const [firstName, setFirstName] = useState('Everett');
const [counter, setCounter] = useState(0);

let increaseClickCounter = () => {
    setCounter(counter + 1);
    console.log(counter);
}

let decreaseClickCounter = () => {
    setCounter(counter - 1);
    console.log(counter);
}

    return (
        <div>
            <p>Hello World! - {firstName}</p>
            <p>You clicked {counter} times!</p>
            <button onClick={increaseClickCounter}>Increase</button>
            <button onClick={decreaseClickCounter}>Decrease</button>
        </div>
    )
}

export default ClickCounter;