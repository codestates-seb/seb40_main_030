const convertDate2ServerString = (fullDate) => {
  const newDate = new Date(fullDate);
  const year = String(newDate.getFullYear());
  const date = String(newDate.getDate()).padStart(2, '0');
  // const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  // const day = newDate.getDay();
  const hour = String(newDate.getHours()).padStart(2, '0');
  const minute = String(newDate.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${date}T${hour}:${minute}`;
};

export default convertDate2ServerString;
