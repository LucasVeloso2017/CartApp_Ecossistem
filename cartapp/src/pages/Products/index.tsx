import React, { useState, useEffect } from 'react';

import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';

import { useToast } from '../../hooks/ToastContext';
import { api } from '../../services/api';

import { Body, Container } from './styles';

interface IProductProps {
    id: string
    name: string
    price: string
    image: string
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<IProductProps[]>([])
    const { addToast } = useToast()

    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get<IProductProps[]>('product')
                setProducts(data)
            } catch (error) {
                addToast({
                    type: 'error',
                    title: 'Error',
                    description: 'Erro ao comunicar-se com o servidor'
                })
            }
        })();
    }, [addToast])

    return (
        <Container>
            <Header />
            <Body>
                <div className="product-grid">
                    {
                        products.map(({id,name,price,image}) => {
                            return (
                                <div key={id} id="card-container">
                                    <ProductCard 
                                        product={{
                                            id,
                                            name,
                                            price,
                                            image
                                        }}
                                    />
                                </div>
                            )
                        })
                    }
                </div>

            </Body>
        </Container>
    );
}

export default Products;