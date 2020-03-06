import { createConnection, Connection, Model, Document} from 'mongoose';
import { debug as Debug } from 'debug';
import { schemas } from './schemas';
import { Express } from 'express';
import { IModelMap } from '.';

const debug = Debug('app:mongodb')
const error = debug.extend('error');
export class MongoDB {
    public connection: Connection;
    public models: IModelMap;
    constructor(private url, private port, private user, private password, private dbName) { }

    async init(app: Express) {
        try {
            await this._initConnection();
            app.set('Models', this.initModels());
        } catch (err) {
            error(`error %O`, err);
        }
    }

    private async _initConnection() {
        const {
            url,
            port,
            user,
            password,
            dbName
        } = this;
        const connectionString = `mongodb://${user}:${password}@${url}:${port}/${dbName}`;
        debug(`Trying to connect to: ${connectionString}`)
        this.connection = await createConnection(connectionString);
    }

    initModels(): IModelMap {
        this.models = schemas.reduce((models, schema)  => {
            const { modelName, model } = new schema(this.connection).buildModel();
            return {
                ...models,
                [modelName]: model
            }
        }, {});
        return this.models;
    }

}
