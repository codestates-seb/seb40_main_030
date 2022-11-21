import styled from 'styled-components';

const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 30px;

  :focus {
    outline: none;
  }

  font-size: 25px;
  border: none;
`;

const Body = styled.div`
  margin-top: 200px;
`;

export { SearchInput, Body };
