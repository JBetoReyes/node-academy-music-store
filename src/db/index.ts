import { Model, Document } from "mongoose";
import { MongoDB } from './db';
const {
    DB_URL: url,
    DB_PORT: port,
    DB_USER: user,
    DB_PASSWORD: password,
    DB_NAME: dbName
} = process.env;

export const db = new MongoDB(url, port, user, password, dbName);
export interface IModelMap {
    [key: string]: Model<Document>;
};