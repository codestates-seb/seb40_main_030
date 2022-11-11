import { rest } from 'msw';
import mockOrder from './data/order';

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
];
