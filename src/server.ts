import * as express from 'express';
import * as Debug from 'debug';
import * as db from './db';

const debug = Debug('app');

const {
    PORT: port
} = process.env;

const app = express();

app.get('/artists', (req, res) => {
    res.json({
        data: db.artist.getBy()
    });
});

app.get('/artists/:id', (req, res) => {
    const { id } = req.params;
    const [artist] = db.artist.getBy('id', id);
    res.json({
        data: {
            artist
        }
    });
});


app.listen(port, () => {
    debug(`Server running on port: ${port}` );
});