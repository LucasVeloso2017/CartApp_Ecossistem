import React from 'react';

import { fireEvent, render, act, getByText, cleanup } from '@testing-library/react';
import AppProvider from '../../hooks';
import CartCard from '../../components/CartCard';
import { useCart } from '../../hooks/CartContext';
import { mocked } from 'ts-jest/utils';

interface IProduct {
    id: string;
    name: string;
    image: string;
    price: string;
    quantity: number;
}

afterEach(cleanup)

describe("CartCard Component", () => {
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
    const increment = (id:string) => {
        const findedProduct = products.find((value) => value.id === id)

        if (!findedProduct) {
            return
        }
        findedProduct.quantity += 1

        localStorage.setItem(
            '@CartApp:products',
            JSON.stringify(products),
        );

    }
    const decrement = (id:string) => {
        const findedProduct = products.find((value) => value.id === id)

        if (!findedProduct) {
            return
        }
        findedProduct.quantity -= 1

        localStorage.setItem(
            '@CartApp:products',
            JSON.stringify(products),
        );
    }

    beforeEach(()=>{
        const useCartMockFn = jest.fn(useCart);
        const useCartMocked = mocked(useCartMockFn)

        useCartMocked.mockReturnValue({
            products,
            addToCart,
            increment,
            decrement
        });
    })

    it("Should be able to a increment quantity", async () => {

        const product:Omit<IProduct, 'quantity'> = {
            id:"1",
            name:"Caneta Bic",
            image:"imagem-caneta-bic",
            price:"100.00"
        }


        addToCart(product)

        const { debug, getByTestId,rerender } = render(
            <AppProvider>
                <CartCard
                    product={products[0]}
                />
            </AppProvider>
        )
        const add = getByTestId('cart-card-increment')
        const quatity = getByTestId('cart-card-quantity')

        add.addEventListener('click',()=>increment(products[0].id))

        fireEvent.click(getByTestId('cart-card-increment'))

        expect(Number(quatity.innerHTML)).toBe(products[0].quantity)
    })

    it("Should be able to a decrement quantity", async () => {

        const product:Omit<IProduct, 'quantity'> = {
            id:"1",
            name:"Caneta Bic",
            image:"imagem-caneta-bic",
            price:"100.00"
        }


        addToCart(product)
        increment(products[0].id)
        increment(products[0].id)

        const { debug, getByTestId,rerender } = render(
            <AppProvider>
                <CartCard
                    product={products[0]}
                />
            </AppProvider>
        )
        const add = getByTestId('cart-card-decrement')
        const quatity = getByTestId('cart-card-quantity')

        add.addEventListener('click',()=>decrement(products[0].id))

        fireEvent.click(getByTestId('cart-card-decrement'))
        
        expect(Number(quatity.innerHTML)).toBe(products[0].quantity)
    })

    it("Should be able to render a CartCard correctly", async () => {
        
        const product:Omit<IProduct, 'quantity'> = {
            id:"1",
            name:"Caneta Bic",
            image:"imagem-caneta-bic",
            price:"100.00"
        }

        addToCart(product)

        const { debug, getByTestId } = render(
            <AppProvider>
                <CartCard
                    product={products[0]}
                />
            </AppProvider>
        )

        expect(getByTestId('cart-card')).toBeInTheDocument()
    })
})