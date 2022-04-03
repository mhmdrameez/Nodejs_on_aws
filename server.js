const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('Hello  I am Your NodeJS Server'));

app.get('/test', (req, res) => {
    res.send('This is a test route for the server');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));