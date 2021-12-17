const getUsuario = async category => {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
            category
        )}&limit=10&api_key=SjgHAtoB1Bn8DOPBj4q6ArNdWnEt6BzX`
        const response = await fetch(url)
        const { data } = await response.json()

        const gifs = data.map(e => {
            return {
                id: e.id,
                title: e.title,
                img: e.images.downsized.url,
            }
        })

        return gifs
    } catch (e) {
        return [
            {
                id: 'error',
                title: 'ERROR',
                img: 'https://cdn.dribbble.com/users/2130329/screenshots/6621836/jiomoney_somethingwentwrong-01.png',
            },
        ]
    }
}

export default getFetchGifs
