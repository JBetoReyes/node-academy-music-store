import { Request, Response } from "express";
import { BaseService } from "../services/base.service";
import { Document } from 'mongoose';

export class BaseController {
    protected _service = new BaseService();
    constructor(private _modelName: string) {}

    async get (req: Request, res: Response, query?): Promise<Document[]> {
        const model = req.app.get('Models')[this._modelName];
        const documents = await this._service.get(model, query);
        return documents;
    }
}