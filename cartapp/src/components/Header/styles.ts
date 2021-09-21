import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 15vh;
    background-color: #0471A6;
    padding: 1.5rem;
`;
export const Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        font-size: 2.5rem;
        font-family: 'Oleo Script', cursive;
        color: #fff;
    }

    #button-container{
        width: 8%;
    }

`

export const IsBackButton = styled.button`
    display: flex;
    align-items:center;
    justify-content: center;
    
    width:100%;
    height: 56px;

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
        background:${shade(0.2,'#061826')};
    }
`
