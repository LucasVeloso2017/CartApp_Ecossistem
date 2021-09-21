import styled, { css } from 'styled-components/native';

interface DataContainerProps{
    isBack:boolean
}

export const Container = styled.View`
    width: 100%;
    height: 10%;
    background-color:#0471A6;
`;

export const DataContainer = styled.View<DataContainerProps>`
    width: 100%;
    height: 120%;
    padding:20px;
    flex-direction: row;
    justify-content: space-between;
    
    ${props => !props.isBack && css`
        justify-content: flex-end;
    `}

    align-items: center;
`

export const TextLogo = styled.Text`
    color: white;
    font-size: 30px;
    font-family: 'OleoScript';
`
export const GoBackButton = styled.TouchableOpacity`
    background:#061826;
    padding: 5px;
    border-radius: 5px;
`