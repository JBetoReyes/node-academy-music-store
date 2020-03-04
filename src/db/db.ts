import { createConnection, Connection, Model, Document} from 'mongoose';
import { debug as Debug } from 'debug';
import { schemas } from './schemas';

const debug = Debug('app:mongodb')
const error = debug.extend('error');
export class MongoDB {
    public connection: Connection;
    public models: Model<Document>[];
    constructor(private url, private port, private user, private password, private dbName) { }

    async init() {
        try {
            await this.initConnection();
            this.initModels();
        } catch (err) {
            error(`error ${error}`);
        }
    }

    async initConnection() {
        const {
            url,
            port,
            user,
            password,
            dbName
        } = this;
        this.connection = await createConnection(`mongodb://${user}:${password}@${url}:${port}/${dbName}`);
    }

    initModels() {
        this.models = schemas.map((s)  => new s(this.connection).buildModel());
    }
}
