import { TIME } from '@/constants';

const isSelectedTimeValid = (selectedTime: {
  hours: number;
  minutes: number;
}) => {
  const { hours, minutes } = selectedTime;

  const date = new Date();
  const currentTimeInSimpleNumber =
    date.getHours() + date.getMinutes() / TIME.PERCENTAGE;
  const selectedTimeLineInSimpleNumber = hours + minutes / TIME.PERCENTAGE;

  return currentTimeInSimpleNumber >= selectedTimeLineInSimpleNumber;
};

export default isSelectedTimeValid;