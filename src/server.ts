import * as express from 'express';
import * as Debug from 'debug';
const debug = Debug('app');

const {
    PORT: port
} = process.env;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Add a new endpoint that returns a list of artists

app.listen(port, () => {
    debug(`Server running on port: ${port}` );
});