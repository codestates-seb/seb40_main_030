import PageWrapper from '../../components/@common/PageWrapper/PageWrapper';
import PostCode from '../../components/SignUp/SignUpComp/PostCode';

const SearchAddress = () => {
  return (
    <PageWrapper title={'주소찾기'} path={-1}>
      <PostCode />
    </PageWrapper>
  );
};

export default SearchAddress;
