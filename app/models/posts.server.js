export async function getPosts() {
    const response = await fetch(`${process.env.API_URL}/api/posts?populate=image`);
    return await response.json();
}

export async function getPost(url) {
    const response = await fetch(`${process.env.API_URL}/api/posts?filters[url]=${url}&populate=image`);
    return await response.json();
}