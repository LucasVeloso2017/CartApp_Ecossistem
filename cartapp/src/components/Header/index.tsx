import React from 'react';

import {FiArrowLeft} from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import CartButton from '../CartButton';

import { Container, Content, IsBackButton } from './styles';

interface HeaderProps{
    isBack?:Boolean
}

const Header: React.FC<HeaderProps> = ({isBack = false}) => {
    const history = useHistory()
    return (
        <Container>
            <Content>
                <p>CartApp</p>
                <div id="button-container">
                    {
                        isBack ? (

                            <IsBackButton onClick={() => history.goBack()} data-testid="goback-button">
                                <FiArrowLeft color="white" size={25}/> Voltar
                            </IsBackButton>
                        
                        ) : <CartButton/>
                    }
                </div>
            </Content>
        </Container>
    );
}

export default Header;