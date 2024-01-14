import { useState } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";

import { getGuitar } from "../models/guitars.server"
import styles from "../styles/guitars.css";

export function meta({data}){
    if(!data || Object.keys(data).length === 0){
        return [
            {
                title: "GuitarLA - Not Found",
                description: "GuitarLA Store - Guitar Not Found",
            }
        ]
    }
    return [
        {
            title: `GuitarLA - ${data.attributes.name}`,
            description: `GuitarLA Store - Buy the ${data.attributes.name} Guitar`,
        }
    ]
}

export function links(){
    return [
        {rel: "stylesheet", href: styles}
    ]
}

export async function loader({params}){
    const { guitarUrl } = params;
    const guitar = await getGuitar(guitarUrl);
    if(guitar.data.length === 0){
        throw new Response("", {
            status: 404,
            statusText: "Guitar Not Found",
            data: {}
        });
    }
    return guitar.data[0];
}

const Guitar = () => {
    const { addToCart } = useOutletContext();
    const [amount, setAmount] = useState(0);

    const guitar = useLoaderData();
    const { name, price, description, image } = guitar.attributes;
    const imageUrl = image.data.attributes.formats.medium.url;

    const handleSubmit = e => {
        e.preventDefault();
        if(amount < 1){
            alert("Please select an amount");
            return;
        }
        const selectedGuitar = {
            id: guitar.id,
            image: imageUrl,
            name,
            price,
            amount
        }
        addToCart(selectedGuitar);
    }

    return (
        <main className="container guitar">
            <img className="image" src={imageUrl} alt={`${name} Guitar Image`} />
            <div className="content">
                <h3>{name}</h3>
                <p className="text">{description}</p>
                <p className="price">${price}</p>

                <form
                    className="form"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="amount">Amount</label>
                    <select 
                        name="amount" 
                        id="amount"
                        onChange={e => setAmount(+e.target.value)}
                    >
                        <option value="0">--- Select ---</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input type="submit" value="Add to Cart" />
                </form>
            </div>
        </main>
    )
}

export default Guitar
