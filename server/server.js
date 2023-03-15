const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const creatureRouter = require('./routes/creature.router.js');
// ! If you change this port, you must update the package.json!
// ! Look at the "proxy": "http://localhost:(number)"
const PORT = process.env.PORT || 5012;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/creature', creatureRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});