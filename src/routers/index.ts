import { ArtistRouter } from './artist.router';
import { AppRouter } from './app.router';

export const routers: AppRouter[] = [
    new ArtistRouter()
];


export type validCRUDOperations =   'get'   | 
                                    'getBy' |
                                    'post'  |
                                    'put'   |
                                    'delete';

export type validAppOperations = validCRUDOperations;