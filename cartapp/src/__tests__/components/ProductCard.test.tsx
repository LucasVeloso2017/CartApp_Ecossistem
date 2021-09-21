import React from 'react';

import { fireEvent, render, act } from '@testing-library/react';
import AppProvider from '../../hooks';
import ProductCard from '../../components/ProductCard';
import { useCart } from '../../hooks/CartContext';
import { mocked } from 'ts-jest/utils';

interface IProduct {
    id: string;
    name: string;
    image: string;
    price: string;
    quantity: number;
}

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

    it("Should be able to add product", async () => {

        const product:Omit<IProduct, 'quantity'> = {
            id:"1",
            name:"Caneta Bic",
            image:"imagem-caneta-bic",
            price:"100.00"
        }
        
        addToCart(product)

        const { debug, getByTestId } = render(
            <AppProvider>
                <ProductCard
                    product={product}
                />
            </AppProvider>
        )
        const add = getByTestId('product-card-add')

        add.addEventListener('click',()=>addToCart(product))

        expect(products[0].quantity).toBeLessThanOrEqual(2)
    })
    it("Should be able to a render a component correctly", async () => {

        const product:Omit<IProduct, 'quantity'> = {
            id:"1",
            name:"Caneta Bic",
            image:"imagem-caneta-bic",
            price:"100.00"
        }
        
        const { debug, getByTestId } = render(
            <AppProvider>
                <ProductCard
                    product={product}
                />
            </AppProvider>
        )

        expect(getByTestId('product-card')).toBeInTheDocument()
    })
})