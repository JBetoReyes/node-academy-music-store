import { ArtistRouter } from './artistRouter';
import { AppRouter } from './appRouter';

export const routers: AppRouter[] = [
    new ArtistRouter()
];


export type validCRUDOperations =   'get'   | 
                                    'getBy' |
                                    'post'  |
                                    'put'   |
                                    'delete';

export type validAppOperations = validCRUDOperations;