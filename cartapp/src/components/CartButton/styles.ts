import styled from 'styled-components';
import { shade } from 'polished'

export const Container = styled.button`
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
`;
