import axios from 'axios';

function CreatureForm({
                        creatureName, 
                        setCreatureName, 
                        creatureOrigin, 
                        setCreatureOrigin,
                        fetchCreatureList
                      }) {
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

    return (
        <>
            <form onSubmit={submitForm}>
                Name:
                <input type="text"
                       value={creatureName}
                       onChange={(e) => setCreatureName(e.target.value)} />
                <span />
                Origin:
                <input type="text"
                       value={creatureOrigin}
                       onChange={(e) => setCreatureOrigin(e.target.value)} />
                <input type="submit" />
            </form>
        </>
    )
}

export default CreatureForm;