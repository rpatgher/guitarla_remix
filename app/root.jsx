import { useState, useEffect } from "react";
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useRouteError,
    isRouteErrorResponse,
    Link
} from "@remix-run/react";

import styles from "./styles/index.css";
import Header from "./components/header";
import Footer from "./components/footer";

export function meta(){
    return [
        {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            title: "GuitarLA - Remix",
        }
    ]
}

export function links(){
    return [
        {rel: "stylesheet", href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"},
        {rel: "stylesheet", href: styles},
        {rel: "preconnect", href: "https://fonts.googleapis.com"},
        {rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "true" },
        {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"},
    ]
}

export default function App(){
    const carLS = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("cart")) ?? [] : [];
    const [cart, setCart] = useState(carLS);

    useEffect(() => {
        if(cart?.length === 0) return;
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = guitar => {
        if(cart.some(item => item.id === guitar.id)){
            setCart(cart.map(item => {
                if(item.id === guitar.id){
                    return {
                        ...item,
                        amount: guitar.amount
                    }
                }
                return item;
            }))
        }else{
            setCart([...cart, guitar]);
        }
    }

    const updateCart = ({id, amount}) => {
        setCart(cart.map(item => {
            if(item.id === id){
                return {
                    ...item,
                    amount
                }
            }
            return item;
        }))
    }

    const removeItem = id => {
        setCart(cart.filter(item => item.id !== id));
    }

    return (
        <Document>
            <Outlet
                context={{
                    cart,
                    addToCart,
                    updateCart,
                    removeItem
                }}
            />
        </Document>
    )
}

function Document({children}){
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}

                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

// Errors 
export function CatchBoundery(){
    const error = useRouteError();
    return (
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
        </Document>
    )
}

export function ErrorBoundary(){
    const error = useRouteError();
    if(isRouteErrorResponse(error)){
        return (
            <Document>
                <p className="error">{error.status} {error.statusText}</p>
                <Link className="error-link" to="/" >Go back to Home</Link>
            </Document>
        )
    }
    return (
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className="error-link" to="/" >Go back to Home</Link>
        </Document>
    )
}