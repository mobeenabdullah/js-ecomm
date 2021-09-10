const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hi there from the server');
});

app.listen(3000, () => {
    console.log('Listening...');
});