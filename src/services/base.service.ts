import { Model, Document } from "mongoose";

export class BaseService {
    get(model: Model<Document>, query = {}): Promise<Document[]> {
        return model.find({}).exec();
    }
}