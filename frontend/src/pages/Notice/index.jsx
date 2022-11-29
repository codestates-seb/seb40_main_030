import { PageWrapper } from '../../components/@commons';
import NoticeForm from '../../components/Notice/NoticeForm';

const Notice = () => {
  return (
    <PageWrapper title={'공지사항'} path={-1}>
      <NoticeForm />
    </PageWrapper>
  );
};

export default Notice;
