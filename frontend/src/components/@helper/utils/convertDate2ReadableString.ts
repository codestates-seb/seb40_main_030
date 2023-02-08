const convertDate2ReadableString = (fullDate) => {
  const newDate = new Date(fullDate);

  const date = String(newDate.getDate()).padStart(2, '0');
  // const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  // const day = newDate.getDay();
  const hour = String(newDate.getHours()).padStart(2, '0');
  const minute = String(newDate.getMinutes()).padStart(2, '0');

  return `${month}월 ${date}일 ${hour}:${minute}`;
};

export default convertDate2ReadableString;
