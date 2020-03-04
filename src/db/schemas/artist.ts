import { Schema, Connection, Model, Document} from "mongoose";
import { AbstractSchema } from "./abstractSchema";

export class ArtistSchema extends AbstractSchema {
    schema = new Schema({
        id: {
            type: String,
            index: true
        },
        name: String,
        age: Number
    });

    constructor(protected _connection: Connection) {
        super(_connection, 'Artist');
    }

    public buildModel(): Model<Document> {
        return this._connection.model(this.modelName, this.schema);
    }

}
