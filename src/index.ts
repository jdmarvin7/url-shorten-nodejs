import { MongoConnection } from './database/MongoConnection';
import express from 'express';
import { UrlController } from './controller/url-controller';

const app = express();
app.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new UrlController();

app.post('/shorten', urlController.shorten)
app.get('/:hash', urlController.redirect)  

app.listen(3000, () => {
    console.log("Runing");
})