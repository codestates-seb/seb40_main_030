import { PageWrapper } from '@/components/@commons';
import { Category, Content } from '@/components/OrderList';

const OrderList = () => {
  return (
    <PageWrapper title='대여 확인 페이지' path={-1}>
      <Category />
      <Content />
    </PageWrapper>
  );
};

export default OrderList;
