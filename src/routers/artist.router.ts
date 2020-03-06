import { AppRouter } from './app.router';
import { RequestParamHandler, Response } from 'express';

export class ArtistRouter extends AppRouter {
    constructor() {
        super('/artists', 'Artist');
    }
}