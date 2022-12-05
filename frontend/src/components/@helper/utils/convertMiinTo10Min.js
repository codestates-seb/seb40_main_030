const convertMinTo10Min = (min) => {
  if (min % 10 !== 0) {
    const converted = Math.round(min / 10) * 10;

    console.log(converted);

    return converted;
  } else {
    console.log(min);
    return min;
  }
};

export default convertMinTo10Min;
