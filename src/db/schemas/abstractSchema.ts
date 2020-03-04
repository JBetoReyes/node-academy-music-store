import { Connection, Model, Document } from "mongoose";

export abstract class AbstractSchema {
    constructor(protected _connection: Connection, public modelName: string) {}
    abstract buildModel(): Model<Document>;
}
