// Source in our stylesheet
// import is similar to 'require' on the server
import './App.css';
// useState updates the DOM when a variable changes
import { useState } from 'react';
import CreatureList from '../CreatureList/CreatureList.jsx';
import Header from '../Header/Header.jsx';
import ClickCounter from '../ClickCounter/ClickCounter.jsx';

function App () {
  // Our functions and variables will go here
  // This is how we previously declared variables
  // let firstName = 'Everett';
 // const [firstName, setFirstName] = useState('Everett');
  // let counter = 0;
  //      name      function    default value
  //const [counter, setCounter] = useState(0);

// const [myStateVariable, setMyStateVariable] = useState('initial value');

  //let increaseClickCounter = () => {
    //counter += 1; // Do  not modify state directly
    //console.log('before' counter);
    //setCounter(counter + 1);
    // ! counter is not different yet
    //console.log(counter);
  //}

  // let decreaseClickCounter = () => {
  //   setCounter(counter -1);
  //   console.log(counter);
  // }

  return (
    // This looks like HTML but is really JSX
    <div>
      <header>
        {/* <h1>Welcome to React!</h1> */}
        <Header />
      </header>
      <ClickCounter />
      {/* <p>Hello World! - {firstName}</p> */}
      {/* <p>You clicked {counter} times!</p> */}
      {/* <button onClick={increaseClickCounter}>Increase</button> */}
            {/*TODO: Add a decrease button */}
      {/* <button onClick={decreaseClickCounter}>Decrease</button> */}
      {/* Render our Creature List on the DOM */}
      <CreatureList />
    </div>
  );
}

export default App
