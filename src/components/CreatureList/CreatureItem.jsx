import React from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


//            DESTRUCTURE EVERY TIME, BROTHER
function CreatureItem({ creature, creatureName, fetchCreatureList }) {

    // This same pattern can be used for update! (BRUHHH)
    // Think marking something complete!
    const removeCreature = (e) => {
        console.log(`removeCreature ${creature.id}`);
        // Pass the id of the creature to delete
        axios.delete(`/creature/${creature.id}`)
        .then((response) => {
            // Fetch the creature list
            fetchCreatureList();
        }).catch((error) => {
            console.log(`Error in removeCreature ${error}`);
            alert('Something went wrong!')
        })

    }

    // Conditional rendering
    // This is much easier after creating a CreatureItem component
    // const getDecoration = () => {
    //     if( creature.name === 'a') {
    //         return 'line-through';
    //     } else {
    //         return 'none';
    //     }
    // }

    const addSighting = (e) => {
        console.log(`addSighting ${creature.id}`);
        axios.put(`/creature/sighting/${creature.id}`).then(response => {
            fetchCreatureList();
        }).catch(error => {
            console.log(`Error in addSighting ${error}`);
            alert('Something went wrong');
        })
    }

    const [value, setValue] = React.useState(1);

    return (
        // 12 is full width
        <Grid item xs={12} md={4}>
            {/* what we want to render */}
            <Card xs={{minWidth: 275}}>
                <CardContent>
                    <Typography variant="h5">
                        {creatureName} 
                    </Typography>
                    <Typography>
                        Origin: {creature.origin}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                        variant="outlined"
                        color="error"
                        onClick={(e) => removeCreature(e)}>
                            Delete</Button>
                    Sightings: {creature.sightings}
                    <Button 
                        variant="outlined" 
                        onClick={(e) => addSighting(e)}>
                            Add Sighting</Button>
                    <span />
                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                        >
                        <Typography component="legend">Spooky-ness</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                        />
                    </Box>
                </CardActions>
            </Card>
        </Grid>
    );
}


export default CreatureItem;