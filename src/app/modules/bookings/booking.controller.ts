import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BookingServices } from './booking.service';

const createBooking = catchAsync(async (req, res) => {
  const payLoad = req.body;
  const user = req.user;

  const result = await BookingServices.createBookingIntoDB({
    payLoad,
    userInfo: user,
  });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking successfully done',
    data: result,
  });
});

export const BookingControllers = { createBooking };
