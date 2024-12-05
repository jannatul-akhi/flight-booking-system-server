import { JwtPayload } from 'jsonwebtoken';
import { TBooking } from './booking.interface';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
//import { Flight } from '../flight/flight.model';
import { Booking } from './booking.model';

const createBookingIntoDB = async ({
  payLoad,
  userInfo,
}: {
  payLoad: TBooking;
  userInfo: JwtPayload;
}) => {
  const { user } = userInfo;
  if (!user) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'You are not registered, first you make a account please.',
    );
  }

  //const flight = Flight.isFlightExist(payLoad?.flightId)

  const result = Booking.create({ payLoad, user: user });

  return result;
};

export const BookingServices = {
  createBookingIntoDB,
};
