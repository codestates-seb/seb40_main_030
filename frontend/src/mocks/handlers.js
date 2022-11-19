import { rest } from 'msw';
import { mockOrder, mockUser, mockZone } from './data';
import {
  KAKAO_TOKENCODE_URL,
  KAKAO_TOKEN_LOGOUT_URL,
  KAKAO_USERINFO_URL,
} from '../constants/auth';
import {
  getTokenDirectly,
  invalidateTokenDirectly,
  getUserInfo,
  renewTokenDirectly,
  checkValidToken,
} from '../apis/auth';
import { Headers } from 'headers-polyfill';
let MockOrder = [...mockOrder];
let MockUsers = [...mockUser];
let MockZone = [...mockZone];

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

    const index = MockUsers.findIndex((user) => user.memberId === memberId);

    MockUsers.splice(index, 1);

    return res(ctx.delay(), ctx.status(204));
  }),

  // Zone related
  rest.get('/api/zones', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MockZone));
  }),

  //요청에서 토큰 유효성 검사 - 모든 api요청은 백엔드에서 토큰 유효성 검사를 할예정으로 임시로 /test api에 대해서만 체크후 응답보내줌
  rest.all('/test', (req, res, ctx) => {
    const header = new Headers(req.headers);
    const tokenInHeader = header.get('authorization')?.split(' ')[1];
    const isValidToken = checkValidToken(tokenInHeader);
    console.log('인증헤더는', isValidToken);

    if (isValidToken) {
      console.log('토큰이 유효합니다');
      return;
    }

    return res(
      ctx.delay(200),
      ctx.status(401),
      ctx.json('토큰이 유효하지 않습니다. 재발급요망')
    );
  }),

  rest.get('/test', (req, res, ctx) => {
    console.log('test get 요청 핸들러 실행');
    return res(
      ctx.delay(200),
      ctx.status(200),
      ctx.json('테스트 api 응답성공')
    );
  }),

  /**
   * 클라이언트에서 인증코드 받아서
   * 카카오인증서버로 요청 후 토큰 받아오고
   * 카카오인증서버에서 다시 사용자정보 받아옴
   */
  rest.post('/login/token', async (req, res, ctx) => {
    const authCode = req.body.authorizationCode;

    const token = await getTokenDirectly(KAKAO_TOKENCODE_URL, authCode);
    const accessToken = token.access_token;
    const refreshToken = token.refresh_token;
    console.log('처음 받아온 각 토큰은', accessToken, refreshToken);
    const userInfo = await getUserInfo(KAKAO_USERINFO_URL, accessToken);

    return res(
      ctx.delay(200),
      ctx.cookie('refresh_token', refreshToken),
      ctx.status(200),
      ctx.json({ access_token: accessToken, userInfo: userInfo })
    );
  }),

  /**
   * 클라이언트에서 로그아웃 요청 받아서 처리
   * 카카오인증 서버로 로그아웃 요청 보냄
   */
  rest.post('/logout', async (req, res, ctx) => {
    const accessToken = req.body.accessToken;
    console.log('로그아웃 요청의 엑세스토큰은', accessToken);
    const logoutRes = await invalidateTokenDirectly(
      KAKAO_TOKEN_LOGOUT_URL,
      accessToken
    );
    console.log('카카오서버로부터 로그아웃 응답은', logoutRes);
    document.cookie = 'refresh_token=';
    console.log('쿠키 초기화시킨후 값', document.cookie);
    return res(
      ctx.delay(200),
      ctx.status(200),
      ctx.cookie('refresh_token', ''),
      ctx.json(logoutRes)
    );
  }),

  /**
   * 클라이언트에서 재발급 요청 받아서 처리
   * 카카오인증 서버로 재발급 요청 보냄
   */
  rest.get('/login/renew', async (req, res, ctx) => {
    const header = new Headers(req.headers);
    const refreshToken = header.get('cookie');
    console.log('재발급을 위한 리프레쉬 토큰은', refreshToken);
    const renewRes = await renewTokenDirectly(refreshToken);
    console.log('응답은', renewRes);
    const userInfo = await getUserInfo(
      KAKAO_USERINFO_URL,
      renewRes.access_token
    );
    console.log('사용자정보', userInfo);
    return res(
      ctx.delay(200),
      ctx.status(200),
      ctx.json({ access_token: renewRes, userInfo: userInfo })
    );
  }),

  // rest.post('/test', async (req, res, ctx) => {
  //   console.log('테스트 요청 핸들러 실행');

  //   return res(
  //     ctx.delay(200),
  //     ctx.status(200),
  //     ctx.json('테스트 요청의 응답입니다')
  //   );
  // }),
];
//토큰 헤더[0], 쿠키, 바디
