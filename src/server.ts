import { Express } from 'express';
import * as express from 'express';
import * as Debug from 'debug';
import { routers as appRouters }  from './routers';
import * as db from './db';
import * as bodyParser from 'body-parser';

const debug = Debug('app:Server');

// export const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/artists', (req, res) => {
//     res.json({
//         data: db.artist.getBy()
//     });
// });

// app.get('/artists/:id', (req, res) => {
//     const { id } = req.params;
//     const [artist] = db.artist.getBy('id', id);
//     res.json({
//         data: {
//             artist
//         }
//     });
// });

// app.post('/artists/', (req, res) => {
//     const payload = req.body;
//     db.artist.post(payload);
//     res.json(payload);
// });

export class Server {
    public app: Express;

    constructor(private port) {}

    public async init() {
        await this._initApp()
    }

    private async _initApp(): Promise<void> {
        const {
            port
        } = this;
        return new Promise((resolve) => {
            this.app = express();
            this._initRouters();
            this.app.listen(port, () => {
                debug(`App running on port: ${port}`);
                resolve();
            });
        });
    }

    private _initRouters() {
        appRouters.forEach((appRouter) => {
            const { mainPath, router } = appRouter;
            this.app.use(mainPath, router);
        });
    }
}
