import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 15vh;
    background-color: #F1FFFA;
    border-radius: 5px;
    overflow: hidden;

    display: flex;
    justify-content: center;
`;
export const CardHeader = styled.div`
    width:25%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
    }
`
export const CardBody = styled.div`
    width:100%;
    height: 50%;
    
    display: flex;

    .product-info{
        width: 30%;
        height: 15vh;
        display: flex;
        flex-direction: column;
        padding: 1rem;

        .name{
            font-size: 1.5rem;
            font-family: 'Roboto', sans-serif;
        }
        .price{
            margin-top:1.5rem;
            font-size: 1rem;
            font-family: 'Roboto', sans-serif;
            color: #061826;
        }
        .subtotal{
            margin-top:1rem;
            font-size: 1.3rem;
            font-family: 'Roboto', sans-serif;
            color: #0471A6;
        }
    }
    

    .product-control{
        width: 80%;
        height: 15vh;

        display: flex;
        justify-content: center;
        align-items:center;

        .quantity{
            width: 10%;
            
            display: flex;
            justify-content: center;
            align-items:center;

            font-size: 1.5rem;
            font-family: 'Roboto', sans-serif;
        }
    }
`

export const ControlButton = styled.button`
    width: 10%;
    height: 50%;

    display: flex;
    align-items:center;
    justify-content: center;

    background:#061826;
    border-radius:10px;
    border:0;
    padding:0 16px;

    color:#FFF;

    font-size:2rem;
    font-family:'Roboto', sans-serif;
    letter-spacing:0.2px;

    transition: background-color 0.2s;

    svg{
        margin-right: 1rem;
    }
`