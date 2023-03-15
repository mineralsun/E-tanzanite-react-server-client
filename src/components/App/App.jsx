// Source in our stylesheet
// import is similar to 'require' on the server
import './App.css';
// useState updates the DOM when a variable changes
import { useState } from 'react';
import CreatureList from '../CreatureList/CreatureList.jsx';
import Header from '../Header/Header.jsx';
import ClickCounter from '../ClickCounter/ClickCounter.jsx';

//If you are looking for examples of the syntax for 
// the header or click counter or creature list
// they are within the components!
function App () {
  return (
    // This looks like HTML but is really JSX
    <div>
      <header>
        <Header />
      </header>
      <ClickCounter />
      <CreatureList />
    </div>
  );
}

export default App
