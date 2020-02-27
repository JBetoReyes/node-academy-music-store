import * as express from 'express';

const {
    PORT: port
} = process.env;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Add a new endpoint that returns a list of artists

app.listen(port, () => {
    console.log(`Server running on port: ${port}` );
});