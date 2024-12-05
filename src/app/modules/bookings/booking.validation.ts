import { z } from 'zod';
import { Flight } from '../flight/flight.model';

const createBookingValidationSchema = z.object({
  body: z.object({
    flightId: z.string().refine(async (flightId) => {
      try {
        const flight = await Flight.findById(flightId);
        return !!flight;
      } catch (error) {
        return false;
      }
    }, 'Invalid flight ID for booking'),
  }),
  numberOfSeat: z.number(),
  totalPrice: z.number(),
  bookingStatus: z.string().optional().default('available'),
});

export const BookingValidation = { createBookingValidationSchema };
