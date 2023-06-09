import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app: Express = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.get('/ping', (req: Request, res: Response) => {
    console.log('request',req.url);
    res.send({message: "Pong"});
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});