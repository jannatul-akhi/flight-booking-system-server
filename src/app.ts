/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
const app: Application = express();

app.use(express.json());
const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (
      !origin ||
      [
        'http://localhost:5173',
        'https://travel-tips-and-destination-guide-client.vercel.app',
      ].includes(origin)
    ) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

// Application route
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Air Ticket Booking System Server...');
});

export default app;