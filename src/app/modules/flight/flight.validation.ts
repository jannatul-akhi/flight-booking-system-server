import { z } from 'zod';

const createFlightValidationSchema = z.object({
  body: z.object({
    flightNumber: z.string(),
    airline: z.string(),
    origin: z.string(),
    destination: z.string(),
    date: z.string(),
    time: z.string(),
    price: z.number(),
    availableSeat: z.number(),
    isCancel: z.boolean().optional().default(false),
  }),
});

export const FlightValidation = { createFlightValidationSchema };
