import { Connection, Model, Document } from "mongoose";

export abstract class BaseAbstractSchema {
    constructor(protected _connection: Connection, public modelName: string) {}
    abstract buildModel(): IModelMeta;
}

export interface IModelMeta {
    model: Model<Document>;
    modelName: string;
}