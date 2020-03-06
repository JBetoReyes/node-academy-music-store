import { AppRouter } from './appRouter';
import { RequestParamHandler, Response } from 'express';

export class ArtistRouter extends AppRouter {
    constructor() {
        super('/artists');
    }

    get() {
        return {
            method: 'get',
            path: '/',
            handler: (req: RequestParamHandler, res: Response) => {
                res.json({
                    name: 'Shakira'
                });
            }
        }
    }
}