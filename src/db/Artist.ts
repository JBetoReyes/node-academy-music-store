export const artists = [{
    name: 'Shakira',
    age: 35,
    id: 1
}, {
    name: 'Jose Jose',
    age: 70,
    id: 2
}];

export class Artist {
    getBy(criteria?: string, query?: string) {
        return artists;
    }
}