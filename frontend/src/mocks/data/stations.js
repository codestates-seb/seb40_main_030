
const mockStations = [
  {
    id: 2,
    name: '역삼역',
    details: '두번째 대여소',
    location: {
      latitude: 37.50067442,
      longitude: 127.03646947,
    },
    photoURL:
      'https://codestates-photo.s3.ap-northeast-2.amazonaws.com/codestates_logo_thumbnail.jpg',
    phone: '010-2580-2580',
    confirmId: 21160619,
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
        batteryId: 4,
        capacity: '100000mA',
        status: true,
        price: 50000,
        batteryName: 'Hyundai',
        photoURL:
          'https://codestates-photo.s3.ap-northeast-2.amazonaws.com/codestates_logo_thumbnail.jpg',
        reservations: [],
        createdAt: '2022-11-19T17:34:22.887204',
        modifiedAt: '2022-11-19T17:34:22.887204',
      },
      {
        batteryId: 5,
        capacity: '100000mA',
        status: true,
        price: 50000,
        batteryName: 'Hyundai',
        photoURL:
          'https://codestates-photo.s3.ap-northeast-2.amazonaws.com/codestates_logo_thumbnail.jpg',
        reservations: [],
        createdAt: '2022-11-19T17:34:23.503853',
        modifiedAt: '2022-11-19T17:34:23.503853',
      },
    ],
  },
  {
    id: 3,
    name: '서초한양수자인',
    details: '세번째 대여소',
    location: {
      latitude: 37.48743208,
      longitude: 127.02732692,
    },
    photoURL:
      'https://codestates-photo.s3.ap-northeast-2.amazonaws.com/codestates_logo_thumbnail.jpg',
    phone: '010-2580-2580',
    confirmId: 14584819,
    batteries: [],
  },
  {
    id: 4,
    name: '부산대학교병원',
    details: '네번째 대여소',
    location: {
      latitude: 35.10027532,
      longitude: 129.01873161,
    },
    photoURL:
      'https://codestates-photo.s3.ap-northeast-2.amazonaws.com/codestates_logo_thumbnail.jpg',
    phone: '010-2580-2580',
    confirmId: 18956887,
    batteries: [],
  },
  {
    id: 1,
    name: '코드스테이츠',
    details: '첫번째 대여소',
    location: {
      latitude: 37.49655445,
      longitude: 127.02475418,
    },
    photoURL:
      'https://codestates-photo.s3.ap-northeast-2.amazonaws.com/codestates_logo_thumbnail.jpg',
    phone: '010-1588-1588',
    confirmId: 1615822138,
    batteries: [
      {
        batteryId: 1,
        capacity: '100000mA',
        status: false,
        price: 50000,
        batteryName: 'Samsung',
        photoURL:
          'https://codestates-photo.s3.ap-northeast-2.amazonaws.com/codestates_logo_thumbnail.jpg',
        reservations: [
          {
            createdAt: '2022-11-15T09:52:37.959271',
            modifiedAt: '2022-11-15T09:52:37.959287',
            reservationId: 1,
            startTime: '2022-11-21T13:30',
            endTime: '2022-11-21T23:30',
            payStatus: null,
            stationId: null,
          },
          {
            createdAt: '2022-11-15T09:52:37.959271',
            modifiedAt: '2022-11-15T09:52:37.959287',
            reservationId: 11,
            startTime: '2022-11-21T09:30',
            endTime: '2022-11-21T12:30',
            payStatus: null,
            stationId: null,
          },
        ],
        createdAt: '2022-11-19T17:34:17.716045',
        modifiedAt: '2022-11-19T17:34:17.716045',
      },
      {
        batteryId: 2,
        capacity: '100000mA',
        status: false,
        price: 50000,
        batteryName: 'Samsung',
        photoURL:
          'https://codestates-photo.s3.ap-northeast-2.amazonaws.com/codestates_logo_thumbnail.jpg',
        reservations: [
          {
            createdAt: '2022-11-15T09:52:37.959271',
            modifiedAt: '2022-11-15T09:52:37.959287',
            reservationId: 2,
            startTime: '2022-11-21T13:30',
            endTime: '2022-11-21T23:30',
            payStatus: null,
            stationId: null,
          },
          {
            createdAt: '2022-11-15T09:52:37.959271',
            modifiedAt: '2022-11-15T09:52:37.959287',
            reservationId: 5,
            startTime: '2022-11-20T18:30',
            endTime: '2022-11-20T22:30',
            payStatus: null,
            stationId: null,
          },
          {
            createdAt: '2022-11-15T09:52:37.959271',
            modifiedAt: '2022-11-15T09:52:37.959287',
            reservationId: 22,
            startTime: '2022-11-22T13:30',
            endTime: '2022-11-23T23:30',
            payStatus: null,
            stationId: null,
          },
          {
            createdAt: '2022-11-15T09:52:37.959271',
            modifiedAt: '2022-11-15T09:52:37.959287',
            reservationId: 55,
            startTime: '2022-11-20T18:30',
            endTime: '2022-11-20T22:30',
            payStatus: null,
            stationId: null,
          },
        ],
        createdAt: '2022-11-19T17:34:18.453315',
        modifiedAt: '2022-11-19T17:34:18.453315',
      },
      {
        batteryId: 3,
        capacity: '100000mA',
        status: false,
        price: 50000,
        batteryName: 'Samsung',
        photoURL:
          'https://codestates-photo.s3.ap-northeast-2.amazonaws.com/codestates_logo_thumbnail.jpg',
        reservations: [
          {
            createdAt: '2022-11-15T09:52:37.959271',
            modifiedAt: '2022-11-15T09:52:37.959287',
            reservationId: 3,
            startTime: '2022-11-20T16:30',
            endTime: '2022-11-20T23:30',
            payStatus: null,
            stationId: null,
          },
          {
            createdAt: '2022-11-15T09:52:37.959271',
            modifiedAt: '2022-11-15T09:52:37.959287',
            reservationId: 4,
            startTime: '2022-11-19T16:30',
            endTime: '2022-11-19T23:30',
            payStatus: null,
            stationId: null,
          },
        ],
        createdAt: '2022-11-19T17:34:19.139197',
        modifiedAt: '2022-11-19T17:34:19.139197',
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
