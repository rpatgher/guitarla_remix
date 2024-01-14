import { Outlet, useLoaderData } from "@remix-run/react";

import PostsList from "../components/postsList";

import styles from "../styles/blog.css";
import { getPosts } from "../models/posts.server";

export function meta(){
    return [
        {
            title: "GuitarLA - Blog",
            description: "GuitarLA Store - Blog about Music and Guitars",
        }
    ]
}

export function links(){
    return [
        {rel: "stylesheet", href: styles}
    ]
}

export async function loader(){
    const posts = await getPosts();
    return posts.data;
}


const Blog = () => {
    const posts = useLoaderData();
    return (
        <main className="container">
            <PostsList posts={posts} />
            <Outlet />
        </main>
    )
}

export default Blog
