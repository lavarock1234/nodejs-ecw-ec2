import express from 'express'

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const https = require("https"),
    fs = require("fs");

const options = {
    key: fs.readFileSync("./private-key.pem"),
    cert: fs.readFileSync("./public-cert.pem")
};

const app = express()

app.listen(5001, () => console.log('Api running on port 5001'))

app.get('/', (req, res) => res.json('My API is running'))

https.createServer(options, app).listen(5051);