import { app } from './server';
import * as Debug from 'debug';

const debug = Debug('app');

const {
    PORT: port
} = process.env;

app.listen(port, () => {
    debug(`Running App in port: ${port}`);
});