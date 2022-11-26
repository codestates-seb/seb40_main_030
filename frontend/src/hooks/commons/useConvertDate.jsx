const useConvertDate = (fullDate) => {
  const newDate = new Date(fullDate);

  const date = newDate.getDate();
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDay();
  const hour = String(newDate.getHours()).padStart(2, '0');
  const minute = String(newDate.getMinutes()).padStart(2, '0');

  return { year, month, date, day, hour, minute };
};

export default useConvertDate;
