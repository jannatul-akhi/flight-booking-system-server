/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { TBooking } from '../bookings/booking.interface';

export type TFlight = {
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  date: string;
  time: string;
  price: number;
  availableSeat: number;
  isCancel?: boolean;
};

export interface FlightModel extends Model<TFlight> {
  isFlightExist(flightNumber: string): Promise<TBooking>;
}
