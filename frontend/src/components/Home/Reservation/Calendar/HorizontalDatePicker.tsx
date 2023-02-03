import { Datepicker } from '@meinefinsternis/react-horizontal-date-picker';
import { enUS } from 'date-fns/locale';
import { useEffect } from 'react';

import { useCalendar } from '@/hooks';

const HorizontalDatePicker = () => {
  const { date, handleChange, addMonths } = useCalendar();

  const buttons: any = document.querySelectorAll('.Kq');

  useEffect(() => {
    if (buttons) {
      [...buttons].map((button) => button.remove());
    }
  }, [buttons]);
  return (
    <Datepicker
      onChange={handleChange}
      locale={enUS}
      startValue={date.startValue}
      endValue={date.endValue}
      startDate={new Date()}
      endDate={addMonths(1)}
    />
  );
};

export default HorizontalDatePicker;
