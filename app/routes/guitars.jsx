import { Outlet, useLoaderData } from "@remix-run/react";

import styles from "../styles/guitars.css";
import { getGuitars } from "../models/guitars.server";

import GuitarsList from "../components/guitarsList";


export function meta(){
    return [
        {
            title: "GuitarLA - Store",
            description: "GuitarLA Store - Check out our Guitars Collection",
        }
    ]
}

export function links(){
    return [
        {rel: "stylesheet", href: styles}
    ]
}

export async function loader(){
    const guitars = await getGuitars();
    return guitars.data;
}

const Store = () => {
    const guitars = useLoaderData();

    return (
        <main className="container">
            <GuitarsList guitars={guitars} />
            <Outlet />
        </main>
    )
}

export default Store
