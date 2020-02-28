import * as express from 'express';
import * as db from './db';
import * as Debug from 'debug';
const debug = Debug('server:root');

export const app = express();

const  { PORT: port } = process.env;

app.get('/artists', (req, res) => {
    res.json({
        data: db.artist.getBy()
    });
});

app.listen(port, () => {
    debug(`App running on port: ${port}`);
});