import styled from 'styled-components';

export const ProductsContainer = styled.div`
  margin-top: 60px;
  overflow: hidden;
  width: 634px;

  @media screen and (max-width: 660px) {
    width: 100%;
  }
  @media screen and (max-width: 400px) {
    margin-top: 0;
    width: 105%;
  }
`;
