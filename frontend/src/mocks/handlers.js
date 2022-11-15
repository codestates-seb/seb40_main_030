import { rest } from 'msw';
import mockOrder from './data/order';
import { KAKAO_TOKENCODE_URL, REDIRECT_URI } from '../constants/auth';
import { getTokenDirectly } from '../apis/auth';
let MockData = [...mockOrder];

export const handlers = [
  // 전체 주문 조회
  rest.get('/api/orders', (req, res, ctx) => {
    return res(ctx.delay(200), ctx.status(200), ctx.json(MockData));
  }),

  // 단일 주문 조회
  rest.get('/api/orders/:orderId', (req, res, ctx) => {
    const { orderId } = req.params;

    const filteredOrder = MockData.find(
      (mock) => mock.orderId === Number(orderId)
    );

    return res(ctx.delay(200), ctx.status(200), ctx.json(filteredOrder));
  }),

  // 주문 요청
  rest.post('/api/orders', (req, res, ctx) => {
    const newOrder = req.body;

    MockData.unshift(newOrder);

    return res(ctx.status(201));
  }),

  // 주문 수정
  rest.patch('/api/orders/:orderId', (req, res, ctx) => {
    const { orderId } = req.params;
    const modifiedOrder = req.body;

    const index = MockData.findIndex((mock) => mock.orderId === orderId);

    MockData[index] = modifiedOrder;

    return res(ctx.delay(), ctx.status(201), ctx.json(modifiedOrder));
  }),

  // 주문 취소
  rest.delete('/api/orders/:orderId', (req, res, ctx) => {
    const { orderId } = req.params;

    if (MockData.length === 0) {
      return res(ctx.delay(), ctx.status(403));
    }

    const index = MockData.findIndex((mock) => mock.orderId === orderId);

    MockData.splice(index, 1);

    return res(ctx.delay(), ctx.status(204));
  }),

  /**
   * 클라이언트에서 인증코드 받아서
   * 백엔드서버 -> 카카오인증서버로 요청 후
   * 토큰 발급 받아옴
   */
  rest.post('/login/token', async (req, res, ctx) => {
    const authCode = req.body.authorizationCode;
    const type = req.body.type;
    let token = await getTokenDirectly(KAKAO_TOKENCODE_URL, type, authCode);
    return res(ctx.delay(200), ctx.status(200), ctx.json(token));
  }),
];
//토큰 헤더[0], 쿠키, 바디
