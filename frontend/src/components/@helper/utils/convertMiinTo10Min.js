const convertMinTo10Min = (min) => {
  if (min > 50 && min <= 60) {
    return 50;
  }

  if (min % 10 !== 0) {
    const converted = Math.round(min / 10) * 10;

    return converted;
  } else {
    return min;
  }
};

export default convertMinTo10Min;
