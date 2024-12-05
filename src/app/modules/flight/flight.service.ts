import { TFlight } from './flight.interface';
import { Flight } from './flight.model';

const createFlightIntoDB = async (payLoad: TFlight) => {
  const result = await Flight.create(payLoad);

  return result;
};

export const FlightServices = { createFlightIntoDB };
