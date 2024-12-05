import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { FlightServices } from './flight.service';

const createFlight = catchAsync(async (req, res) => {
  const result = await FlightServices.createFlightIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Flight created successfsully',
    data: result,
  });
});

export const FlightControllers = { createFlight };
