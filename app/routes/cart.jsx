import { useState, useEffect } from "react";
import { useOutletContext } from "@remix-run/react";
import styles from "../styles/cart.css";
import { ClientOnly } from 'remix-utils/client-only';

export function meta(){
    return [
        {
            title: "GuitarLA - Shopping Cart",
            description: "Guitars and accessories shopping cart, music, blog.",
        }
    ]
}

export function links(){
    return [
        {rel: "stylesheet", href: styles},
    ]
}

const Cart = () => {
    const {cart, updateCart, removeItem} = useOutletContext();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(cart.reduce((acc, item) => acc + (item.price * item.amount), 0));
    }, [cart]);

    return (
        <ClientOnly fallback={'loading...'}>
            {() => (
            <main className="container">
                <h1 className="heading">Shopping Cart</h1>

                <div className="content">
                    <div className="cart">
                        <h2>Articles</h2>
                        {cart?.length === 0 ? <p className="empty">Your cart is empty</p> : (
                            cart?.map(item => (
                                <div className="product" key={item.id}>
                                    <div>
                                        <img src={item.image} alt={`${item.name} Product Image`} />
                                    </div>
                                    <div>
                                        <p className="name">{item.name}</p>
                                        <p className="amount">Amount:</p>
                                        <select 
                                            className="select" 
                                            value={item.amount}
                                            onChange={e => updateCart({
                                                id: item.id,
                                                amount: +e.target.value
                                            })}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <p className="price">$<span>{item.price}</span></p>
                                        <p className="subtotal">Subtotal: $<span>{item.price * item.amount}</span></p>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn-remove"
                                        onClick={() => removeItem(item.id)}
                                    >X</button>
                                </div>
                            ))
                        )}
                    </div>
                    <aside className="overview">
                        <h3>Order Overview</h3>
                        <p>Total: ${total}</p>
                    </aside>
                </div>
            </main>
            )}
        </ClientOnly>
    )
}

export default Cart
