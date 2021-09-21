import React from 'react';
import { mocked } from 'ts-jest/utils'
import { render } from '@testing-library/react';
import AppProvider from '../../hooks';
import CartButton from '../../components/CartButton';
import { useCart } from '../../hooks/CartContext';

interface IProduct {
    id: string;
    name: string;
    image: string;
    price: string;
    quantity: number;
}

describe("CartButton Component", () => {
    jest.mock('../../hooks/CartContext')
    
    const products: IProduct[] = []
    const addToCart = (product: Omit<IProduct, 'quantity'>) => {
        const checkProductInCart = products.find(item => item.id === product.id);
        if (checkProductInCart) {
            const productIndex = products.findIndex(
                item => item.id === product.id,
            );
    
            products[productIndex].quantity += 1;
    
            products.push(...products)
            localStorage.setItem('@CartApp:products', JSON.stringify(products))
        } else {
            const newProducts = [
                ...products,
                {
                    id: product.id,
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    quantity: 1
                }
            ];
            products.push(...newProducts)
            localStorage.setItem('@CartApp:products', JSON.stringify(newProducts))
        }
    }
    const increment = () => { }
    const decrement = () => { }
    
    
    it("Should be able to render cart values correctly", async () => {

        const useCartMockFn = jest.fn(useCart);
        const useCartMocked = mocked(useCartMockFn)

        useCartMocked.mockReturnValue({
            products,
            addToCart,
            increment,
            decrement
        });

        const product:Omit<IProduct, 'quantity'> = {
            id:"1",
            name:"Caneta Bic",
            image:"imagem-caneta-bic",
            price:"100.00"
        }

        addToCart(product)

        const productCount = products.reduce(
            (total, { quantity }) => quantity + total,
            0,
        );

        const { debug, getByTestId } = render(
            <AppProvider>
                <CartButton />
            </AppProvider>

        )

        expect(getByTestId('cart-button')).toBeInTheDocument()
        expect(Number(getByTestId('cart-value').innerHTML)).toBeLessThanOrEqual(productCount)
    })
})