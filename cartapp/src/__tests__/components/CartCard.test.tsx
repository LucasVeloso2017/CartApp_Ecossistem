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
    const validateItemInArray = (index: number): Boolean => {
        if (index === -1) {
            return false
        }
        return true
    }
    const addOrIncrementToCart = (data: Omit<IProduct, 'quantity'>) => {
        const findInCart = products.findIndex(item => item.id === data.id)

        if (findInCart === -1) {
            const newData = {
                id: data.id,
                name: data.name,
                image: data.image,
                price: data.price,
                quantity: 1
            }

            products.push(...products, newData);

            localStorage.setItem(
                '@CartApp:products',
                JSON.stringify(newData),
            );
        } else {
            products[findInCart].quantity += 1

            products.push(...products);

            localStorage.setItem(
                '@CartApp:products',
                JSON.stringify(products),
            );
        }
    }
    const increment = (index: number) => {
        if (validateItemInArray(index)) {

            products[index].quantity += 1
            products.push(...products);

            localStorage.setItem(
                '@CartApp:products',
                JSON.stringify(products),
            );
        }

    }
    const decrement = (index: number) => {
        if (validateItemInArray(index)) {
            products[index].quantity -= 1

            if (products[index].quantity <= 0) {
                products.splice(index, 1);
            }

            products.push(...products);

            localStorage.setItem(
                '@CartApp:products',
                JSON.stringify(products),
            );
        }
    }
    const totalInCart = () => {
        return 10
    }

    beforeEach(() => {
        const useCartMockFn = jest.fn(useCart);
        const useCartMocked = mocked(useCartMockFn)

        useCartMocked.mockReturnValue({
            products,
            addOrIncrementToCart,
            increment,
            decrement,
            totalInCart
        });
    })

    it("Should be able to a increment quantity", async () => {

        const product: Omit<IProduct, 'quantity'> = {
            id: "1",
            name: "Caneta Bic",
            image: "imagem-caneta-bic",
            price: "100.00"
        }


        addOrIncrementToCart(product)

        const { debug, getByTestId, rerender } = render(
            <AppProvider>
                <CartCard
                    product={{
                        id: products[0].id,
                        name: products[0].name,
                        image: products[0].image,
                        price: products[0].price,
                        productIndex: 0,
                        quantity: products[0].quantity
                    }}
                />
            </AppProvider>
        )
        const add = getByTestId('cart-card-increment')
        const quatity = getByTestId('cart-card-quantity')

        add.addEventListener('click', () => increment(0))

        fireEvent.click(getByTestId('cart-card-increment'))

        expect(Number(quatity.innerHTML)).toBe(1)
    })

    it("Should be able to a decrement quantity", async () => {

        const product: Omit<IProduct, 'quantity'> = {
            id: "1",
            name: "Caneta Bic",
            image: "imagem-caneta-bic",
            price: "100.00"
        }


        addOrIncrementToCart(product)
        increment(0)
        increment(0)

        const { debug, getByTestId, rerender } = render(
            <AppProvider>
                <CartCard
                    product={{
                        id: products[0].id,
                        name: products[0].name,
                        image: products[0].image,
                        price: products[0].price,
                        productIndex: 0,
                        quantity: products[0].quantity
                    }}
                />
            </AppProvider>
        )
        const add = getByTestId('cart-card-decrement')
        const quatity = getByTestId('cart-card-quantity')

        add.addEventListener('click', () => decrement(0))

        fireEvent.click(getByTestId('cart-card-decrement'))

        expect(Number(quatity.innerHTML)).toBe(5)
    })

    it("Should be able to render a CartCard correctly", async () => {

        const product: Omit<IProduct, 'quantity'> = {
            id: "1",
            name: "Caneta Bic",
            image: "imagem-caneta-bic",
            price: "100.00"
        }

        addOrIncrementToCart(product)

        const { debug, getByTestId } = render(
            <AppProvider>
                <CartCard
                    product={{
                        id: products[0].id,
                        name: products[0].name,
                        image: products[0].image,
                        price: products[0].price,
                        productIndex: 0,
                        quantity: products[0].quantity
                    }}
                />
            </AppProvider>
        )

        expect(getByTestId('cart-card')).toBeInTheDocument()
    })
})

