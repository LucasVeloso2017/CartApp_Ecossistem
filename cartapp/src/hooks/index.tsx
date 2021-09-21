import React from 'react'
import { CartProvider } from './CartContext'
import { ToastProvider } from './ToastContext'


const AppProvider: React.FC = ({ children }) => {
    return (
        <ToastProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </ToastProvider>
    );
}

export default AppProvider;