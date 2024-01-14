export async function getGuitars() {
    const response = await fetch(`${process.env.API_URL}/api/guitars?populate=image`);
    return await response.json();
}

export async function getGuitar(url) {
    const response = await fetch(`${process.env.API_URL}/api/guitars?filters[url]=${url}&populate=image`);
    return await response.json();
}