import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Body = styled.div`
  width: 100%;
  position: aboslute;

  .product-grid{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.5rem;
    gap: 1rem;
    
    #card-container{
      width: 100%;
    }

  }

`
