import { Coordinate } from './maps';

export type Content = {
  batteries: object[];
  confirmId: number;
  details: string;
  id: number;
  location: Coordinate;
  name?: string;
  phone: string;
  photoURL: string;
};

export type StationType = {
  confirmId: number;
  id: number;
  location: Coordinate;
  name: string;
};

export type BatteryType = {
  batteryId: number;
  capacity: string;
  status: boolean;
  price: number;
  batteryName: string;
  photoURL: string;
  defaultPrice: number;
  createdAt: string;
};

export type Matches = boolean;

export type ReservationTime = {
  hours: string | number;
  minutes: string | number;
};

export type ReservationDate = {
  year?: string | number;
  month: string | number;
  date: string | number;
};

export type Reservation = {
  times: ReservationTime;
  dates: ReservationDate;
};

export type DateFixedType = { date: boolean; time: boolean };

export interface InitialReservationStateType {
  startTime: ReservationTime | null;
  returnTime: ReservationTime | null;
  startDate: dates;
  endDate: dates;
  dateFixed: DateFixedType;
  bookingType: string;
  hours: number;
  minutes: string;
}
