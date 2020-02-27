import * as express from 'express';
import * as Debug from 'debug';
import * as db from './db';

const debug = Debug('app');

const {
    PORT: port
} = process.env;

const app = express();

app.get('/artists', (req, res) => {
    res.json(
        db.artist.getBy()
    );
});

app.listen(port, () => {
    debug(`Server running on port: ${port}` );
});