import React, { createContext, useState, useCallback, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

interface IProduct {
  id: string;
  name: string;
  image: string;
  price: string;
  quantity: number;
}

interface ICartContext {
  products: IProduct[];
  addToCart(item: Omit<IProduct, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<ICartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      const productList = await AsyncStorage.getItem('@CartApp:products');

      if (productList) {
        setProducts(JSON.parse(productList));
      }
    })();
  }, []);

  const addToCart = useCallback(async (product: IProduct) => {

    const checkProductInCart = products.find(item => item.id === product.id);

    if (checkProductInCart) {
      const productIndex = products.findIndex(
        item => item.id === product.id,
      );

      products[productIndex].quantity += 1;

      setProducts([...products]);

      await AsyncStorage.setItem(
        '@CartApp:products',
        JSON.stringify(products),
      );

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

      setProducts(newProducts);

      await AsyncStorage.setItem(
        '@CartApp:products',
        JSON.stringify(newProducts),
      );
    }
  }, [products]);

  const increment = useCallback(async id => {
    const productIndex = products.findIndex(item => item.id === id);

    products[productIndex].quantity += 1;

    setProducts([...products]);

    await AsyncStorage.setItem(
      '@CartApp:products',
      JSON.stringify(products),
    );
  }, [products]);

  const decrement = useCallback(async id => {
    const productIndex = products.findIndex(item => item.id === id);

    products[productIndex].quantity -= 1;

    if (products[productIndex].quantity <= 0) {
      products.splice(productIndex, 1);
    }

    setProducts([...products]);

    await AsyncStorage.setItem(
      '@CartApp:products',
      JSON.stringify(products),
    );
  }, [products]);

  const value = React.useMemo(() => ({ addToCart, increment, decrement, products }),[products, addToCart, increment, decrement],);


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
