

const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=8&api_key=9xhJYMVCupyqrZ1AKfMcXFcUeygeUW8H`;
    const rta = await fetch(url);
    const { data } = await rta.json();


    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs
}
export default getGifs;

