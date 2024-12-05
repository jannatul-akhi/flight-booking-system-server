import { model, Schema } from 'mongoose';
import { FlightModel, TFlight } from './flight.interface';

const flightSchema = new Schema<TFlight, FlightModel>({
  flightNumber: {
    type: String,
    required: [true, 'Flight number is required'],
    unique: true,
  },
  airline: {
    type: String,
    required: [true, 'Airline is required'],
  },
  origin: {
    type: String,
    required: [true, 'Origin is required'],
  },
  destination: {
    type: String,
    required: [true, 'Destination is required'],
  },
  date: {
    type: String,
    required: [true, 'Date is required'],
  },
  time: {
    type: String,
    required: [true, 'Time is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  availableSeat: {
    type: Number,
    required: [true, 'Seat avaibility is required'],
  },
  isCancel: {
    type: Boolean,
    default: false,
  },
});

flightSchema.statics.isFlightExist = async function (flightNumber: string) {
  return await Flight.findOne({ flightNumber });
};

export const Flight = model<TFlight, FlightModel>('Flight', flightSchema);
