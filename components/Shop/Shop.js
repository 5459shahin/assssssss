import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
   
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    
    const addToCart = (product) => {
        if (cart.length === 4) {
            alert("You can add only choose 4 product");
            return;
        }
        setCart([...cart, product]);
    }

    const chooseAgain = () => {
        setCart([])
    }

    const chooseBtn = () => {
        const arrayIndex = cart[Math.floor(Math.random() * cart.length)]
        setCart([arrayIndex]);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">

                {
                    products.map(product => <Product
                        key={product.id}
                        addToCart={addToCart}
                        product={product}
                    ></Product>)
                    
                }

               
            </div>
            <div className="cart-container">
                <h3>Order summary</h3>
                {
                    cart.map(product => <Cart cart={product}></Cart>)
                }
                <button onClick={chooseBtn} className='order-btn'>Choose 1 For Me</button> <br />
                <button onClick={chooseAgain} className='order-btn'>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;