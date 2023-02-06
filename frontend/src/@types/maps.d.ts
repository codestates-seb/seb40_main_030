import { DEFAULT_LOCATION } from '@/constants';

export type Coordinate = {
  latitude: number | DEFAULT_LOCATION.latitude;
  longitude: number | DEFAULT_LOCATION.longitude;
};

export type Location = Coordinate;
