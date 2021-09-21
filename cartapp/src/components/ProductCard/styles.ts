import styled from 'styled-components';
import { shade } from 'polished'

export const Container = styled.div`
    width: 100%;
    height: 40vh;
    background-color: #F1FFFA;
    border-radius: 5px;
    overflow: hidden;
`;
export const CardHeader = styled.div`
    width:100%;
    height: 50%;
    img{
        width: 100%;
        height: 100%;
    }
`
export const CardBody = styled.div`
    width:100%;
    height: 50%;

    display: flex;
    flex-direction: column;
    padding: 1rem;

    .name{
        font-size: 1.5rem;
        font-family: 'Roboto', sans-serif;
    }
    .price{
        margin-top:1.5rem;
        font-size: 1.5rem;
        font-family: 'Roboto', sans-serif;
        color: #0471A6;
    }

`
export const AddButton = styled.button`
    width:100%;
    height: 56px;

    margin-top:1.5rem;

    display: flex;
    align-items:center;
    justify-content: center;

    background:#061826;
    border-radius:10px;
    border:0;
    padding:0 16px;

    color:#FFF;

    font-size:20px;
    font-family:'Roboto', sans-serif;
    letter-spacing:0.2px;

    transition: background-color 0.2s;

    svg{
        margin-right: 1rem;
    }

    &:hover{
        background:${shade(0.2, '#061826')};
    }

`