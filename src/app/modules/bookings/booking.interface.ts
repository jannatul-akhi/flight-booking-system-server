import { Types } from 'mongoose';

export type TBooking = {
  userId: Types.ObjectId;
  flightId: Types.ObjectId;
  numberOfSeat: number;
  totalPrice: number;
  bookingStatus: 'available' | 'pending' | 'booked' | 'canceled';
};
