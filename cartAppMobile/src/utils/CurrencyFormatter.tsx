import React from 'react';
import { Text } from 'react-native';
import NumberFormat from 'react-number-format';

interface ICurrencyFormatProps{
    value:number
    type:'BRL' | 'USD' 
}

const CurrencyFormatter: React.FC<ICurrencyFormatProps> = ({value,type}) =>{
    
    function renderCurrency(){
        switch(type){
            case "BRL":
                return(
                    <Text>
                        <NumberFormat value={value} displayType="text" thousandSeparator={true} prefix={'R$'} renderText={formattedValue => <Text>{formattedValue}</Text>}/>
                    </Text>
                )
            case "USD":
                return(

                    <Text>
                        <NumberFormat value={value} displayType="text" thousandSeparator={true} prefix={'$'} renderText={formattedValue => <Text>{formattedValue}</Text>}/>
                    </Text>
                )
            default:
                return(
                    <Text>
                        <NumberFormat value={value} displayType="text" thousandSeparator={true} prefix={'R$'} renderText={formattedValue => <Text>{formattedValue}</Text>}/>
                    </Text>
                )        
        }
    }

    return(
        <Text>
            {renderCurrency()} 
        </Text>
    )
}

export default CurrencyFormatter;