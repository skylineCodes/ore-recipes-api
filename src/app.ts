import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';
import routesCategory from './routes/routeCategory';
import { db } from './models';
import cors from 'cors';
import helmet from 'helmet';

db.authenticate().then(() => console.log('Connected to database'));

const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '10mb',
    extended: true,
    parameterLimit: 50000,
  })
);

const port = process.env.PORT || 3001;

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Accept-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

app.get('/', async (req, res) => {
  res.send('Hello World!');
});

app.get('/v1/healthcheck', (req, res) => res.send('Hellooo World!'));

app.use('/v1/api', routesCategory);

start_app();

function start_app() {
  app
    .listen(port, () => {
      console.log(`server running on port : ${port}`);
    })
    .on('error', onError);
}

/*
  @description handle specific listen errors with friendly messages
  */
function onError(error: any) {
  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${port} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${port} is already in use`);
      process.exit(1);
      break;
    case 'MODULE_NOT_FOUND':
      console.error(`Module not found`);
      process.exit(1);
      break;
    case 'uncaughtException':
      console.error(`Uncaught Error`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}
