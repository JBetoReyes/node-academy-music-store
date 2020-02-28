import * as _ from 'lodash';

export class ParentModel {
    mockData;

    constructor(data) {
        this.mockData = _.castArray(data);
    }

    getBy(criteria?: string, query?: string) {
        if (!criteria && !query) {
            return this.mockData;
        }
        return this.mockData.filter((artist) => `${artist[criteria]}` === query) || [];
    }

    post(data) {
        this.mockData.push(data);
    }
}