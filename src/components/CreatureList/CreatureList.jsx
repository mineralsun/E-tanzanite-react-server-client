import { useState, useEffect } from 'react';
// We must import axios in each component we want to use it
import axios from 'axios';

function CreatureList() {
    const [listOfCreatures, setListOfCreatures] = useState([]);

    const fetchCreatureList = () => {
        axios.get('/creature').then((response) => {
            // Update the array, React does the rest
            setListOfCreatures(response.data);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong!');
        });
    }
    // ! Don't do this, it will potentially mess up React's timing
    // fetchCreatureList();
    useEffect(() => {
        // At this point, React is ready!
        fetchCreatureList();
    }, []); // ! Remember the empty Array

    // All components return what
    // you want them to display.
    return (
        <div>
            <h2>Creature List</h2>
            {/* {
                // This turns our Arry into a string
                // (for testing only!)
                JSON.stringify(listOfCreatures)
            } */}
            <ul>
                {
                    listOfCreatures.map((creature) => (
                         // what we want to render
                         <li key={creature.id}>
                            {creature.name} from {creature.origin}
                         </li>
                    ))
                }
            </ul>
        </div>
    );
}


// All compenents must export
export default CreatureList;