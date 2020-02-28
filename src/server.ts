import * as express from 'express';

export const app = express();

const  { PORT: port } = process.env;

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(port, () => {
    console.log(`App running on port: ${port}`);
});