import { useState, useEffect } from 'react';
// We must import axios in each component we want to use it
import axios from 'axios';

function CreatureList() {
    const [creatureName, setCreatureName] = useState('');
    const [creatureOrigin, setCreatureOrigin] = useState('');
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

    const submitForm = (e) => {
        e.preventDefault();
        axios.post('/creature', {
            name: creatureName,
            origin: creatureOrigin
        }).then((response) => {
            //Clear input fields
            setCreatureName('');
            setCreatureOrigin('');
            fetchCreatureList();
        }).catch((error) => {
            console.log(`Error in POST ${error}`);
            alert('Something went wrong!');
        })
    }
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
            <form onSubmit={submitForm}>
                Name:
                <input type="text"
                       value={creatureName}
                       onChange={(e) => setCreatureName(e.target.value)} />
                <br />
                Origin:
                <input type="text"
                       value={creatureOrigin}
                       onChange={(e) => setCreatureOrigin(e.target.value)} />
                <input type="submit" />
            </form>
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