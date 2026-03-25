const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! Welcome to your CI/CD Pipeline Test');
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
