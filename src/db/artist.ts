import * as Debug from 'debug';
import { ParentModel } from './ ParentModel';

const debug = Debug('app:artist');

export class Artist  extends ParentModel {

    constructor() {
        super([{
            name: 'shakira',
            age: 30,
            id: 1
        }, {
            name: 'Jose Jose',
            age: 70,
            id: 2
        }]);
    }
}