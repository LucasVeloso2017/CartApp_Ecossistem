import React, { createContext, useState, useContext, useEffect, useCallback, useMemo } from 'react';

interface IProduct {
  id: string;
  name: string;
  image: string;
  price: string;
  quantity: number;
}

interface ICartContext {
  products: IProduct[];
  addOrIncrementToCart(item: Omit<IProduct, 'quantity'>): void;
  increment(index: number): void;
  decrement(index: number): void;
  totalInCart(): number
}

const CartContext = createContext<ICartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const productList = localStorage.getItem('@CartApp:products');

    if (productList) {
      setProducts(JSON.parse(productList));
    }
  }, []);

  const validateItemInArray = (index: number): Boolean => {
    if (index === -1) {
      return false
    }
    return true
  }

  const addOrIncrementToCart = useCallback((data: IProduct) => {
    const findInCart = products.findIndex(item => item.id === data.id)

    if (findInCart === -1) {
      const newData = {
        id: data.id,
        name: data.name,
        image: data.image,
        price: data.price,
        quantity: 1
      }

      setProducts([...products, newData]);

      localStorage.setItem(
        '@CartApp:products',
        JSON.stringify(newData),
      );
    } else {
      products[findInCart].quantity += 1

      setProducts([...products]);

      localStorage.setItem(
        '@CartApp:products',
        JSON.stringify(products),
      );
    }
  }, [products])

  const increment = useCallback((index: number) => {

    if (validateItemInArray(index)) {
      products[index].quantity += 1
      setProducts([...products]);

      localStorage.setItem(
        '@CartApp:products',
        JSON.stringify(products),
      );
    }

  }, [products])

  const decrement = useCallback((index: number) => {

    if (validateItemInArray(index)) {
      products[index].quantity -= 1

      if (products[index].quantity <= 0) {
        products.splice(index, 1);
      }

      setProducts([...products]);

      localStorage.setItem(
        '@CartApp:products',
        JSON.stringify(products),
      );
    }
  }, [products])

  const totalInCart = useCallback(() => products.reduce((total, { quantity }) => quantity + total, 0,), [products])

  const value = useMemo(() => ({ addOrIncrementToCart, increment, decrement, products, totalInCart }), [products, addOrIncrementToCart, increment, decrement, totalInCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart(): ICartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
