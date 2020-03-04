const {
    DB_URL: url,
    DB_PORT: port,
    DB_USER: user,
    DB_PASSWORD: password,
    DB_NAME: collection
} = process.env;

const connectionString = `mongodb://${user}:${password}@${url}:${port}/${collection}`;
