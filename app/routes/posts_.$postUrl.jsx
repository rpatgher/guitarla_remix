import { useLoaderData } from "@remix-run/react";

import styles from "../styles/blog.css";

import { formatDate } from "../utils/helpers";
import { getPost } from "../models/posts.server";

export function meta({data}){
    if(!data || Object.keys(data).length === 0){
        return [
            {
                title: "GuitarLA - Not Found",
                description: "GuitarLA Store - Post Not Found",
            }
        ]
    }
    return [
        {
            title: `GuitarLA - ${data.data[0].attributes.title}`,
            description: `GuitarLA Store - Read ${data.data[0].attributes.title}`,
        }
    ]
}

export function links(){
    return [
        {rel: "stylesheet", href: styles}
    ]
}

export async function loader({params}){
    const { postUrl } = params;
    const post = await getPost(postUrl);
    if(post.data.length === 0){
        throw new Response("", {
            status: 404,
            statusText: "Post Not Found",
            data: {}
        });
    }
    return post;
}

const Post = () => {
    const post = useLoaderData();
    const { title, content, image, publishedAt } = post.data[0].attributes;
    const imageUrl = image?.data.attributes.url
    return (
        <article className="post container mt-3">
            <img className="image" src={imageUrl} alt={`${title} Post Image`} />
            <div className="content">
                <h3>{title}</h3>
                <p className="date">{formatDate(publishedAt)}</p>
                <p className="text">{content}</p>
            </div>
        </article>
    )
}

export default Post
