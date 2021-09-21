import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Container, DataContainer, GoBackButton, TextLogo } from './styles';

interface IHeaderProps{
    isBack?:boolean
    navigation?: StackNavigationProp<ParamListBase, string>
}

const Header: React.FC<IHeaderProps> = ({isBack = false,navigation}) => {
    return (
        <Container>
            <DataContainer isBack={isBack}>
                {isBack && (
                    <GoBackButton onPress={()=> navigation?.goBack()}>
                        <FeatherIcon name="arrow-left" color="white" size={25}/>
                    </GoBackButton>
                )}
                <TextLogo>CartApp</TextLogo>
            </DataContainer>
            
        </Container>
    );
}

export default Header;