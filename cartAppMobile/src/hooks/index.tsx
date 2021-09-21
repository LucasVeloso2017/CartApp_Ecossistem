import React from 'react'
import { CartProvider } from './CartContext'


const AppProvider: React.FC = ({ children }) => {
    return (
        <CartProvider>
            {children}
        </CartProvider>
    );
}

export default AppProvider;