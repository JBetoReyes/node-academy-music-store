import { Express } from 'express';
import * as express from 'express';
import * as Debug from 'debug';
import { routers as appRouters }  from './routers';
import { db } from './db';
import * as bodyParser from 'body-parser';

const debug = Debug('app:Server');

export class Server {
    public app: Express;

    constructor(private port) {}

    public async init() {
        await this._initApp()
    }

    private async _initApp(): Promise<void> {
            this.app = express();
            await this._initDB();
            this._initRouters();
            await this._listen();
    }

    private _initRouters() {
        appRouters.forEach((appRouter) => {
            const { mainPath, router } = appRouter;
            this.app.use(mainPath, router);
        });
    }

    private async _initDB() {
        await db.init(this.app);
    }

    private _listen() {
        const {
            port
        } = this;
        return new Promise((resolve) => {
            this.app.listen(port, () => {
                debug(`App running on port: ${port}`);
                resolve();
            });
        })
    }
}
