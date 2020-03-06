import { Server } from './Server';
import * as Debug from 'debug';

const debug = Debug('app');

const {
    PORT: port
} = process.env;

const init = async () => {
    const server = new Server(port);
    await server.init();
};

init().then(() => {
    debug('App initialized...');
});
// import { app } from './server';


// const {
//     PORT: port
// } = process.env;

// app.listen(port, () => {
//     debug(`Running App in port: ${port}`);
// });