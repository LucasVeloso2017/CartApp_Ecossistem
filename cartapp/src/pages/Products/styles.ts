import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Body = styled.div`
  width: 100%;

  .product-grid{
    padding: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-around;
    align-items: center;

    #card-container{
      width: 23%;
    }
  }
`
