import { model, Schema } from 'mongoose';
import { TBooking } from './booking.interface';

const bookingSchema = new Schema<TBooking>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
  },
  flightId: {
    type: Schema.Types.ObjectId,
    ref: 'Flight',
    required: [true, 'Flight ID is required'],
  },
  numberOfSeat: {
    type: Number,
    required: [true, 'Number of seat is required'],
  },
  totalPrice: {
    type: Number,
    required: [true, 'Total price is required'],
  },
  bookingStatus: {
    type: String,
    enum: ['available', 'pending', 'booked', 'canceled'],
    default: 'available',
  },
});

export const Booking = model<TBooking>('Booking', bookingSchema);
