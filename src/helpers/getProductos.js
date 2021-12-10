var axios = require('axios')

// axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data))
//     })
//     .catch(function (error) {
//         console.log(error)
//     })

const getProductos = async () => {
    var config = {
        method: 'get',
        url: 'https://ecomerce-master.herokuapp.com/api/v1/item',
        headers: {},
    }

    try {
        const { data } = await axios(config)
        const itemsCategory = data.filter(item => item.category === 'Clothing')
        const items = itemsCategory.map(item => {
            return {
                isActive: item.isActive,
                _id: item._id,
                product_name: item.product_name,
                description: item.description,
                price: item.price,
                category: item.category,
                brand: item.brand,
                sku: item.sku,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt,
                __v: item.__v,
                image: item.image,
            }
        })
        return items
    } catch (error) {
        return [
            {
                isActive: false,
                _id: null,
                product_name: null,
                description: null,
                price: null,
                category: null,
                brand: null,
                sku: null,
                createdAt: null,
                updatedAt: null,
                __v: null,
                image: null,
            },
        ]
    }
}

export default getProductos
