import { Datepicker } from '@meinefinsternis/react-horizontal-date-picker';
import { enUS } from 'date-fns/locale';
import { useEffect } from 'react';

import { useCalendar } from '@/hooks';

const HorizontalDatePicker = () => {
  const { date, handleChange } = useCalendar();

  const buttons = document.querySelectorAll('.Kq');

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
    />
  );
};

export default HorizontalDatePicker;
