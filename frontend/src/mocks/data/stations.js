
const mockStations = [
  {
    id: 1,
    name: '코드 스테이츠',
    details: '코드 스테이츠 입니다.',
    location: { latitude: 37.4965, longitude: 127.0248 },
    photoURL:
      'https://codestates-photo.s3.ap-northeast-2.amazonaws.com/codestates_logo_thumbnail.jpg',
    batteries: [],
  },
  {
    id: 2,
    name: '스테 주유소',
    location: { latitude: 37.5965, longitude: 127.0936 },
    details: '스테 주유소 입니다.',
    photoURL:
      'https://cdn.pixabay.com/photo/2016/12/17/20/06/gas-pump-1914310_960_720.jpg',
    batteries: [
      {
        createdAt: '2022-11-19T17:34:24',
        modifiedAt: '2022-11-19T17:34:24',
        batteryId: 5,
        capacity: '103000mA',
        status: true,
        price: 12300,
        batteryName: '조금큰 베터리',
        photoURL:
          'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSka6Ydzuqqujs3gMzXmMCyHBTUDrqnK36uCA3vQ2VBudIx0glgOObzWWewlZJAt6NiFvaXqtbpT_k-&usqp=CAc',
      },
      {
        createdAt: '2022-11-19T17:34:23',
        modifiedAt: '2022-11-19T17:34:23',
        batteryId: 4,
        capacity: '40000mA',
        status: false,
        price: 30293,
        photoURL:
          'https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',
      },
      {
        createdAt: '2022-11-19T17:34:23',
        modifiedAt: '2022-11-19T17:34:23',
        batteryId: 6,
        capacity: '40000mA',
        status: true,
        price: 30293,
        batteryName: '용량큰 베터리',
        photoURL:
          'https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',
      },
      {
        createdAt: '2022-11-19T17:34:23',
        modifiedAt: '2022-11-19T17:34:23',
        batteryId: 7,
        capacity: '40000mA',
        status: false,
        price: 30293,
        photoURL:
          'https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',
      },
      {
        createdAt: '2022-11-19T17:34:23',
        modifiedAt: '2022-11-19T17:34:23',
        batteryId: 8,
        capacity: '40000mA',
        status: true,
        batteryName: '많이큰 베터리',
        price: 30293,
        photoURL:
          'https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',
      },
      {
        createdAt: '2022-11-19T17:34:23',
        modifiedAt: '2022-11-19T17:34:23',
        batteryId: 9,
        capacity: '40000mA',
        status: true,
        price: 30293,
        photoURL:
          'https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',
      },
    ],
  },
  {
    id: 3,
    name: '이츠 주유소',
    location: { latitude: 37.5979, longitude: 127.0903 },
    details: '이츠 주유소 입니다.',
    photoURL:
      'https://www.shutterstock.com/image-photo/gas-fuel-station-clouds-blue-600w-665105398.jpg',
    batteries: [
      {
        createdAt: '2022-11-19T17:34:19',
        modifiedAt: '2022-11-19T17:34:19',
        batteryId: 3,
        capacity: '41500mA',
        status: false,
        price: 71200,
        photoURL:
          'https://www.sustainabletruckvan.com/wp-content/uploads/2021/11/ZipCharge-Go-e1636018791166.jpg',
      },
      {
        createdAt: '2022-11-19T17:34:18',
        modifiedAt: '2022-11-19T17:34:18',
        batteryId: 2,
        capacity: '20000mA',
        status: false,
        price: 32000,
        photoURL:
          'https://qph.cf2.quoracdn.net/main-qimg-8feb538d19f0fe061938589fb185268e',
      },
      {
        createdAt: '2022-11-19T17:34:18',
        modifiedAt: '2022-11-19T17:34:18',
        batteryId: 1,
        capacity: '320000mA',
        status: false,
        price: 52300,
        photoURL:
          'https://qph.cf2.quoracdn.net/main-qimg-7071257001f8340880c451810a363d20-lq',
      },
    ],
  },
];

//
// {
//   zoneId: 4,
//   name: '구리 주유소',
//   location: { latitude: 37.5963, longitude: 127.0603 },
//   details: '구리 주유소 입니다.',
//   image:
//     'https://media.istockphoto.com/id/1280963997/ko/%EC%82%AC%EC%A7%84/%ED%81%B4%EB%9E%98%EC%8B%9D-%EA%B8%88%EC%86%8D-%EC%98%A4%EC%9D%BC-%EB%B0%B0%EB%9F%B4-%EB%93%9C%EB%9F%BC%EC%9D%98-%ED%96%89-3d-%EA%B7%B8%EB%A6%BC.jpg?s=612x612&w=is&k=20&c=z8ggKyXOH3ayc8f-dVjZgzFttWojmnOUWBg2SAKLpnQ=',
//   status: {
//     amount: 84,
//     bookable: true,
//   },
// },
// {
//   zoneId: 5,
//   name: '면목 주유소',
//   location: { latitude: 37.597, longitude: 127.0503 },
//   details: '면목 주유소 입니다.',
//   image:
//     'https://cdn.pixabay.com/photo/2017/09/17/16/35/boats-2758962_960_720.jpg',
//   status: {
//     amount: 12,
//     bookable: false,
//   },
// },
// {
//   zoneId: 6,
//   name: '상봉 주유소',
//   location: { latitude: 37.5945, longitude: 127.0803 },
//   details: '상봉 주유소 입니다.',
//   image:
//     'https://cdn.pixabay.com/photo/2016/08/15/22/20/fuel-1596622_960_720.jpg',
//   status: {
//     amount: 1,
//     bookable: true,
//   },
// },
// {
//   zoneId: 7,
//   name: '아하 주유소',
//   location: { latitude: 37.5938, longitude: 127.0203 },
//   details: '아하 주유소 입니다.',
//   image:
//     'https://media.istockphoto.com/id/1290614699/ko/%EC%82%AC%EC%A7%84/%EC%88%98%EC%86%8C-%EC%97%B0%EB%A3%8C-%EC%9E%90%EB%8F%99%EC%B0%A8-%EC%B6%A9%EC%A0%84-%EC%86%8C-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%BB%AC%EB%9F%AC-%EC%8B%9C%EA%B0%81%EC%A0%81-%EC%BB%A8%EC%85%89-%EB%94%94%EC%9E%90%EC%9D%B8-3d-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%EC%85%98.jpg?s=612x612&w=is&k=20&c=IOe_WIOeCe4GiIyrCDVvj09UVnOHcLR5d3dF6yaChq8=',
//   status: {
//     amount: 3,
//     bookable: true,
//   },
// },

export default mockStations;
