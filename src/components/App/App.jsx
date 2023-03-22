// Source in our stylesheet
// import is similar to 'require' on the server
import './App.css';
// useState updates the DOM when a variable changes
import { useState } from 'react';
import CreatureList from '../CreatureList/CreatureList.jsx';
import Header from '../Header/Header.jsx';
import ClickCounter from '../ClickCounter/ClickCounter.jsx';
import InputExample from '../InputExample/InputExample.jsx';



//If you are looking for examples of the syntax for 
// the header or click counter or creature list
// they are within the components!
function App () {

  const [headerText, setHeaderText] = useState('Welcome to React!!!')

  return (
    // This looks like HTML but is really JSX
    <div>
      {/* headerTextProp is the name of our prop */}
      {/* {headerText} is the value we are assigning to the prop */}
        <Header 
        textColor="forestgreen"
        headerTextProp={headerText} 
        />
        {/* <ClickCounter />
        <InputExample /> */}
        <CreatureList />
    </div>
  );
}

export default App
