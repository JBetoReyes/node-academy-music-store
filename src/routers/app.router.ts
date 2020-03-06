import { Request, Response, Router } from 'express';
import { validAppOperations } from './index';
import * as Debug from 'debug';
import { BaseController } from '../controllers/base.controller';

const debug = Debug('app:AppRouter');

export abstract class AppRouter {
    public router = Router();
    protected _controller: BaseController;
    protected routerOperations: validAppOperations[] = [
        'get',
        'getBy',
        'post',
        'put',
        'delete'
    ];

    constructor(public mainPath: string, private _modelName: string) {
        this.registerRoutes();
        this._controller = new BaseController(this._modelName);
    }

    registerRoutes() {
        this.routerOperations.forEach((operation) => {
            if (this[operation]) {
                const {
                    method,
                    path,
                    handler
                } = this[operation]();
                debug('Registering route %O', {
                    method,
                    path: `${this.mainPath}${path}`
                });
                this.router[method](path, handler);
            }
        });
    }

    get() {
        return {
            method: 'get',
            path: '/',
            handler: async (req: Request, res: Response) => {
                const response = await this._controller.get(req, res);
                res.json(response);
            }
        }
    }

}