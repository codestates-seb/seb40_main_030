import { rest } from 'msw';
import { mockOrder, mockUser, mockStations } from './data';
import { getTokenDirectly, invalidateTokenDirectly } from '../apis/auth';

let MockOrder = [...mockOrder];
let MockUsers = [...mockUser];
let MockStations = [...mockStations];

export const handlers = [
  // OAuth

  rest.get('/api/login', (req, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.json({ token: 'token', id: 12345 }),
      ctx.status(200),
      ctx.cookie('shadowToken', 'true')
    );
  }),

  // order related

  // 전체 주문 조회
  rest.get('/api/orders', (req, res, ctx) => {
    return res(ctx.delay(200), ctx.status(200), ctx.json(MockOrder));
  }),

  // 단일 주문 조회
  rest.get('/api/orders/:orderId', (req, res, ctx) => {
    const { orderId } = req.params;

    const filteredOrder = MockOrder.find(
      (mock) => mock.orderId === Number(orderId)
    );

    return res(ctx.delay(200), ctx.status(200), ctx.json(filteredOrder));
  }),

  // 주문 요청
  rest.post('/api/orders', (req, res, ctx) => {
    const newOrder = req.body;

    MockOrder.unshift(newOrder);

    return res(ctx.status(201), ctx.json(newOrder));
  }),

  // 주문 수정
  rest.patch('/api/orders/:orderId', (req, res, ctx) => {
    const { orderId } = req.params;
    const modifiedOrder = req.body;

    const index = MockOrder.findIndex((mock) => mock.orderId === orderId);

    MockOrder[index] = modifiedOrder;

    return res(ctx.delay(), ctx.status(201), ctx.json(modifiedOrder));
  }),

  // 주문 취소
  rest.delete('/api/orders/:orderId', (req, res, ctx) => {
    const { orderId } = req.params;

    if (MockOrder.length === 0) {
      return res(ctx.delay(), ctx.status(403));
    }

    const index = MockOrder.findIndex((mock) => mock.orderId === orderId);

    MockOrder.splice(index, 1);

    return res(ctx.delay(), ctx.status(204));
  }),

  // users related

  // 모든 유저 정보
  rest.get('/api/members', (req, res, ctx) => {
    return res(ctx.delay(), ctx.status(200), ctx.json(MockUsers));
  }),

  // 단일 유저 조회
  rest.get('/api/members/:memberId', (req, res, ctx) => {
    const { memberId } = req.params;
    const user = MockUsers.find((user) => user.memberId === Number(memberId));

    return res(ctx.delay(), ctx.status(200), ctx.json(user));
  }),

  // 유저 정보 등록
  rest.post('/api/members', (req, res, ctx) => {
    const newUser = req.body;

    MockUsers.unshift(newUser);

    return res(ctx.delay(), ctx.status(201), ctx.json(newUser));
  }),

  // 유저 정보 수정
  rest.patch('/api/members/:memberId', (req, res, ctx) => {
    const { memberId } = req.params;
    const newInfo = req.body;

    const index = MockUsers.findIndex((user) => user.memberId === memberId);

    MockUsers[index] = newInfo;

    return res(ctx.delay(), ctx.status(201), ctx.json(newInfo));
  }),

  // 유저 정보 삭제
  rest.delete('/api/members/:memberId', (req, res, ctx) => {
    const { memberId } = req.params;

    if (MockOrder.length === 0) {
      return res(ctx.delay(), ctx.status(403));
    }

    const index = MockUsers.findIndex(
      (user) => user.memberId === Number(memberId)
    );

    MockUsers.splice(index, 1);

    return res(ctx.delay(), ctx.status(204));
  }),

  // Stations related
  rest.get('/api/stations', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MockStations));
  }),

  rest.get('/api/stations/:stationId', (req, res, ctx) => {
    const { stationId } = req.params;

    const index = MockStations.findIndex(
      (station) => station.id === Number(stationId)
    );

    return res(ctx.status(200), ctx.json(MockStations[index]));
  }),

  // Auth
  /**
   * 클라이언트에서 인증코드 받아서
   * 카카오인증서버로 요청 후 토큰 받아옴
   */
  rest.post('/login/token', async (req, res, ctx) => {
    const authCode = req.body.authorizationCode;
    const type = req.body.type;
    let token = await getTokenDirectly(KAKAO_TOKENCODE_URL, authCode);
    return res(ctx.delay(200), ctx.status(200), ctx.json(token));
  }),

  //카카오인증 서버로 로그아웃 요청 보냄
  rest.post('/logout', async (req, res, ctx) => {
    const logoutRes = await invalidateTokenDirectly(KAKAO_TOKEN_LOGOUT_URL);
    console.log('moc logout res', logoutRes);
    return res(
      ctx.delay(200),
      ctx.cookie('auth-token', 'abc-123'),
      ctx.status(200),
      ctx.json(logoutRes)
    );
  }),
];
//토큰 헤더[0], 쿠키, 바디
