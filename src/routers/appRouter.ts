import { Router } from 'express';
import { validAppOperations } from './index';
import * as Debug from 'debug';

const debug = Debug('app:AppRouter');

export abstract class AppRouter {
    public router = Router();
    protected routerOperations: validAppOperations[] = [
        'get',
        'getBy',
        'post',
        'put',
        'delete'
    ];

    constructor(public mainPath: string) {
        this.registerRoutes();
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

}