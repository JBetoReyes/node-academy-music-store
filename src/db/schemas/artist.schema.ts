import { Schema, Connection } from "mongoose";
import { BaseAbstractSchema, IModelMeta } from "./baseAbstract.schema";

export class ArtistSchema extends BaseAbstractSchema {
    schema = new Schema({
        id: {
            type: String,
            index: true
        },
        firstName: String,
        lastName: String,
        age: Number
    });

    constructor(protected _connection: Connection) {
        super(_connection, 'Artist');
    }

    public buildModel(): IModelMeta {
        return {
            model: this._connection.model("Artist", this.schema),
            modelName: this.modelName
        }
    }

}
