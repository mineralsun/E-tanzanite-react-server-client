const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Setup a GET route to get all the creatures from the database
router.get('/', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const sqlText = `SELECT * FROM creatures ORDER BY name, origin DESC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})


// Setup a POST route to add a new creature to the database
router.post('/', (req, res) => {
    const creature = req.body;
    const sqlText = `INSERT INTO creatures (name, origin)
                     VALUES ($1, $2)`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    pool.query(sqlText, [creature.name, creature.origin])
        .then((result) => {
            console.log(`Added creature to the database`, creature);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

// PUT /creature/sighting/3
router.put('/sighting/:id', (req, res) => {
    const creatureId = req.params.id;
    console.log(`PUT /sighting ${creatureId}`);
    // Increase the sighting by 1 for the creature matching
    // the id passed in the URL.
    const queryText = `UPDATE "creatures"
                       SET "sightings" = "sightings" + 1
                       WHERE "id" = $1;`;
    pool.query(queryText, [creatureId]).then(results => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(`Error in PUT /sighting ${error}`);
        res.sendStatus(500);
    });
});

module.exports = router;
