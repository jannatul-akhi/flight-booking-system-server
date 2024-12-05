import express from 'express';
import { FlightControllers } from './flight.controller';

const router = express.Router();

router.post('/', FlightControllers.createFlight);

export const FlightRoutes = router;
