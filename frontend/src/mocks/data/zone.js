const mockZone = [
  {
    zoneId: 1,
    name: '코드 주유소',
    location: { latitude: 37.5963, longitude: 127.0844 },
    details: '코드 주유소 입니다.',
    image:
      'https://cdn.pixabay.com/photo/2016/03/23/19/39/petrol-stations-1275484_960_720.jpg',
    status: 34,
  },
  {
    zoneId: 2,
    name: '스테 주유소',
    location: { latitude: 37.5965, longitude: 127.0936 },
    details: '스테 주유소 입니다.',
    image:
      'https://cdn.pixabay.com/photo/2016/12/17/20/06/gas-pump-1914310_960_720.jpg',
    status: 0,
  },
  {
    zoneId: 3,
    name: '이츠 주유소',
    location: { latitude: 37.5979, longitude: 127.0903 },
    details: '이츠 주유소 입니다.',
    image:
      'https://www.shutterstock.com/image-photo/gas-fuel-station-clouds-blue-600w-665105398.jpg',
    status: 12,
  },
];

export default mockZone;

// default 값으로 코드 스테이츠
// current 위치가 설정 되있으면 default로
